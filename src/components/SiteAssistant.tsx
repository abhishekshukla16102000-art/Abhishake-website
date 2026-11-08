"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { searchWebsite } from "@/components/websiteKnowledge";

type Variant = "general" | "sps";
type ChatMessage = {
  id: number;
  role: "assistant" | "visitor";
  text: string;
  sources?: { title: string; href: string }[];
};

const avatar = "/profile_navy_chin.png";
const email = "mailto:abhishek@iabhishekshukla.com?subject=Website%20enquiry";

const suggestions: Record<Variant, string[]> = {
  general: [
    "What services does Abhishek offer?",
    "Tell me about his experience",
    "How can I contact Abhishek?",
  ],
  sps: [
    "What BPO services does SPS offer?",
    "How is the project team arranged?",
    "How do I request a quotation?",
  ],
};

function makeAnswer(question: string, variant: Variant): ChatMessage {
  const q = question.trim().toLowerCase();

  if (/^(hi|hello|hey|good morning|good afternoon|good evening|namaste)[!. ]*$/.test(q)) {
    return {
      id: 0,
      role: "assistant",
      text: variant === "sps"
        ? "Hello! Welcome to SPS NEXUS TECH. What would you like to know about our call-centre, customer-support or BPO services?"
        : "Hello! Welcome. I'm here to help you find information about Abhishek's work, services and SPS NEXUS TECH.",
    };
  }

  if (/(who are you|are you abhishek|are you a real person|is this abhishek)/.test(q)) {
    return {
      id: 0,
      role: "assistant",
      text: "I'm Abhishek's website assistant. I use information published on this website to answer common questions and help visitors find the right page. For a direct conversation, you can email Abhishek.",
      sources: [{ title: "Email Abhishek", href: email }],
    };
  }

  const results = searchWebsite(question, variant);
  const best = results[0];

  if (!best || best.score < 8 || best.coverage < 0.6) {
    return {
      id: 0,
      role: "assistant",
      text: "I couldn't find a clear answer to that in the information published on this website. I don't want to guess. Please contact Abhishek and he can help with your specific question.",
      sources: [
        { title: "Email Abhishek", href: email },
        ...(variant === "sps"
          ? [{ title: "SPS NEXUS TECH project enquiry", href: "/customer-support-outsourcing#project-enquiry" }]
          : [{ title: "Explore business services", href: "/business" }]),
      ],
    };
  }

  const selected = results
    .filter((item, index) => index === 0 || (
      index === 1 &&
      item.score >= best.score * 0.68 &&
      item.passage.id !== best.passage.id
    ))
    .slice(0, 2);

  const sources: { title: string; href: string }[] = [];
  for (const { passage } of selected) {
    if (!sources.some((source) => source.href === passage.href)) {
      sources.push({
        title: passage.href === "/" ? "Read on the homepage" : "Read more: " + passage.title,
        href: passage.href,
      });
    }
  }

  return {
    id: 0,
    role: "assistant",
    text: selected.map(({ passage }) => passage.content).join("\n\n"),
    sources,
  };
}

export default function SiteAssistant({ variant = "general" }: { variant?: Variant }) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: "assistant",
      text: variant === "sps"
        ? "Hello, I'm Abhishek's assistant for SPS NEXUS TECH. Ask me about our human-led BPO, call-centre and customer-support services, or how to discuss a project."
        : "Hello, I'm Abhishek's website assistant. Ask me about his services, experience, insights, professional support or SPS NEXUS TECH.",
    },
  ]);
  const [nextId, setNextId] = useState(2);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  function sendMessage(value: string) {
    const question = value.trim();
    if (!question) return;

    const reply = makeAnswer(question, variant);
    setMessages((current) => [
      ...current,
      { id: nextId, role: "visitor", text: question },
      { ...reply, id: nextId + 1 },
    ]);
    setNextId((current) => current + 2);
    setInput("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage(input);
  }

  const title = variant === "sps" ? "SPS NEXUS TECH" : "Abhishek Shukla";

  return (
    <div className="fixed bottom-4 right-4 z-[90] font-sans sm:bottom-6 sm:right-6">
      {isOpen && (
        <section
          aria-label={title + " assistant"}
          className="mb-3 flex h-[min(650px,calc(100dvh-112px))] w-[min(410px,calc(100vw-32px))] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-950/25"
        >
          <header className="flex items-center gap-3 bg-slate-950 px-5 py-4 text-white">
            <img
              src={avatar}
              alt="Abhishek Shukla"
              className="h-11 w-11 shrink-0 rounded-full border-2 border-sky-300 object-cover object-top"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{title}</p>
              <p className="mt-1 text-xs text-slate-300">Website assistant</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-xl leading-none text-white transition hover:bg-white/10"
              aria-label="Close chat"
            >
              ×
            </button>
          </header>

          <div className="flex-1 space-y-4 overflow-y-auto bg-slate-50 px-4 py-4" aria-live="polite">
            {messages.map((message) => (
              <div key={message.id} className={message.role === "visitor" ? "flex justify-end" : "flex items-start justify-start gap-2"}>
                {message.role === "assistant" && (
                  <img
                    src={avatar}
                    alt=""
                    aria-hidden="true"
                    className="mt-1 h-8 w-8 shrink-0 rounded-full border border-slate-200 object-cover object-top"
                  />
                )}
                <div
                  className={
                    message.role === "visitor"
                      ? "max-w-[88%] rounded-2xl rounded-br-md bg-slate-900 px-4 py-3 text-sm leading-6 text-white"
                      : "max-w-[88%] rounded-2xl rounded-bl-md border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-700 shadow-sm"
                  }
                >
                  <p className="whitespace-pre-wrap">{message.text}</p>
                  {message.sources && message.sources.length > 0 && (
                    <div className="mt-3 flex flex-col items-start gap-2 border-t border-slate-100 pt-3">
                      {message.sources.map((source) => (
                        <a
                          key={source.href + source.title}
                          href={source.href}
                          className="text-xs font-semibold text-sky-800 underline decoration-sky-200 underline-offset-4 transition hover:text-sky-600"
                        >
                          {source.title} →
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="ml-10 flex flex-wrap gap-2 pt-1">
                {suggestions[variant].map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => sendMessage(suggestion)}
                    className="rounded-full border border-slate-200 bg-white px-3 py-2 text-left text-xs font-medium text-slate-700 transition hover:border-sky-300 hover:bg-sky-50"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          <form onSubmit={handleSubmit} className="border-t border-slate-200 bg-white p-3">
            <div className="flex items-center gap-2 rounded-2xl border border-slate-300 bg-white p-1.5 focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-100">
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask me a question..."
                aria-label="Ask a question"
                autoComplete="off"
                className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                maxLength={500}
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Send
              </button>
            </div>
          </form>
        </section>
      )}

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close website assistant" : "Open website assistant"}
          className="inline-flex items-center gap-2 rounded-full bg-slate-950 py-2 pl-2 pr-5 text-sm font-semibold text-white shadow-xl shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-sky-200"
        >
          <img
            src={avatar}
            alt=""
            aria-hidden="true"
            className="h-9 w-9 rounded-full border-2 border-sky-300 object-cover object-top"
          />
          {isOpen ? "Close chat" : "Ask me"}
        </button>
      </div>
    </div>
  );
}

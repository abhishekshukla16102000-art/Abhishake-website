"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";

type Variant = "site" | "sps";
type LinkItem = { label: string; href: string };
type ChatMessage = {
  id: number;
  role: "assistant" | "visitor";
  text: string;
  links?: LinkItem[];
};

type ChatResponse = {
  answer?: string;
  sources?: LinkItem[];
  error?: string;
};

const suggestions = {
  site: [
    "What services does Abhishek offer?",
    "Tell me about Abhishek",
    "What is SPS NEXUS TECH?",
  ],
  sps: [
    "What BPO services do you offer?",
    "How is the project team arranged?",
    "How is pricing decided?",
  ],
};

const welcomeMessages = {
  site: "Hi! I'm Abhishek's website assistant. I can help you explore his profile, consulting services, resources and SPS NEXUS TECH. What would you like to know?",
  sps: "Hi! I'm the SPS NEXUS TECH assistant. I can help with our human-led calling, customer queries, e-commerce support, back-office services and project enquiries. What would you like to know?",
};

export default function SiteAssistant({ variant = "site" }: { variant?: Variant }) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, role: "assistant", text: welcomeMessages[variant] },
  ]);
  const [nextId, setNextId] = useState(2);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isOpen, isLoading]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  async function sendMessage(value: string) {
    const question = value.trim();
    if (!question || isLoading) return;

    const visitorId = nextId;
    const assistantId = nextId + 1;
    const previousQuestions = messages
      .filter((message) => message.role === "visitor")
      .slice(-2)
      .map((message) => message.text);

    setMessages((current) => [
      ...current,
      { id: visitorId, role: "visitor", text: question },
    ]);
    setNextId((current) => current + 2);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question,
          variant,
          context: previousQuestions,
        }),
      });
      const data = (await response.json()) as ChatResponse;

      if (!response.ok || !data.answer) {
        throw new Error(data.error || "The assistant could not retrieve an answer.");
      }

      setMessages((current) => [
        ...current,
        {
          id: assistantId,
          role: "assistant",
          text: data.answer || "I couldn't retrieve an answer.",
          links: data.sources || [],
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          id: assistantId,
          role: "assistant",
          text: "I'm having trouble retrieving that answer right now. Please try again, or contact Abhishek directly.",
          links: [{ label: "Email Abhishek", href: "mailto:abhishek@iabhishekshukla.com" }],
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  const title = variant === "sps" ? "SPS NEXUS TECH Assistant" : "Abhishek's Website Assistant";

  return (
    <div className="fixed bottom-4 right-4 z-[90] font-sans sm:bottom-6 sm:right-6">
      {isOpen && (
        <section
          aria-label={title}
          className="mb-3 flex h-[min(650px,calc(100dvh-112px))] w-[min(400px,calc(100vw-32px))] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-950/20"
        >
          <header className="flex items-center justify-between gap-3 bg-slate-950 px-4 py-4 text-white">
            <div className="flex min-w-0 items-center gap-3">
              <img
                src="/profile_navy_chin.png"
                alt="Abhishek Shukla"
                className="h-11 w-11 shrink-0 rounded-full border-2 border-white/30 object-cover object-top"
                loading="lazy"
              />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{title}</p>
                <p className="mt-1 text-xs text-slate-300">How can I help you?</p>
              </div>
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

          <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50 px-4 py-4" aria-live="polite">
            {messages.map((message) => (
              <div key={message.id} className={message.role === "visitor" ? "flex justify-end" : "flex justify-start"}>
                {message.role === "assistant" && (
                  <img
                    src="/profile_navy_chin.png"
                    alt=""
                    aria-hidden="true"
                    className="mr-2 mt-1 h-7 w-7 shrink-0 rounded-full object-cover object-top"
                    loading="lazy"
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
                  {message.links && message.links.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {message.links.map((link) => (
                        <a
                          key={link.href + link.label}
                          href={link.href}
                          className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-800 transition hover:border-sky-400 hover:bg-sky-100"
                        >
                          {link.label} <span aria-hidden="true" className="ml-1">→</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center justify-start">
                <img
                  src="/profile_navy_chin.png"
                  alt=""
                  aria-hidden="true"
                  className="mr-2 h-7 w-7 shrink-0 rounded-full object-cover object-top"
                />
                <div className="rounded-2xl rounded-bl-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500 shadow-sm">
                  Checking the website information…
                </div>
              </div>
            )}

            {messages.length === 1 && !isLoading && (
              <div className="flex flex-wrap gap-2 pt-1">
                {suggestions[variant].map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => void sendMessage(suggestion)}
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
                placeholder="Type your question..."
                aria-label="Type your question"
                autoComplete="off"
                className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                maxLength={500}
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {isLoading ? "…" : "Send"}
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
            src="/profile_navy_chin.png"
            alt=""
            aria-hidden="true"
            className="h-9 w-9 rounded-full border border-white/30 object-cover object-top"
            loading="lazy"
          />
          {isOpen ? "Close chat" : "Chat with Abhishek's Assistant"}
        </button>
      </div>
    </div>
  );
}

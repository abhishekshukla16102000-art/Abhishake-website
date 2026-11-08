"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";

type Variant = "site" | "sps";
type LinkItem = { label: string; href: string };
type Reply = { text: string; links?: LinkItem[] };
type ChatMessage = {
  id: number;
  role: "assistant" | "visitor";
  text: string;
  links?: LinkItem[];
};

type KnowledgeEntry = {
  keys: string[];
  reply: Reply;
};

const contactLink: LinkItem = {
  label: "Email Abhishek",
  href: "mailto:abhishek@iabhishekshukla.com?subject=Website%20enquiry",
};
const bpoLink: LinkItem = {
  label: "SPS NEXUS TECH services",
  href: "/customer-support-outsourcing",
};
const enquiryLink: LinkItem = {
  label: "Send a project enquiry",
  href: "/customer-support-outsourcing#project-enquiry",
};

const spsKnowledge: KnowledgeEntry[] = [
  {
    keys: ["inbound", "outbound", "call centre", "call center", "calling", "phone support", "telephone", "bpo", "customer support", "customer service", "outsourcing", "sps nexus"],
    reply: {
      text: "SPS NEXUS TECH discusses human-led, project-based BPO and customer-support work. Areas include inbound and outbound calling, customer queries, email support, e-commerce and order enquiries, and defined back-office tasks. The final scope is agreed after reviewing your requirements.",
      links: [enquiryLink],
    },
  },
  {
    keys: ["e commerce", "ecommerce", "order status", "delivery", "returns", "exchange", "shopping support"],
    reply: {
      text: "The SPS NEXUS TECH page includes e-commerce and order support, such as order-status questions, delivery updates, returns or exchange enquiries, and customer follow-ups based on your policies.",
      links: [enquiryLink],
    },
  },
  {
    keys: ["back office", "data entry", "administrative", "admin work", "documentation", "verification"],
    reply: {
      text: "SPS NEXUS TECH can discuss project-defined back-office work, including administrative tasks, data entry, documentation, verification, and routine process support. The exact process and controls need to be agreed before launch.",
      links: [enquiryLink],
    },
  },
  {
    keys: ["team", "staff", "employees", "agents", "recruit", "recruitment", "training", "team size", "ready team"],
    reply: {
      text: "Staffing is planned around each signed project. After the scope and commercial terms are agreed, project-specific recruitment and training can be arranged. Team size, coverage, and start dates are confirmed before launch rather than assumed in advance.",
      links: [enquiryLink],
    },
  },
  {
    keys: ["international", "outside india", "overseas", "usa", "united states", "uk", "united kingdom", "uae", "dubai", "australia", "global"],
    reply: {
      text: "SPS NEXUS TECH is open to discussing international projects. Country, time zone, language requirements, data-protection obligations, systems access, and commercial feasibility are reviewed before confirming delivery.",
      links: [enquiryLink],
    },
  },
  {
    keys: ["price", "pricing", "cost", "rate", "quote", "quotation", "budget", "charges"],
    reply: {
      text: "There is no one-size-fits-all public rate. Pricing depends on the work type, expected volume, staffing profile, operating hours, training, systems, quality requirements, and contract duration. Share the requirement to discuss a suitable proposal.",
      links: [enquiryLink],
    },
  },
  {
    keys: ["start", "get started", "how to begin", "next step", "project process", "onboard", "onboarding"],
    reply: {
      text: "The usual first step is to share your service requirement, expected workload, operating hours, language needs, systems, quality expectations, and target start date. SPS NEXUS TECH can then review feasibility and discuss scope, pricing, responsibilities, and launch planning.",
      links: [enquiryLink],
    },
  },
  {
    keys: ["language", "languages", "working hours", "time zone", "timezone", "24/7", "coverage", "weekend", "shift"],
    reply: {
      text: "Languages, operating hours, time-zone coverage, shift patterns, and service levels are confirmed for each project after the requirements and delivery feasibility have been reviewed.",
      links: [enquiryLink],
    },
  },
  {
    keys: ["contact", "email", "talk", "speak", "meeting", "call you", "reach"],
    reply: {
      text: "You can send a project enquiry through the SPS NEXUS TECH form or email Abhishek directly. Include your company, the support process, expected volume, operating hours, and target start date.",
      links: [enquiryLink, contactLink],
    },
  },
  {
    keys: ["human", "real person", "person", "are you a bot", "who am i speaking"],
    reply: {
      text: "I'm the website's automated assistant. I can answer common questions using the published SPS NEXUS TECH information. For a detailed discussion, please contact Abhishek directly.",
      links: [contactLink],
    },
  },
];

const siteKnowledge: KnowledgeEntry[] = [
  ...spsKnowledge,
  {
    keys: ["what services", "your services", "services", "what do you do", "what can you help", "business consulting", "consulting"],
    reply: {
      text: "This website brings together business and customer-experience consulting, AI readiness and adoption information, operations-related support, career guidance, and SPS NEXUS TECH outsourcing services. Choose the relevant area below or send a message for help finding the right page.",
      links: [
        { label: "Business services", href: "/business" },
        { label: "AI readiness consulting", href: "/ai-readiness-consulting" },
        { label: "SPS NEXUS TECH", href: "/customer-support-outsourcing" },
      ],
    },
  },
  {
    keys: ["customer experience", "cx", "contact centre consulting", "contact center consulting", "call centre consulting", "call center consulting"],
    reply: {
      text: "The website includes contact-centre and customer-experience consulting information. For traditional outsourced calling, customer-query handling, or back-office project enquiries, visit the SPS NEXUS TECH page.",
      links: [
        { label: "Contact-centre consulting", href: "/contact-centre-bpo-consulting" },
        bpoLink,
      ],
    },
  },
  {
    keys: ["ai readiness", "ai adoption", "ai consulting", "artificial intelligence"],
    reply: {
      text: "The website includes information about AI readiness and adoption consulting. The right starting point depends on your organisation's goals and current processes.",
      links: [{ label: "AI readiness consulting", href: "/ai-readiness-consulting" }, contactLink],
    },
  },
  {
    keys: ["career", "job search", "interview", "resume", "cv", "linkedin profile", "professional development"],
    reply: {
      text: "The website also covers career-related guidance, including job-search, interview, LinkedIn positioning, and professional-development topics. Send a message describing the support you need and Abhishek can direct you to the relevant information.",
      links: [contactLink],
    },
  },
  {
    keys: ["abhishek", "founder", "who owns", "who runs", "about you", "about the website"],
    reply: {
      text: "This is Abhishek Shukla's website. It brings together his business and consulting work and the SPS NEXUS TECH outsourcing initiative. For a specific business or collaboration enquiry, you can contact him directly.",
      links: [contactLink, bpoLink],
    },
  },
  {
    keys: ["collaboration", "partnership", "partner", "business opportunity", "work together"],
    reply: {
      text: "For a collaboration or business discussion, send a short note describing your organisation, the opportunity, and what you would like to explore. Abhishek can review the details and respond.",
      links: [contactLink],
    },
  },
  {
    keys: ["contact", "email", "talk", "speak", "meeting", "reach"],
    reply: {
      text: "You can contact Abhishek by email. For traditional call-centre or BPO requirements, the SPS NEXUS TECH project enquiry page is also available.",
      links: [contactLink, enquiryLink],
    },
  },
  {
    keys: ["human", "real person", "person", "are you a bot", "who am i speaking"],
    reply: {
      text: "I'm the website's self-hosted automated assistant. I answer common questions from prepared website information. I don't replace a direct conversation with Abhishek.",
      links: [contactLink],
    },
  },
];

const suggestions = {
  site: ["What services are available?", "Tell me about SPS NEXUS TECH", "How can I contact Abhishek?"],
  sps: ["What BPO services do you offer?", "How is a project team arranged?", "How do I request a proposal?"],
};

function normalise(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function findReply(question: string, variant: Variant): Reply {
  const q = normalise(question);
  const entries = variant === "sps" ? spsKnowledge : siteKnowledge;

  if (variant === "sps" && /\\b(ai|chatbot|automation)\\b/.test(q)) {
    return {
      text: "This SPS NEXUS TECH page is focused on traditional, human-led BPO and customer-support services, including calling and customer-query handling. It does not present an AI-plus-human service offer.",
      links: [enquiryLink],
    };
  }

  if (/^(hi|hello|hey|good morning|good afternoon|good evening|namaste)$/.test(q)) {
    return {
      text: variant === "sps"
        ? "Hello! I'm the SPS NEXUS TECH assistant. Ask me about human-led call-centre support, BPO services, project requirements, staffing, or proposals."
        : "Hello! I'm the website assistant. I can help you find information about the website's services, consulting topics, and SPS NEXUS TECH.",
    };
  }

  let best: KnowledgeEntry | undefined;
  let bestScore = 0;

  for (const entry of entries) {
    let score = 0;
    for (const key of entry.keys) {
      const phrase = normalise(key);
      if (!phrase) continue;
      if (q.includes(phrase)) {
        score += phrase.includes(" ") ? 3 : 1;
      }
    }
    if (score > bestScore) {
      best = entry;
      bestScore = score;
    }
  }

  if (best && bestScore >= 1) return best.reply;

  return {
    text: "I don't have a reliable answer for that yet, and I don't want to guess. Please send the question to Abhishek and the team can respond directly.",
    links: variant === "sps" ? [enquiryLink, contactLink] : [contactLink, bpoLink],
  };
}

export default function SiteAssistant({ variant = "site" }: { variant?: Variant }) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: "assistant",
      text: variant === "sps"
        ? "Welcome to SPS NEXUS TECH. I can help with our human-led BPO and customer-support services, project enquiries, and next steps. What would you like to know?"
        : "Welcome! I can help you explore this website, its consulting topics, and SPS NEXUS TECH services. What would you like to know?",
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

    const reply = findReply(question, variant);
    setMessages((current) => [
      ...current,
      { id: nextId, role: "visitor", text: question },
      { id: nextId + 1, role: "assistant", text: reply.text, links: reply.links },
    ]);
    setNextId((current) => current + 2);
    setInput("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage(input);
  }

  const title = variant === "sps" ? "SPS NEXUS TECH Assistant" : "Website Assistant";

  return (
    <div className="fixed bottom-4 right-4 z-[90] font-sans sm:bottom-6 sm:right-6">
      {isOpen && (
        <section
          aria-label={title}
          className="mb-3 flex h-[min(620px,calc(100dvh-112px))] w-[min(390px,calc(100vw-32px))] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-950/20"
        >
          <header className="flex items-center justify-between gap-3 bg-slate-950 px-5 py-4 text-white">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">{title}</p>
              <p className="mt-1 text-xs text-slate-300">Self-hosted · No chatbot subscription</p>
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
                <div
                  className={
                    message.role === "visitor"
                      ? "max-w-[88%] rounded-2xl rounded-br-md bg-slate-900 px-4 py-3 text-sm leading-6 text-white"
                      : "max-w-[92%] rounded-2xl rounded-bl-md border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-700 shadow-sm"
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

            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
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
                placeholder="Type your question..."
                aria-label="Type your question"
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
            <p className="px-1 pt-2 text-[11px] leading-4 text-slate-500">
              Answers use prepared website information. Messages stay in this browser session.
            </p>
          </form>
        </section>
      )}

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close website assistant" : "Open website assistant"}
          className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white shadow-xl shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-sky-200"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-300 text-slate-950" aria-hidden="true">✦</span>
          {isOpen ? "Close chat" : "Chat with us"}
        </button>
      </div>
    </div>
  );
}

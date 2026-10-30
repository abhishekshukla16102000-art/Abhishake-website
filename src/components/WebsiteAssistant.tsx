"use client";

import {
  Bot,
  LoaderCircle,
  MessageCircle,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import {
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const suggestions = [
  "What services do you offer?",
  "Tell me about SPS Nexus Tech.",
  "How can I work with Abhishek?",
];

function extractContent(eventData: string): string {
  if (eventData === "[DONE]") return "";
  try {
    const parsed = JSON.parse(eventData) as {
      choices?: Array<{ delta?: { content?: unknown } }>;
    };
    const content = parsed.choices?.[0]?.delta?.content;
    return typeof content === "string" ? content : "";
  } catch {
    return "";
  }
}

export function WebsiteAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isBusy, setIsBusy] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      scrollAreaRef.current?.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const submitMessage = async (rawText: string) => {
    const text = rawText.trim();
    if (!text || isBusy) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
    };
    const assistantMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: "",
    };
    const nextMessages = [...messages, userMessage];

    setMessages([...nextMessages, assistantMessage]);
    setInput("");
    setErrorMessage("");
    setIsBusy(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map(({ role, content }) => ({ role, content })),
        }),
      });

      if (!response.ok) {
        const error = (await response.json().catch(() => ({}))) as {
          error?: string;
        };
        throw new Error(
          error.error || "The assistant could not answer just now. Please try again.",
        );
      }

      if (!response.body) {
        throw new Error("The assistant returned an empty response. Please try again.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let assistantText = "";
      let finished = false;

      const appendText = (addition: string) => {
        if (!addition) return;
        assistantText += addition;
        setMessages((current) =>
          current.map((message) =>
            message.id === assistantMessage.id
              ? { ...message, content: assistantText }
              : message,
          ),
        );
      };

      while (!finished) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true }).replace(/\r\n/g, "\n");
        const events = buffer.split("\n\n");
        buffer = events.pop() ?? "";

        for (const event of events) {
          const data = event
            .split("\n")
            .filter((line) => line.startsWith("data:"))
            .map((line) => line.slice(5).trim())
            .join("\n");

          if (!data) continue;
          if (data === "[DONE]") {
            finished = true;
            break;
          }

          appendText(extractContent(data));
        }
      }

      if (!assistantText.trim()) {
        throw new Error("The assistant returned an empty answer. Please try again.");
      }
    } catch (error) {
      setMessages((current) =>
        current.filter(
          (message) =>
            message.id !== assistantMessage.id || message.content.trim().length > 0,
        ),
      );
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "I couldn’t complete that reply. Please try again.",
      );
    } finally {
      setIsBusy(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void submitMessage(input);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Close website assistant" : "Open website assistant"}
        aria-expanded={isOpen}
        className="fixed bottom-5 right-5 z-[80] flex items-center gap-3 rounded-full bg-[#0284c7] px-5 py-4 text-sm font-semibold text-white shadow-2xl shadow-slate-950/25 transition hover:-translate-y-0.5 hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-300"
      >
        {isOpen ? <X size={19} /> : <MessageCircle size={20} />}
        <span>{isOpen ? "Close chat" : "Ask about this website"}</span>
      </button>

      {isOpen && (
        <section
          role="dialog"
          aria-label="iAbhishekShukla.com website assistant"
          aria-modal="false"
          className="fixed bottom-[5.5rem] right-3 z-[80] flex h-[min(690px,calc(100dvh-7.5rem))] w-[min(420px,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.28)] sm:right-5"
        >
          <div className="flex items-center justify-between gap-4 bg-[#0f172a] px-5 py-4 text-white">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-sky-500/20 text-sky-300">
                <Bot size={22} />
              </div>
              <div className="min-w-0">
                <h2 className="truncate text-base font-bold">Website assistant</h2>
                <p className="text-xs text-slate-300">
                  iAbhishekShukla.com · Website questions only
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          <div
            ref={scrollAreaRef}
            className="flex-1 space-y-4 overflow-y-auto bg-slate-50 px-4 py-5"
          >
            {messages.length === 0 && (
              <div className="space-y-4">
                <div className="max-w-[92%] rounded-2xl rounded-tl-md border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <Sparkles size={15} className="text-sky-600" />
                    Hello! How can I help?
                  </div>
                  <p className="text-sm leading-6 text-slate-600">
                    Ask me about Abhishek, SPS Nexus Tech, consulting services, career support,
                    the book, resources, or how to get in touch. I answer using information
                    from this website only.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="px-1 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    Suggested questions
                  </p>
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => void submitMessage(suggestion)}
                      disabled={isBusy}
                      className="block w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-left text-sm text-slate-700 transition hover:border-sky-300 hover:bg-sky-50 disabled:opacity-50"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={
                  "flex " + (message.role === "user" ? "justify-end" : "justify-start")
                }
              >
                <div
                  className={
                    "max-w-[88%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-6 " +
                    (message.role === "user"
                      ? "rounded-br-md bg-[#0284c7] text-white"
                      : "rounded-bl-md border border-slate-200 bg-white text-slate-700 shadow-sm")
                  }
                >
                  {message.content}
                </div>
              </div>
            ))}

            {isBusy && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-2xl rounded-bl-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500 shadow-sm">
                  <LoaderCircle size={15} className="animate-spin text-sky-600" />
                  Looking through the website information…
                </div>
              </div>
            )}

            {errorMessage && (
              <p
                role="alert"
                className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs leading-5 text-rose-700"
              >
                {errorMessage}
              </p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-slate-200 bg-white p-3">
            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-2 transition focus-within:border-sky-400 focus-within:ring-2 focus-within:ring-sky-100">
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                maxLength={2000}
                placeholder="Ask a question about this website…"
                aria-label="Ask a question about this website"
                className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                disabled={isBusy}
              />
              <button
                type="submit"
                aria-label="Send message"
                disabled={!input.trim() || isBusy}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0284c7] text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                {isBusy ? (
                  <LoaderCircle size={17} className="animate-spin" />
                ) : (
                  <Send size={17} />
                )}
              </button>
            </div>
            <p className="mt-2 text-center text-[10px] leading-4 text-slate-400">
              Website information only. Please don’t share passwords or confidential details.
            </p>
          </form>
        </section>
      )}
    </>
  );
}

"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown, MessageCircleQuestion } from "lucide-react";

const faqs = [
  {
    number: "01",
    question: "What customer support services can SPS Nexus Tech discuss?",
    answer: "We can assess inbound and outbound calling, customer query handling, e-commerce and order support, email support, appointment follow-ups, and project-defined back-office work. The exact scope is shaped around your workflow and requirements.",
  },
  {
    number: "02",
    question: "Do you already have a large, ready-to-deploy team?",
    answer: "Staffing is planned around each signed project. Once the scope, commercial terms, and requirements are agreed in a contract, project-specific recruitment and training can be arranged. Team size and start dates are confirmed before launch.",
  },
  {
    number: "03",
    question: "Can you support businesses outside India?",
    answer: "We are open to discussing international projects. Country, time-zone coverage, language needs, data-protection obligations, systems access, and commercial feasibility are reviewed before delivery is confirmed.",
  },
  {
    number: "04",
    question: "How is project pricing decided?",
    answer: "Pricing depends on the work type, expected volume, staffing profile, operating hours, training, systems, quality requirements, and contract duration. We prepare a proposal after understanding the requirement.",
  },
  {
    number: "05",
    question: "What happens after I submit an enquiry?",
    answer: "We review the information you provide and, if the requirement looks suitable, arrange an introductory discussion. Scope, feasibility, responsibilities, pricing, and timelines are agreed before any delivery commitment.",
  },
];

export default function SpsFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-[#071426] px-5 py-20 text-white sm:px-8 sm:py-24">
      <div className="pointer-events-none absolute -right-28 -top-32 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">
            <MessageCircleQuestion size={14} aria-hidden="true" />
            Good to know
          </div>
          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            A few things you may want to <span className="text-sky-300">know first.</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-slate-300">
            Clear answers about project scope, team planning, international support, and what happens next.
          </p>
          <a href="#project-enquiry" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition hover:text-white">
            Still have a question? Talk to us <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <p className="mt-12 hidden text-xs font-medium uppercase tracking-[0.2em] text-slate-500 lg:block">
            SPS Nexus Tech · Project enquiries
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `sps-faq-answer-${index}`;
            return (
              <article key={faq.number} className={`overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen ? "border-sky-300/40 bg-white/[0.08] shadow-[0_16px_50px_rgba(2,132,199,0.10)]" : "border-white/10 bg-white/[0.035] hover:border-white/20 hover:bg-white/[0.06]"}`}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
                >
                  <span className={`hidden text-xs font-bold tracking-[0.16em] sm:block ${isOpen ? "text-sky-300" : "text-slate-500"}`}>{faq.number}</span>
                  <span className="flex-1 text-base font-semibold leading-6 text-white sm:text-lg">{faq.question}</span>
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all ${isOpen ? "rotate-180 border-sky-300 bg-sky-300 text-slate-950" : "border-white/15 bg-white/5 text-slate-300"}`}>
                    <ChevronDown size={18} aria-hidden="true" />
                  </span>
                </button>
                <div id={panelId} hidden={!isOpen} className="px-5 pb-6 sm:px-6 sm:pb-7">
                  <div className="border-l-2 border-sky-300/60 pl-4 sm:ml-10">
                    <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">{faq.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
          <p className="px-2 pt-3 text-xs leading-5 text-slate-500">Select a question to reveal the answer. Project details and delivery commitments are confirmed individually.</p>
        </div>
      </div>
    </section>
  );
}

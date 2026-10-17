"use client";

import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  BarChart3,
  Handshake,
  Users,
  Workflow,
  X,
} from "lucide-react";
import { siteConfig } from "@/config";

const partnershipOptions = [
  {
    icon: Users,
    title: "Call centre and BPO operators",
    description:
      "Bring real customer service workflows, agent experience, and operational insight. Together we can identify a suitable first use case and agree how service quality should be measured.",
  },
  {
    icon: Workflow,
    title: "AI and technology partners",
    description:
      "Explore how tools, integrations, knowledge resources, and human handoffs could support a practical customer service workflow. Fit and feasibility would be reviewed before selecting technology.",
  },
  {
    icon: BarChart3,
    title: "Pilot-first collaboration",
    description:
      "Start with a clearly scoped problem, agreed responsibilities, suitable privacy and quality controls, and baseline measures. Review what changes before making decisions about wider rollout.",
  },
];

export default function PartnershipEnquiryCards() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPartnership, setSelectedPartnership] = useState(
    partnershipOptions[0].title,
  );

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const openEnquiry = (partnershipType: string) => {
    setSelectedPartnership(partnershipType);
    setIsOpen(true);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const field = (name: string) => String(formData.get(name) ?? "").trim();

    const subject = `Partnership enquiry: ${selectedPartnership}`;
    const body = [
      "Hello SPS Nexus Tech,",
      "",
      "I would like to discuss a potential partnership.",
      "",
      `Partnership type: ${selectedPartnership}`,
      `Name: ${field("fullName")}`,
      `Business email: ${field("email")}`,
      `Company: ${field("company")}`,
      `Role: ${field("role")}`,
      `Company website: ${field("website") || "Not provided"}`,
      `Phone: ${field("phone") || "Not provided"}`,
      `Preferred next step: ${field("nextStep")}`,
      "",
      "What I would like to explore:",
      field("partnershipGoals"),
      "",
      "Regards,",
      field("fullName"),
    ].join("\n");

    const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {partnershipOptions.map((option) => {
          const Icon = option.icon;

          return (
            <button
              key={option.title}
              type="button"
              onClick={() => openEnquiry(option.title)}
              aria-haspopup="dialog"
              aria-expanded={isOpen && selectedPartnership === option.title}
              className="group flex h-full w-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-left transition hover:-translate-y-1 hover:border-sky-300/40 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:p-7"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-sky-300/20 bg-sky-300/10 text-sky-200">
                <Icon size={23} aria-hidden="true" />
              </span>
              <span className="mt-5 block text-xl font-semibold text-white">
                {option.title}
              </span>
              <span className="mt-3 block flex-1 text-base leading-7 text-slate-300">
                {option.description}
              </span>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-200 transition group-hover:text-sky-100">
                Start a partnership enquiry
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </button>
          );
        })}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
          <div
            className="absolute inset-0 bg-slate-950/75 backdrop-blur-sm"
            aria-hidden="true"
          />

          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="partnership-enquiry-title"
            className="relative z-10 max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-2xl"
          >
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-slate-200 bg-white/95 px-5 py-5 backdrop-blur sm:px-8 sm:py-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
                  SPS Nexus Tech · Partnership enquiry
                </p>
                <h2
                  id="partnership-enquiry-title"
                  className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl"
                >
                  Let&apos;s explore a partnership.
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Share a few details so we can understand your organization and
                  the opportunity.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close partnership enquiry form"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                <X size={19} aria-hidden="true" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 px-5 py-6 sm:px-8 sm:py-8">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-800">
                  Selected partnership type
                </p>
                <p className="mt-1 font-semibold text-slate-900">
                  {selectedPartnership}
                </p>
                <p className="mt-1 text-sm leading-5 text-slate-600">
                  This will be included in your enquiry. Close this form and
                  choose another card to change it.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="partnership-full-name"
                    className="mb-1.5 block text-sm font-semibold text-slate-800"
                  >
                    Full name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="partnership-full-name"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={100}
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="partnership-email"
                    className="mb-1.5 block text-sm font-semibold text-slate-800"
                  >
                    Business email <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="partnership-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="partnership-company"
                    className="mb-1.5 block text-sm font-semibold text-slate-800"
                  >
                    Company name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="partnership-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    required
                    maxLength={150}
                    placeholder="Your organization"
                    className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="partnership-role"
                    className="mb-1.5 block text-sm font-semibold text-slate-800"
                  >
                    Your role <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="partnership-role"
                    name="role"
                    type="text"
                    autoComplete="organization-title"
                    required
                    maxLength={120}
                    placeholder="e.g. Operations Head"
                    className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="partnership-website"
                    className="mb-1.5 block text-sm font-semibold text-slate-800"
                  >
                    Company website <span className="font-normal text-slate-500">(optional)</span>
                  </label>
                  <input
                    id="partnership-website"
                    name="website"
                    type="url"
                    autoComplete="url"
                    maxLength={300}
                    placeholder="https://company.com"
                    className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="partnership-phone"
                    className="mb-1.5 block text-sm font-semibold text-slate-800"
                  >
                    Phone number <span className="font-normal text-slate-500">(optional)</span>
                  </label>
                  <input
                    id="partnership-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    maxLength={40}
                    placeholder="Include country code"
                    className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="partnership-next-step"
                  className="mb-1.5 block text-sm font-semibold text-slate-800"
                >
                  Preferred next step <span className="text-rose-600">*</span>
                </label>
                <select
                  id="partnership-next-step"
                  name="nextStep"
                  required
                  defaultValue="Introductory call"
                  className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-base text-slate-900 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                >
                  <option>Introductory call</option>
                  <option>Share more information by email</option>
                  <option>Discuss a pilot or proof of concept</option>
                  <option>Explore a technology or delivery partnership</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="partnership-goals"
                  className="mb-1.5 block text-sm font-semibold text-slate-800"
                >
                  What would you like to explore?{" "}
                  <span className="text-rose-600">*</span>
                </label>
                <textarea
                  id="partnership-goals"
                  name="partnershipGoals"
                  required
                  minLength={10}
                  maxLength={2500}
                  rows={4}
                  placeholder="Tell us briefly about your current operations, capabilities, challenge, or partnership idea."
                  className="w-full resize-y rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-base leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                />
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm leading-6 text-slate-600">
                  When you continue, your email app will open with these details
                  prepared for{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-semibold text-sky-800 underline underline-offset-2"
                  >
                    {siteConfig.email}
                  </a>
                  . Please review the message and press Send to complete your
                  enquiry. This form does not send or store information by itself.
                </p>
              </div>

              <div className="flex flex-col-reverse gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sky-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                >
                  Continue to email
                  <ArrowRight size={17} aria-hidden="true" />
                </button>
              </div>
            </form>
          </section>
        </div>
      )}
    </>
  );
}

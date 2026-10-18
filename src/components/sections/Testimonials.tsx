"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, MessageSquareQuote, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config";

export function Testimonials() {
  const [emailNotice, setEmailNotice] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const getValue = (name: string) => String(formData.get(name) ?? "").trim();
    const permissionToPublish = formData.get("publishPermission") === "on";

    const subject = "Client feedback for iAbhishekShukla.com";
    const body = [
      "Hello Abhishek,",
      "",
      "I am sharing feedback about my experience or professional interaction.",
      "",
      `Name: ${getValue("reviewerName")}`,
      `Role / organization: ${getValue("reviewerRole") || "Not provided"}`,
      `Context: ${getValue("relationship")}`,
      "",
      "My feedback:",
      getValue("feedback"),
      "",
      `Permission to publish this feedback on iAbhishekShukla.com with my name and role: ${permissionToPublish ? "Yes, I give permission" : "No, please keep this private"}`,
      "",
      "Please use my feedback only in line with the permission above. I understand I can ask for it to be removed later.",
      "",
      "Regards,",
      getValue("reviewerName"),
    ].join("\n");

    setEmailNotice(
      "Your email app should open with your feedback prepared. Review the message and press Send; nothing is submitted or stored by this page.",
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="testimonials"
      className="scroll-mt-24 border-y border-slate-200 bg-gradient-to-b from-white to-slate-50 px-5 py-20 sm:px-8 sm:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700 sm:text-sm">
            Client & collaborator feedback
          </p>
          <h2
            id="testimonials-heading"
            className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            Real experiences. Shared with permission.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Trust is earned through real work and honest feedback. This section
            will feature first-hand experiences only after the person who
            provided them has approved publication.
          </p>

          <div className="mt-7 flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-800">
              <ShieldCheck size={21} aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-semibold text-slate-900">
                No fabricated reviews or ratings
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                We do not invent quotes, inflate ratings, or publish someone’s
                name or role without permission. Feedback can also be sent
                privately.
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-6 text-slate-500">
            Want to share a public recommendation instead? Use a platform where
            you can post in your own words. We will link a Google review page
            here once an eligible, verified Business Profile is confirmed.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="mb-6 flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white">
              <MessageSquareQuote size={22} aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-xl font-semibold text-slate-950 sm:text-2xl">
                Share your experience
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Tell us what you worked on together and what you are comfortable
                sharing.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="testimonial-name"
                  className="mb-1.5 block text-sm font-semibold text-slate-800"
                >
                  Your name <span className="text-rose-600">*</span>
                </label>
                <input
                  id="testimonial-name"
                  name="reviewerName"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={100}
                  placeholder="Full name"
                  className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                />
              </div>
              <div>
                <label
                  htmlFor="testimonial-role"
                  className="mb-1.5 block text-sm font-semibold text-slate-800"
                >
                  Role / organization
                  <span className="font-normal text-slate-500"> (optional)</span>
                </label>
                <input
                  id="testimonial-role"
                  name="reviewerRole"
                  type="text"
                  autoComplete="organization-title"
                  maxLength={150}
                  placeholder="Role and company"
                  className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="testimonial-relationship"
                className="mb-1.5 block text-sm font-semibold text-slate-800"
              >
                How have you worked together? <span className="text-rose-600">*</span>
              </label>
              <select
                id="testimonial-relationship"
                name="relationship"
                required
                defaultValue=""
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-base text-slate-900 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
              >
                <option value="" disabled>Select the context</option>
                <option>Client or customer engagement</option>
                <option>Project or operational collaboration</option>
                <option>Colleague or workplace collaboration</option>
                <option>Mentoring, speaking, or content collaboration</option>
                <option>Other genuine professional interaction</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="testimonial-feedback"
                className="mb-1.5 block text-sm font-semibold text-slate-800"
              >
                Your feedback <span className="text-rose-600">*</span>
              </label>
              <textarea
                id="testimonial-feedback"
                name="feedback"
                required
                minLength={20}
                maxLength={1800}
                rows={5}
                placeholder="Describe your own experience in your own words. Please do not share confidential company or customer information."
                className="w-full resize-y rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-base leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
              />
            </div>

            <label className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <input
                type="checkbox"
                name="publishPermission"
                className="mt-1 h-4 w-4 shrink-0 accent-sky-700"
              />
              <span className="text-sm leading-6 text-slate-700">
                I give permission for this feedback to be considered for
                publication on the website with my name and role. I understand
                the feedback may be edited for length or clarity without
                changing its meaning. Leave unchecked if you want to share
                feedback privately only.
              </span>
            </label>

            <div className="rounded-xl bg-sky-50 p-4 text-sm leading-6 text-slate-700">
              Your email app will open with these details prepared for{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-sky-800 underline underline-offset-2"
              >
                {siteConfig.email}
              </a>
              . This form does not send or store your response. You must review
              the email and press Send.
            </div>

            <button
              type="submit"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-sky-700 px-6 py-3 font-semibold text-white transition hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 sm:w-auto"
            >
              Prepare feedback email
              <ArrowRight size={17} aria-hidden="true" />
            </button>

            {emailNotice && (
              <p aria-live="polite" className="text-sm leading-6 text-slate-600">
                {emailNotice}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

"use client";

import type { FormEvent } from "react";

export default function SpsBpoEnquiryForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const field = (name: string) => String(formData.get(name) ?? "").trim();
    const subject = encodeURIComponent("BPO / Call Centre Project Enquiry | SPS Nexus Tech");
    const body = encodeURIComponent([
      "Hello Abhishek,",
      "",
      "I would like to discuss a BPO / customer support project.",
      "",
      `Name: ${field("name")}`,
      `Business email: ${field("email")}`,
      `Company: ${field("company")}`,
      `Website: ${field("website")}`,
      `Country / time zone: ${field("country")}`,
      `Your role: ${field("role")}`,
      `Service required: ${field("service")}`,
      `Expected calls / cases per day or month: ${field("volume")}`,
      `Required hours and languages: ${field("coverage")}`,
      "",
      "Project details:",
      field("details"),
      "",
      `Target start date: ${field("startDate")}`,
      "",
      "Regards,",
      field("name"),
    ].join("\n"));

    window.location.href = `mailto:abhishek@iabhishekshukla.com?subject=${subject}&body=${body}`;
  }

  const inputClass = "w-full rounded-xl border border-slate-600 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400";
  const labelClass = "mb-1 block text-sm font-medium text-slate-200";

  return (
    <div id="project-enquiry" className="mx-auto max-w-4xl rounded-3xl border border-slate-700 bg-slate-900 p-7 text-left sm:p-10">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-300">Project enquiry</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Tell us about your BPO requirement</h2>
        <p className="mt-3 leading-7 text-slate-300">Share a few details so we can understand your project. Your email app will open with the enquiry prepared for you to review and send.</p>
      </div>

      <form className="mt-8 grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="sps-name" className={labelClass}>Your name *</label>
          <input id="sps-name" name="name" required autoComplete="name" className={inputClass} placeholder="Your full name" />
        </div>
        <div>
          <label htmlFor="sps-email" className={labelClass}>Business email *</label>
          <input id="sps-email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="you@company.com" />
        </div>
        <div>
          <label htmlFor="sps-company" className={labelClass}>Company name *</label>
          <input id="sps-company" name="company" required autoComplete="organization" className={inputClass} placeholder="Your company" />
        </div>
        <div>
          <label htmlFor="sps-website" className={labelClass}>Company website</label>
          <input id="sps-website" name="website" type="url" className={inputClass} placeholder="https://yourcompany.com" />
        </div>
        <div>
          <label htmlFor="sps-country" className={labelClass}>Country / time zone</label>
          <input id="sps-country" name="country" className={inputClass} placeholder="e.g. United Kingdom / GMT" />
        </div>
        <div>
          <label htmlFor="sps-role" className={labelClass}>Your role</label>
          <input id="sps-role" name="role" className={inputClass} placeholder="e.g. Operations Director" />
        </div>
        <div>
          <label htmlFor="sps-service" className={labelClass}>Service required *</label>
          <select id="sps-service" name="service" required defaultValue="" className={inputClass}>
            <option value="" disabled>Select a service</option>
            <option>Inbound call handling</option>
            <option>Outbound calling</option>
            <option>Customer email / query support</option>
            <option>E-commerce and order support</option>
            <option>Back-office operations</option>
            <option>Multiple BPO services</option>
            <option>Other / not sure yet</option>
          </select>
        </div>
        <div>
          <label htmlFor="sps-volume" className={labelClass}>Expected calls / cases per day or month</label>
          <input id="sps-volume" name="volume" className={inputClass} placeholder="Estimated volume" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="sps-coverage" className={labelClass}>Required working hours and languages</label>
          <input id="sps-coverage" name="coverage" className={inputClass} placeholder="e.g. Monday–Friday, 9am–6pm, English" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="sps-details" className={labelClass}>Tell us about your project *</label>
          <textarea id="sps-details" name="details" required rows={5} className={inputClass} placeholder="Describe the work, customer type, systems, quality expectations, and any specific requirements." />
        </div>
        <div>
          <label htmlFor="sps-start" className={labelClass}>Target start date</label>
          <input id="sps-start" name="startDate" className={inputClass} placeholder="e.g. January 2027" />
        </div>
        <div className="flex items-end">
          <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300">
            Prepare Enquiry Email →
          </button>
        </div>
        <p className="text-xs leading-5 text-slate-400 sm:col-span-2">This opens your email app with the details filled in. Please review the message and press Send in your email app. No message is sent automatically by this form.</p>
      </form>
      <p className="mt-7 text-sm text-slate-400">Prefer email? <a href="mailto:abhishek@iabhishekshukla.com" className="font-medium text-sky-300 hover:underline">abhishek@iabhishekshukla.com</a></p>
    </div>
  );
}

"use client";

import { siteConfig } from "@/config";
import Link from "next/link";

export function Collaborations() {
  const { headline, types } = siteConfig.collaborations;
  return (
    <section id="collaborations" className="py-20 px-6 bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">{headline}</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {types.map((type, idx) => (
            <div key={idx} className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold mb-4 text-[#0284c7]">{type.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{type.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-700 rounded-3xl p-10 md:p-16 text-center" id="contact">
           <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">Let&apos;s Start With the Challenge</h2>
           <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
             <a href="#organizations" className="px-6 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl font-semibold transition">
               Discuss a Business Challenge
             </a>
             <a href="#professionals" className="px-6 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl font-semibold transition">
               Explore Professional Support
             </a>
             <Link href="?request=Collaboration+Request" scroll={false} className="px-6 py-4 bg-[#0284c7] hover:bg-sky-600 border border-sky-500 rounded-xl font-semibold transition text-white">
               Submit Collaboration Request
             </Link>
             <a href="#resources" className="px-6 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl font-semibold transition">
               Explore Frameworks & Guides
             </a>
           </div>
           <div className="mt-10 mx-auto max-w-2xl rounded-2xl border border-slate-700 bg-slate-800/60 p-6 text-left sm:p-8">
             <h3 className="text-xl font-bold text-white">Business Challenge Enquiry</h3>
             <p className="mt-2 text-sm leading-6 text-slate-300">Share a few details about your business challenge. Your email app will open with the enquiry prepared for review.</p>
             <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={(event) => {
               event.preventDefault();
               const formData = new FormData(event.currentTarget);
               const field = (name: string) => String(formData.get(name) ?? "").trim();
               const subject = encodeURIComponent("Business Challenge Enquiry | SPS Nexus Tech");
               const body = encodeURIComponent([
                 "Hello Abhishek,",
                 "",
                 "I would like to discuss a business challenge.",
                 "",
                 `Name: ${field("businessName")}`,
                 `Business email: ${field("businessEmail")}`,
                 `Company: ${field("company")}`,
                 `Role: ${field("role")}`,
                 "",
                 "Business challenge:",
                 field("challenge"),
                 "",
                 "Regards,",
                 field("businessName")
               ].join("\\n"));
               window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
             }}>
               <div>
                 <label htmlFor="businessName" className="mb-1 block text-sm font-medium text-slate-200">Your name</label>
                 <input id="businessName" name="businessName" required autoComplete="name" className="w-full rounded-xl border border-slate-600 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="Your full name" />
               </div>
               <div>
                 <label htmlFor="businessEmail" className="mb-1 block text-sm font-medium text-slate-200">Business email</label>
                 <input id="businessEmail" name="businessEmail" type="email" required autoComplete="email" className="w-full rounded-xl border border-slate-600 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="you@company.com" />
               </div>
               <div>
                 <label htmlFor="company" className="mb-1 block text-sm font-medium text-slate-200">Company</label>
                 <input id="company" name="company" className="w-full rounded-xl border border-slate-600 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="Company name" />
               </div>
               <div>
                 <label htmlFor="role" className="mb-1 block text-sm font-medium text-slate-200">Your role</label>
                 <input id="role" name="role" className="w-full rounded-xl border border-slate-600 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="Your role" />
               </div>
               <div className="sm:col-span-2">
                 <label htmlFor="challenge" className="mb-1 block text-sm font-medium text-slate-200">What business challenge would you like to discuss?</label>
                 <textarea id="challenge" name="challenge" required rows={4} className="w-full resize-y rounded-xl border border-slate-600 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="Tell us about the challenge, desired outcome, or support you need." />
               </div>
               <div className="sm:col-span-2">
                 <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#0284c7] px-6 py-3 font-semibold text-white transition hover:bg-sky-600">Prepare Enquiry Email →</button>
                 <p className="mt-3 text-xs leading-5 text-slate-400">This opens your email app. Please review the message and press Send there.</p>
               </div>
             </form>
           </div>
           <p className="text-slate-400 mt-10">
             Direct Email: <a href="mailto:abhishek@iabhishekshukla.com" className="text-[#0284c7] hover:underline">abhishek@iabhishekshukla.com</a>
           </p>
        </div>
      </div>
    </section>
  );
}
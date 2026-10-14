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
           <p className="text-slate-400 mt-10">
             Direct Email: <a href="mailto:abhishek@iabhishekshukla.com" className="text-[#0284c7] hover:underline">abhishek@iabhishekshukla.com</a>
           </p>
        </div>
      </div>
    </section>
  );
}
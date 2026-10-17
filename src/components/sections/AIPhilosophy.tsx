import { siteConfig } from "@/config";

export function AIPhilosophy() {
  const { quote, formula, desc } = siteConfig.aiPhilosophy;
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#0f172a]">Signature AI Philosophy</h2>
        <blockquote className="text-2xl font-medium text-[#334155] mb-8">
          {quote}
        </blockquote>
        <div className="card-3d relative overflow-hidden bg-gradient-to-br from-white via-white to-sky-50/80 p-8 rounded-2xl shadow-[0_18px_45px_rgba(15,23,42,0.08)] border border-slate-200 mb-8">
          <p className="font-semibold text-lg text-[#0f172a] mb-2">The Ecosystem Formula:</p>
          <p className="text-[#0284c7] font-bold text-xl">{formula}</p>
        </div>
        <p className="text-slate-600 text-lg">{desc}</p>
      </div>
    </section>
  );
}
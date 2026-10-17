import { siteConfig } from "@/config";

export function Methodology() {
  const phases = siteConfig.consultingMethodology.phases;
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#0f172a]">Signature Consulting Methodology</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {phases.map((phase, idx) => (
            <div key={idx} className="card-3d rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50 p-5 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-sky-200 bg-gradient-to-br from-white via-sky-50 to-sky-100 text-xl font-bold text-[#0284c7] shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),0_8px_18px_rgba(2,132,199,0.15)]">
                {phase.number}
              </div>
              <h3 className="font-bold mb-2 text-[#0f172a]">{phase.name}</h3>
              <p className="text-sm text-slate-600">{phase.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
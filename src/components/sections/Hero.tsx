import { siteConfig } from "@/config";
import Image from "next/image";
import { SceneLoader } from "../three";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-16 px-6 bg-[#0f172a] text-white overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0 opacity-40" aria-hidden="true">
        <SceneLoader />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm md:text-base font-semibold tracking-[0.18em] uppercase text-sky-300 mb-5">
            CX • AI adoption • Operations • Leadership
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white leading-tight">
            {siteConfig.hero.headline}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            {siteConfig.hero.supporting}
          </p>
          <p className="text-sm md:text-base text-slate-300 mb-8 max-w-2xl">
            Start with the challenge you need to solve. We’ll assess the context before recommending a process, people or technology solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href={siteConfig.hero.cta1.href} className="px-7 py-4 bg-[#0284c7] text-white rounded-full font-semibold hover:bg-sky-600 transition text-center shadow-lg shadow-sky-950/30">
              {siteConfig.hero.cta1.text}
            </a>
            <a href={siteConfig.hero.cta2.href} className="px-7 py-4 bg-white text-[#0f172a] rounded-full font-semibold hover:bg-slate-100 transition text-center">
              {siteConfig.hero.cta2.text}
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            Prefer email?{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-sky-300 underline underline-offset-4 hover:text-white">
              {siteConfig.email}
            </a>
          </p>
        </div>

        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative flex-shrink-0">
          <div className="absolute inset-0 bg-[#0284c7] rounded-full opacity-20 blur-2xl" aria-hidden="true"></div>
          <Image
            src={siteConfig.profileImage}
            alt={siteConfig.name}
            fill
            sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
            className="object-cover object-top rounded-full border-4 border-[#1e293b]"
            priority
          />
        </div>
      </div>
    </section>
  );
}

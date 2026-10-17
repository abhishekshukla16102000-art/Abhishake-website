import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Compass,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { siteConfig } from "@/config";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-slate-950 px-5 pb-16 pt-28 text-white sm:px-8 sm:pb-20 sm:pt-32 lg:min-h-[84vh] lg:pb-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-80"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 82% 18%, rgba(14,165,233,0.22), transparent 34%), radial-gradient(ellipse at 8% 90%, rgba(99,102,241,0.17), transparent 35%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.1]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.3) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "linear-gradient(to bottom, black, transparent 90%)",
        }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
        <div className="relative z-10">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-sky-300/10 px-3.5 py-2 text-xs font-semibold tracking-[0.14em] text-sky-200 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-sky-300" />
            CUSTOMER EXPERIENCE · OPERATIONS · AI
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl xl:text-[4.1rem]">
            Make customer operations work better
            <span className="mt-1 block bg-gradient-to-r from-sky-300 via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
              with people, process, and practical AI.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            I help organizations identify service and workflow friction, improve how work gets done, and assess where AI can add practical value—starting with the business problem, not a pre-selected technology.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="/business"
              className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3.5 font-semibold text-slate-950 shadow-lg shadow-sky-950/30 transition hover:-translate-y-0.5 hover:bg-sky-300"
            >
              Explore business services
              <ArrowRight size={18} className="transition group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#organizations"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3.5 font-semibold text-white transition hover:border-white/40 hover:bg-white/[0.08]"
            >
              See areas I support
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:flex-wrap sm:gap-x-6">
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-sky-300" /> Problem-first recommendations</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-sky-300" /> Human-centred by design</span>
          </div>

          <p className="mt-7 text-sm text-slate-400">
            Prefer email?{" "}
            <a href={`mailto:${siteConfig.email}?subject=Business%20improvement%20discussion`} className="font-medium text-sky-300 underline decoration-sky-300/40 underline-offset-4 transition hover:text-white">
              {siteConfig.email}
            </a>
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
          <div className="absolute -inset-5 rounded-[2rem] bg-sky-400/10 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-slate-900 shadow-2xl shadow-black/30">
            <div className="relative aspect-[4/4.2] min-h-[320px]">
              <Image
                src={siteConfig.profileImage}
                alt={siteConfig.name}
                fill
                sizes="(max-width: 1024px) 90vw, 44vw"
                priority
                className="object-cover object-top opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/10" aria-hidden="true" />
              <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-3 sm:left-7 sm:right-7 sm:top-7">
                <span className="rounded-full border border-white/20 bg-slate-950/60 px-3 py-2 text-[10px] font-bold tracking-[0.16em] text-white backdrop-blur sm:text-xs">
                  THE APPROACH
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-slate-950/50 text-sky-200 backdrop-blur">
                  <Compass size={20} aria-hidden="true" />
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-slate-950/80 p-5 backdrop-blur-xl sm:bottom-7 sm:left-7 sm:right-7 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">A practical path forward</p>
                <h2 className="mt-2 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
                  Diagnose first. Improve with purpose.
                </h2>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  <div className="rounded-xl border border-white/10 bg-white/[0.05] p-3">
                    <Workflow size={18} className="mb-2 text-sky-300" aria-hidden="true" />
                    <p className="text-xs font-semibold text-white sm:text-sm">Process</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.05] p-3">
                    <ShieldCheck size={18} className="mb-2 text-sky-300" aria-hidden="true" />
                    <p className="text-xs font-semibold text-white sm:text-sm">People</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.05] p-3">
                    <ArrowUpRight size={18} className="mb-2 text-sky-300" aria-hidden="true" />
                    <p className="text-xs font-semibold text-white sm:text-sm">Progress</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:absolute sm:-bottom-6 sm:-left-6 sm:mt-0 sm:max-w-[300px] sm:shadow-xl sm:shadow-black/20">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-300/10 text-sky-200">
              <ShieldCheck size={22} aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Responsible by design</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">Use technology where it fits. Keep human judgement where it matters.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

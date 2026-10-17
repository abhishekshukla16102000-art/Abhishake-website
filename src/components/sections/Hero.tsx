import Image from "next/image";
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-slate-950 px-5 pb-16 pt-28 text-white sm:px-8 sm:pb-20 sm:pt-32 lg:min-h-[78vh] lg:pb-24"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 78% 20%, rgba(14,165,233,0.16), transparent 36%), radial-gradient(ellipse at 8% 90%, rgba(99,102,241,0.12), transparent 34%)",
        }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_.82fr] lg:gap-16">
        <div className="relative z-10">
          <p className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.19em] text-sky-300 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-sky-300" />
            Customer experience · Operations · AI adoption
          </p>

          <h1 className="max-w-3xl text-[2.55rem] font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-6xl xl:text-[4.1rem]">
            Better customer experiences.
            <span className="mt-1 block text-sky-300">
              Smarter operations. Practical AI.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            I help organizations improve customer-support operations, streamline workflows, and identify where AI can genuinely help their teams.
            The starting point is always the business problem—not a tool or trend.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-300"
            >
              Discuss a business challenge
              <ArrowRight size={18} className="transition group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="/business"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:border-white/40 hover:bg-white/[0.06]"
            >
              Explore business services
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:flex-wrap sm:gap-x-6">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={16} className="text-sky-300" aria-hidden="true" />
              Practical recommendations
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={16} className="text-sky-300" aria-hidden="true" />
              Human-centred approach
            </span>
          </div>

          <p className="mt-7 text-sm text-slate-400">
            Prefer email?{" "}
            <a
              href={`mailto:${siteConfig.email}?subject=Business%20improvement%20discussion`}
              className="font-medium text-sky-300 underline decoration-sky-300/40 underline-offset-4 transition hover:text-white"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[420px] lg:ml-auto">
          <div className="overflow-hidden rounded-[1.75rem] border border-white/15 bg-slate-900 shadow-2xl shadow-black/25">
            <div className="relative aspect-[4/4.5]">
              <Image
                src={siteConfig.profileImage}
                alt={siteConfig.name}
                fill
                sizes="(max-width: 1024px) 88vw, 38vw"
                priority
                className="object-cover object-top"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                  Your consulting partner
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Abhishek Shukla
                </h2>
                <p className="mt-2 max-w-xs text-sm leading-6 text-slate-300">
                  Customer experience, operations improvement, and practical AI adoption.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-300/10 text-sky-200">
              <ShieldCheck size={21} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">Technology with a clear purpose</p>
              <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">
                Focus on people, process, evidence, and measurable progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

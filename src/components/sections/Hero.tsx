import Image from "next/image";
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config";
import { SceneLoader } from "@/components/three";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-slate-950 px-5 pb-16 pt-28 text-white sm:px-8 sm:pb-20 sm:pt-32 lg:min-h-[78vh] lg:pb-24"
    >
      {/* Lightweight 3D neural field adds depth without competing with the copy. */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-35" aria-hidden="true">
        <SceneLoader />
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 76% 26%, rgba(14,165,233,0.21), transparent 38%), radial-gradient(ellipse at 10% 84%, rgba(99,102,241,0.17), transparent 34%)",
        }}
      />
      <div className="pointer-events-none absolute right-[9%] top-32 z-[2] hidden h-52 w-52 lg:block" style={{ perspective: "1000px" }} aria-hidden="true">
        <div className="absolute inset-4 rounded-[2rem] border border-sky-200/20 bg-sky-300/[0.035] shadow-[0_0_70px_rgba(14,165,233,0.08)] [transform:rotateX(58deg)_rotateY(0deg)_rotateZ(35deg)]" />
        <div className="absolute inset-10 rounded-[1.5rem] border border-indigo-200/20 bg-gradient-to-br from-sky-300/[0.09] to-indigo-400/[0.025] animate-float [transform:rotateX(32deg)_rotateY(36deg)_rotateZ(-24deg)]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_.82fr] lg:gap-16">
        <div className="relative z-10">
          <p className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.19em] text-sky-300 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_12px_rgba(125,211,252,0.9)]" />
            Customer experience · Operations · AI adoption
          </p>

          <h1 className="max-w-3xl text-[2.55rem] font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-6xl xl:text-[4.1rem]">
            Better customer experiences.
            <span className="mt-1 block bg-gradient-to-r from-sky-200 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
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
              className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-sky-200/70 bg-gradient-to-br from-sky-300 to-sky-500 px-6 py-3.5 font-semibold text-slate-950 shadow-[0_12px_35px_rgba(14,165,233,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(14,165,233,0.32)]"
            >
              Discuss a business challenge
              <ArrowRight size={18} className="transition group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="/business"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.045] px-6 py-3.5 font-semibold text-white shadow-lg shadow-black/10 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/[0.09]"
            >
              Explore business services
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-3 text-sm text-slate-300/80 sm:flex-row sm:flex-wrap sm:gap-x-6">
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
              href={"mailto:" + siteConfig.email + "?subject=Business%20improvement%20discussion"}
              className="font-medium text-sky-300 underline decoration-sky-300/40 underline-offset-4 transition hover:text-white"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>

        <div className="depth-shell relative mx-auto w-full max-w-[420px] lg:ml-auto">
          <div className="pointer-events-none absolute -inset-3 rounded-[2rem] border border-sky-200/20 bg-gradient-to-br from-white/[0.07] via-sky-300/[0.025] to-indigo-300/[0.06] shadow-[0_24px_90px_rgba(14,165,233,0.10)] [transform:rotateY(8deg)_rotateX(3deg)]" aria-hidden="true" />
          <div className="card-3d relative z-10 overflow-hidden rounded-[1.75rem] border border-white/20 bg-slate-900/90 shadow-[0_30px_80px_rgba(0,0,0,0.42)] backdrop-blur-sm">
            <div className="relative aspect-[4/4.5] bg-slate-800">
              <Image
                src={siteConfig.profileImage}
                alt={siteConfig.name}
                fill
                sizes="(max-width: 1024px) 88vw, 38vw"
                priority
                className="object-cover object-top"
              />
            </div>
            <div className="border-t border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                Your consulting partner
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Abhishek Shukla
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Customer experience, operations improvement, and practical AI adoption.
              </p>
            </div>
          </div>

          <div className="card-3d relative z-20 mt-4 flex items-start gap-3 rounded-2xl border border-white/15 bg-white/[0.07] p-4 shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-sky-200/15 bg-gradient-to-br from-sky-300/20 to-indigo-300/10 text-sky-200 shadow-inner">
              <ShieldCheck size={21} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">Technology with a clear purpose</p>
              <p className="mt-1 text-xs leading-5 text-slate-300/75 sm:text-sm">
                Focus on people, process, evidence, and measurable progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

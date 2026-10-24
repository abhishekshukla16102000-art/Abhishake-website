import {
  ArrowUpRight,
  Mail,
  ShieldCheck,
  Users,
} from "lucide-react";
import { siteConfig } from "@/config";

const feedbackHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
  "Share feedback for iAbhishekShukla.com",
)}&body=${encodeURIComponent(
  "Hello Abhishek,\n\nI would like to share feedback or a professional recommendation.\n\nMy name and role (optional):\nHow we worked together (optional):\nMy feedback:\n\nYou may use my feedback on your website: Yes / No\n\nRegards,",
)}`;

const feedbackDestinations = [
  {
    icon: Users,
    eyebrow: "PROFESSIONAL RECOMMENDATIONS",
    title: "Read recommendations on LinkedIn",
    description:
      "Review the professional profile and any recommendations available on LinkedIn.",
    label: "Open LinkedIn profile",
    href: siteConfig.social.linkedin,
  },
  {
    icon: ShieldCheck,
    eyebrow: "CREDENTIALS & RECOGNITION",
    title: "Explore the Thinkers360 profile",
    description:
      "Check the public professional profile and thought-leadership recognitions on the original platform.",
    label: "View Thinkers360",
    href: siteConfig.social.thinkers360,
  },
  {
    icon: ArrowUpRight,
    eyebrow: "VISIT THE WEBSITE",
    title: "Open the live website",
    description:
      "Explore the current website, consulting services, and call-centre partnership information.",
    label: "Open live website",
    href: "https://iabhishekshukla.com/",
  },
];

export function Testimonials() {
  return (
    <section
      id="reviews"
      className="scroll-mt-24 border-y border-slate-200 bg-slate-50 px-5 py-20 sm:px-8 sm:py-24"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700 sm:text-sm">
            Reviews & professional feedback
          </p>
          <h2
            id="reviews-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            Explore the work. Check the sources.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            I want professional feedback to be genuine and verifiable. Visit
            the original platforms to review available recommendations and
            recognitions instead of relying on unverified quotes.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {feedbackDestinations.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="card-3d flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-sky-100">
                  <Icon size={23} aria-hidden="true" />
                </span>
                <p className="mt-5 text-xs font-bold tracking-[0.13em] text-sky-700">
                  {item.eyebrow}
                </p>
                <h3 className="mt-2 text-xl font-semibold leading-snug text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  {item.description}
                </p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-sky-800 transition hover:text-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-4"
                >
                  {item.label}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
              <Mail size={21} aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-semibold text-slate-950">
                Worked with me? Share honest feedback.
              </h3>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">
                Send a recommendation for review. It will only be published
                with your permission.
              </p>
            </div>
          </div>
          <a
            href={feedbackHref}
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
          >
            <Mail size={16} aria-hidden="true" />
            Share feedback
          </a>
        </div>
      </div>
    </section>
  );
}

import { siteConfig } from "@/config";
import Image from "next/image";
import { Award, ExternalLink } from "lucide-react";

export function Credentials() {
  const { certifications, badges } = siteConfig.credentials;

  return (
    <section id="credentials" className="py-24 px-6 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0f172a]">Certifications & Badges</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional recognitions, continuous learning, and industry validations.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {/* Badges Section */}
          <div>
            <h3 className="text-2xl font-bold text-[#0f172a] mb-8 text-center md:text-left">Industry Badges</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {badges.map((badge, idx) => {
                const card = (
                  <div className="h-full bg-white p-6 rounded-3xl shadow-sm border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all flex flex-col items-center text-center group">
                    <div className="w-32 h-32 relative mb-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                      {badge.image ? (
                        <Image src={badge.image} alt={badge.name} fill className="object-contain" />
                      ) : badge.href ? (
                        <div
                          className="w-full h-full rounded-full border border-sky-200 bg-gradient-to-br from-slate-950 via-sky-900 to-slate-800 flex flex-col items-center justify-center text-white shadow-inner"
                          role="img"
                          aria-label="Award icon for the linked Thinkers360 Customer Loyalty credential"
                        >
                          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-amber-300/70 bg-white/5 text-amber-300">
                            <Award size={32} strokeWidth={1.6} aria-hidden="true" />
                          </div>
                          <span className="mt-2 text-xs font-bold tracking-normal text-sky-100">TOP 50</span>
                        </div>
                      ) : (
                        <div className="w-full h-full bg-slate-100 rounded-full flex items-center justify-center text-slate-400">Badge</div>
                      )}
                    </div>
                    <span className="font-bold text-slate-800 leading-snug">{badge.name}</span>
                    {badge.href && (
                      <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-sky-800 group-hover:text-sky-600">
                        View official credential <ExternalLink size={13} aria-hidden="true" />
                      </span>
                    )}
                  </div>
                );
                return badge.href ? (
                  <a
                    key={idx}
                    href={badge.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${badge.name}: view official Thinkers360 credential`}
                    className="block h-full rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2"
                  >
                    {card}
                  </a>
                ) : (
                  <div key={idx} className="h-full">{card}</div>
                );
              })}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-bold text-[#0f172a] mb-8 text-center md:text-left">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all flex flex-col items-center text-center group">
                  <div className="w-full h-40 relative mb-6 transition-transform duration-300 group-hover:scale-105">
                    {cert.image ? (
                      <Image src={cert.image} alt={cert.name} fill className="object-contain" />
                    ) : (
                      <div className="w-full h-full bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">Cert</div>
                    )}
                  </div>
                  <span className="font-bold text-slate-800 text-lg leading-snug">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

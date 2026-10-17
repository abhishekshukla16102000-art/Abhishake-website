import { siteConfig } from "@/config";
import Link from "next/link";

export function OrganizationSolutions() {
  const { headline, premise, services, ctaHook, ctaButton } = siteConfig.orgServices;
  return (
    <section id="organizations" className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0f172a]">{headline}</h2>
          <p className="text-lg text-slate-600">{premise}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, idx) => (
            <Link 
              key={idx} 
              href={`?request=${encodeURIComponent(service.title)}`}
              scroll={false}
              className="card-3d bg-gradient-to-br from-white via-white to-sky-50/70 p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-[#0284c7] cursor-pointer block group"
            >
              <h3 className="text-xl font-bold mb-4 text-[#0f172a] group-hover:text-[#0284c7] transition-colors">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-600">
                    <span className="text-[#0284c7] mr-2">&bull;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
        <div className="bg-[#0f172a] text-white p-10 rounded-2xl text-center border border-slate-800">
          <p className="text-xl font-medium mb-6">{ctaHook}</p>
          <a href="#contact" className="inline-block px-8 py-4 bg-[#0284c7] text-white rounded-full font-semibold hover:bg-sky-600 transition">
            {ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}
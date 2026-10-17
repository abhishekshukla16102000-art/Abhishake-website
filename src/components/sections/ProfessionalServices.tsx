import { siteConfig } from "@/config";
import Link from "next/link";

export function ProfessionalServices() {
  const { services, disclaimer } = siteConfig.professionalServices;
  return (
    <section id="professionals" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#0f172a]">For Professionals: Career and Job Search Support</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, idx) => (
            <Link 
              key={idx} 
              href={`?request=${encodeURIComponent(service.title)}`}
              scroll={false}
              className="p-6 border border-slate-200 rounded-xl hover:shadow-lg hover:border-[#0284c7] transition cursor-pointer block group"
            >
              <h3 className="text-lg font-bold mb-3 text-[#0f172a] group-hover:text-[#0284c7] transition-colors">{service.title}</h3>
              <p className="text-slate-600 text-sm">{service.description}</p>
            </Link>
          ))}
        </div>
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-sm text-slate-500 text-center max-w-4xl mx-auto">
          {disclaimer}
        </div>
      </div>
    </section>
  );
}
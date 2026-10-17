import Image from "next/image";

export function WhyItMatters() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-[#0f172a] text-center border-b pb-4">How I help organizations and professionals</h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3 relative h-[400px] rounded-2xl overflow-hidden shadow-xl shrink-0">
            <Image src="/profile_pinstripe.png" alt="Abhishek Shukla" fill className="object-cover object-top" />
          </div>
          
          <div className="flex-1 space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-[#0284c7] mb-4">Core Brand Positioning</h3>
              <p className="text-lg md:text-xl font-medium text-[#334155] leading-relaxed">
                I help organizations improve customer experience, operating performance, and workplace productivity through practical AI, data, process improvement, and human-centred leadership.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0284c7] mb-4">Hiring Support Positioning</h3>
              <p className="text-xl md:text-2xl font-medium text-[#334155] leading-relaxed">
                Structured hiring support designed to help organizations identify, assess, and onboard relevant talent more effectively and objectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export function CaseStudies() {
  return (
    <section className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-400 mb-3">
            A practical starting point
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What a focused improvement engagement can look like
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Every organization is different. The work starts with your current process, available evidence and goals—not a pre-selected tool or a promised result.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card-3d bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 shadow-lg">
            <p className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-3">
              Illustrative example
            </p>
            <h3 className="text-xl font-bold mb-6">Improving a customer-support workflow</h3>
            <ul className="space-y-4 text-slate-300">
              <li><strong className="text-white">Understand:</strong> Map recurring queries, handoffs, delays and customer pain points.</li>
              <li><strong className="text-white">Prioritize:</strong> Identify the biggest friction points using available operational data and team input.</li>
              <li><strong className="text-white">Design:</strong> Recommend process changes, clearer knowledge resources and suitable AI-assist opportunities.</li>
              <li><strong className="text-white">Measure:</strong> Agree on baseline measures such as resolution time, repeat contacts, quality and team effort.</li>
            </ul>
            <p className="text-xs text-slate-400 mt-6">
              This is an example of a possible engagement, not a claim about a completed client project or measured result.
            </p>
          </div>

          <div className="card-3d bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 shadow-lg flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-4">What you can expect</h3>
            <ul className="space-y-4 text-slate-300">
              <li><strong className="text-white">A clear problem statement</strong><br />Align stakeholders on what needs to improve and why.</li>
              <li><strong className="text-white">A practical action plan</strong><br />Prioritize steps by value, effort, risk and readiness.</li>
              <li><strong className="text-white">Human-centred recommendations</strong><br />Keep customer needs, employee workflows and responsible AI use in view.</li>
              <li><strong className="text-white">Measures that matter</strong><br />Define how progress should be evaluated before implementation.</li>
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center justify-center self-start mt-8 px-6 py-3 rounded-full bg-sky-600 hover:bg-sky-500 text-white font-semibold transition"
            >
              Discuss your challenge →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

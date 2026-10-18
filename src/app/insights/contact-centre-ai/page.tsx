import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI in Contact Centres: Use Cases & Risks | Abhishek Shukla",
  description: "Explore contact centre AI use cases, agent assistance, interaction summaries, human escalation, evaluation metrics and a responsible pilot checklist.",
  alternates: { canonical: "/insights/contact-centre-ai" },
};

export default function Page() {
  return <main className="mx-auto max-w-3xl px-6 py-12 text-slate-900">
    <nav className="mb-8 text-sm text-slate-500"><Link href="/">Home</Link> / <Link href="/insights">Insights</Link> / AI in contact centres</nav>
    <p className="text-sm font-bold uppercase tracking-widest text-sky-700">Contact centre operations</p>
    <h1 className="mt-3 text-4xl font-bold leading-tight">AI in Contact Centres: Use Cases, Risks and a Pilot Checklist</h1>
    <p className="mt-5 text-xl leading-relaxed text-slate-600">Start with a clearly defined customer or employee problem—not automation for its own sake. Evaluate AI against service quality, workflow fit and the ability to recover when it fails.</p>
    <p className="mt-6 text-sm text-slate-500">Written by Abhishek Shukla · Customer experience, operations and AI adoption</p>
    <h2 className="mt-10 text-2xl font-bold">Potential use cases to evaluate</h2>
    <ul className="mt-4 list-disc space-y-3 pl-6 leading-7"><li><strong>Agent knowledge assistance:</strong> find approved knowledge with sources visible to the agent.</li><li><strong>Interaction summaries:</strong> draft notes for a person to review and correct.</li><li><strong>Contact categorisation:</strong> suggest routing or reporting categories with a correction path.</li><li><strong>Quality review support:</strong> surface interactions for human review, not treat generated findings as conclusions.</li><li><strong>Routine self-service:</strong> handle well-defined, lower-risk requests with a clear route to a person.</li><li><strong>Customer feedback analysis:</strong> identify possible themes and validate them against examples.</li></ul>
    <h2 className="mt-8 text-2xl font-bold">Design the human handoff before launch</h2>
    <p className="mt-4 leading-8">Define what happens when automation is uncertain, a customer asks for a person or the request is sensitive. Decide who receives the handoff, what context transfers, how the customer is informed and how the issue is tracked to resolution.</p>
    <h2 className="mt-8 text-2xl font-bold">Pilot readiness checklist</h2>
    <ul className="mt-4 list-disc space-y-2 pl-6 leading-7"><li>Confirm privacy, data access, retention and security requirements.</li><li>Use approved, current knowledge with clear ownership.</li><li>Test real scenarios, languages and difficult edge cases.</li><li>Provide a human escalation and operational fallback.</li><li>Train staff and explain system boundaries.</li><li>Set baseline measures before the pilot begins.</li></ul>
    <h2 className="mt-8 text-2xl font-bold">Measure service quality as well as efficiency</h2>
    <p className="mt-4 leading-8">Average handling time alone cannot prove better service. Pair efficiency with first-contact resolution, repeat contacts, quality, escalations, customer satisfaction or effort, agent experience and cost per correctly resolved issue. Scale only when the evidence supports it.</p>
    <div className="mt-10 rounded-xl bg-sky-50 p-6"><h2 className="text-xl font-bold">Assess the operation before choosing automation</h2><p className="mt-3 leading-7">Explore SPS Nexus Tech's approach to customer experience, contact centre operations and practical AI adoption.</p><Link href="/business" className="mt-4 inline-block font-semibold text-sky-700">Explore consulting services →</Link><p className="mt-3"><Link href="/insights/ai-adoption-roadmap" className="font-semibold text-sky-700">Read the AI adoption roadmap →</Link></p></div>
  </main>;
}
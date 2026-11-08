export type WebsitePassage = {
  id: string;
  title: string;
  href: string;
  content: string;
  tags: string[];
  audience: "general" | "sps";
};

export const websiteKnowledge: WebsitePassage[] = [
  {
    id: "about-abhishek",
    audience: "general",
    title: "About Abhishek Shukla",
    href: "/",
    content: "Abhishek Shukla is presented on this website as a CX and AI leader, consultant, project leader and author. His work brings together customer experience, artificial intelligence, operations, data, process improvement and human-centred leadership. The website describes a business-first approach: understand the real problem, understand people and processes, and then decide where process improvement, data, AI or leadership can create practical value.",
    tags: ["about", "abhishek", "founder", "profile", "consultant", "cx", "ai", "operations", "leadership", "who is he"],
  },
  {
    id: "contact-details",
    audience: "general",
    title: "Contact and location",
    href: "/business",
    content: "The website lists Abhishek Shukla in Delhi, India, with global remote consulting availability. Email: abhishek@iabhishekshukla.com. Phone: +91 8860220070. The business page identifies him as Founder at SPS Nexus Tech and Customer Experience and AI Consultant.",
    tags: ["contact", "email", "phone", "telephone", "mobile", "location", "address", "delhi", "india", "reach", "speak", "meeting"],
  },
  {
    id: "experience-recognition",
    audience: "general",
    title: "Experience and recognition",
    href: "/",
    content: "The website states 7+ years of experience and lists Thinkers360 recognition including Top 50 Global Thought Leader in AI Ethics and Top 50 Thought Leader in Customer Loyalty, alongside CX and AI transformation leadership. The credentials displayed on the site also include leadership, agile, customer experience, generative AI and Lean Six Sigma learning credentials.",
    tags: ["experience", "years", "recognition", "awards", "thinkers360", "top 50", "ai ethics", "customer loyalty", "certifications", "credentials"],
  },
  {
    id: "business-overview",
    audience: "general",
    title: "Business services overview",
    href: "/business",
    content: "Abhishek works with customer support, contact centre, BPO and operations leaders to identify avoidable friction, improve service workflows and decide where AI can help. The approach begins with the business problem rather than a pre-selected tool. Scope and deliverables are agreed after an initial discussion, and specific financial or operational outcomes are not guaranteed.",
    tags: ["business", "consulting", "services", "organisation", "organization", "company", "business challenge", "support", "what do you do"],
  },
  {
    id: "customer-experience",
    audience: "general",
    title: "Customer experience consulting",
    href: "/customer-experience-consulting",
    content: "Customer experience consulting can examine customer journeys and repeat contacts, service operations and handoffs, quality and knowledge consistency, performance measures and customer feedback. The work starts by defining the customer and business problem, understanding the current experience, prioritising practical changes, and measuring, learning and refining. Relevant measures may include first-contact resolution, repeat contacts, quality scores, service levels, response times, escalations and customer feedback. Not every CX problem requires AI; process clarity, training, knowledge management, ownership or measurement may be more suitable.",
    tags: ["customer experience", "cx", "journey", "customer journey", "repeat contacts", "first contact resolution", "fcr", "service quality", "feedback", "handoff", "escalation"],
  },
  {
    id: "contact-centre-consulting",
    audience: "general",
    title: "Contact centre and BPO consulting",
    href: "/contact-centre-bpo-consulting",
    content: "The contact centre and BPO consulting page describes advisory and partnership discussions with customer support operators, BPO leaders and technology providers. Focus areas include service operations and workflow, agent enablement and quality, performance visibility, and AI readiness for controlled pilots. Reviews can examine queues, handoffs, ownership, escalation paths, repeat contacts, knowledge access, response guidance, quality assurance, training needs, resolution, service level, wait time, abandonment and customer feedback.",
    tags: ["contact centre", "contact center", "call centre", "call center", "bpo consulting", "advisory", "workflow", "queues", "agent", "quality", "metrics", "kpi", "partnership"],
  },
  {
    id: "ai-readiness",
    audience: "general",
    title: "AI readiness consulting",
    href: "/ai-readiness-consulting",
    content: "AI readiness consulting starts with the business problem and assesses business value and workflow fit, data and knowledge readiness, privacy and security risks, human judgement and oversight, and pilot scope and measurement. A readiness review does not mean AI must be implemented. Sometimes process redesign, clearer knowledge ownership, better reporting or a simpler technology change is the better next step.",
    tags: ["ai readiness", "artificial intelligence", "ai consulting", "adoption", "pilot", "data readiness", "workflow fit", "risk", "privacy", "human oversight"],
  },
  {
    id: "ai-readiness-checklist",
    audience: "general",
    title: "AI readiness checklist: 10 questions before a pilot",
    href: "/insights/ai-readiness-checklist",
    content: "The AI readiness checklist asks teams to define the business problem, understand the current process, choose success measures and a baseline, check whether information is accurate and permissioned, decide if AI is suitable, review privacy and security, define human judgement and approvals, test accuracy and edge cases, account for integration and operating needs, and agree whether the pilot should stop, change, continue or expand.",
    tags: ["ai checklist", "questions", "pilot", "before ai", "data", "security", "privacy", "baseline", "measurement", "accuracy", "human review"],
  },
  {
    id: "operations-improvement",
    audience: "general",
    title: "Workflow and operational performance improvement",
    href: "/business",
    content: "Workflow and operational performance improvement focuses on process improvement and Lean SOPs, workflow optimisation and workforce management, performance management, process documentation, operational problem solving and continuous improvement. Potential work includes mapping the current workflow, delays, rework and handoff issues, prioritising improvement actions, and building an action plan with owners, milestones and performance measures.",
    tags: ["operations", "workflow", "process", "lean", "sop", "wfm", "workforce management", "documentation", "continuous improvement", "performance"],
  },
  {
    id: "data-analytics",
    audience: "general",
    title: "Data and analytics services",
    href: "/business",
    content: "The business services page lists MIS reporting and governance, executive business dashboards, performance and SLA analysis, actionable business insights, reporting automation and decision-support data modelling as data and analytics areas.",
    tags: ["data", "analytics", "mis", "reporting", "dashboard", "sla", "metrics", "business intelligence", "automation", "decision support"],
  },
  {
    id: "leadership-services",
    audience: "general",
    title: "Leadership and people services",
    href: "/business",
    content: "The business services page lists people leadership coaching, team development and culture, change management protocols, stakeholder management, leadership capability building, and accountability and trust structures as leadership and people areas.",
    tags: ["leadership", "people", "coaching", "team development", "culture", "change management", "stakeholder", "accountability", "trust"],
  },
  {
    id: "project-leadership",
    audience: "general",
    title: "Project leadership services",
    href: "/business",
    content: "Project leadership areas listed on the website include cross-functional project execution, complex problem solving, enterprise transformation, process redesign and agile sprints, implementation support and post-go-live continuous refinement.",
    tags: ["project", "project management", "execution", "enterprise transformation", "agile", "implementation", "go live", "cross functional"],
  },
  {
    id: "consulting-methodology",
    audience: "general",
    title: "Consulting methodology",
    href: "/business",
    content: "The website describes five consulting phases: Discover, Diagnose, Design, Implement and Improve. Discover means understanding the challenge, organisational context and stakeholders. Diagnose analyses root causes, workflows, data and opportunities. Design builds practical solutions and governance. Implement turns solutions into action through execution and team enablement. Improve measures outcomes, learns and continuously refines performance.",
    tags: ["methodology", "approach", "how it works", "process", "discover", "diagnose", "design", "implement", "improve", "phases"],
  },
  {
    id: "professional-career-services",
    audience: "general",
    title: "Career and professional support",
    href: "/",
    content: "Professional support listed on the website includes career strategy to identify target roles, skill gaps and industry positioning; job-search strategy covering search planning, role matching and applications; interview preparation using the STAR framework and behavioural, leadership and AI scenarios; LinkedIn positioning covering headline, About, Experience and content branding; and AI career readiness for workplace productivity workflows and skills. Career support does not guarantee a job placement or hiring outcome.",
    tags: ["career", "professional", "job", "job search", "employment", "application", "interview", "star", "resume", "cv", "linkedin", "personal brand", "ai skills"],
  },
  {
    id: "hiring-support",
    audience: "general",
    title: "Hiring support for organisations",
    href: "/",
    content: "Hiring support for organisations can include understanding role requirements and competencies, refining job descriptions, candidate screening and shortlisting frameworks, interview frameworks and question design, candidate evaluation rubrics, AI-assisted recruitment workflows, and hiring for operations, customer experience and AI-related roles. Final selection and hiring outcomes remain with the employer.",
    tags: ["hiring", "recruitment", "candidate", "screening", "shortlist", "job description", "jd", "interview questions", "evaluation", "employer"],
  },
  {
    id: "collaborations",
    audience: "general",
    title: "Collaborations and partnerships",
    href: "/",
    content: "The website welcomes LinkedIn and creator collaborations, co-created content, expert roundtables, brand partnerships with AI, productivity, CX and workplace technology brands, podcasts, interviews, keynotes, joint research, surveys, whitepapers and thought-leadership articles. A collaboration enquiry can describe the organisation, opportunity and preferred next step.",
    tags: ["collaboration", "partner", "partnership", "creator", "linkedin", "brand", "podcast", "interview", "keynote", "speaking", "research", "webinar", "whitepaper"],
  },
  {
    id: "ai-philosophy",
    audience: "general",
    title: "Abhishek's AI philosophy",
    href: "/",
    content: "The website's stated AI philosophy is: AI should improve the experience, not replace the human. It describes people, process, data and AI working together to support better productivity, stronger decisions and better customer experiences. Human accountability and judgement remain important.",
    tags: ["ai philosophy", "human", "people", "process", "data", "replace", "human centric", "human centred", "ethics", "judgement"],
  },
  {
    id: "leadership-book",
    audience: "general",
    title: "The Bridge You Become",
    href: "/",
    content: "The Bridge You Become: Becoming the Leader Others Remember is Abhishek Shukla's leadership book. The website describes themes of moving from frontline newcomer to seasoned mentor, authentic trust, emotional reality and quiet consistency. The website says the book is available on Amazon Global.",
    tags: ["book", "author", "the bridge you become", "leader others remember", "amazon", "leadership", "reading"],
  },
  {
    id: "sps-contact",
    audience: "sps",
    title: "SPS NEXUS TECH — Contact for project enquiries",
    href: "/business",
    content: "For a BPO or customer-support project discussion, visitors can use the project enquiry form on the SPS NEXUS TECH page or contact Abhishek Shukla directly. The business page lists email abhishek@iabhishekshukla.com and phone +91 8860220070. The project enquiry form asks for company and contact details, service required, expected calls or cases, required hours and languages, project details and target start date.",
    tags: ["contact", "email", "reach", "speak", "meeting", "enquiry", "form", "project enquiry", "phone"],
  },
  {
    id: "sps-overview",
    audience: "sps",
    title: "SPS NEXUS TECH — Human-led BPO and customer support",
    href: "/customer-support-outsourcing",
    content: "SPS NEXUS TECH discusses human-led, project-based call centre and BPO support shaped around a client's workload, customer needs, operating hours and quality expectations. Every engagement is scoped before commitment. Staffing, coverage, pricing and launch dates are confirmed against signed project requirements.",
    tags: ["sps", "sps nexus tech", "bpo", "outsourcing", "call centre", "call center", "customer support", "human led", "project"],
  },
  {
    id: "sps-inbound",
    audience: "sps",
    title: "SPS NEXUS TECH — Inbound call handling",
    href: "/customer-support-outsourcing",
    content: "Inbound call handling can cover customer enquiries, product or service questions, appointment requests, and agreed call-routing or escalation workflows. Call volumes, service hours, escalation rules and quality expectations are discussed and agreed for each project.",
    tags: ["inbound", "incoming call", "inbound calls", "call handling", "phone support", "telephone", "appointment", "call routing"],
  },
  {
    id: "sps-outbound",
    audience: "sps",
    title: "SPS NEXUS TECH — Outbound calling",
    href: "/customer-support-outsourcing",
    content: "Outbound calling can cover customer follow-ups, lead qualification, appointment confirmation, feedback calls and other clearly scoped calling campaigns. Campaign requirements, call volumes, working hours, scripts and quality checks are agreed before launch.",
    tags: ["outbound", "outgoing calls", "telecalling", "telemarketing", "follow up", "lead qualification", "appointment", "feedback calls", "campaign"],
  },
  {
    id: "sps-query-support",
    audience: "sps",
    title: "SPS NEXUS TECH — Customer query and email support",
    href: "/customer-support-outsourcing",
    content: "Customer query support can include email and other agreed customer communication queues, with response guidelines, escalation rules and quality checks defined in advance. The client and SPS NEXUS TECH agree which channels and case types are in scope.",
    tags: ["email support", "customer query", "customer queries", "email", "non voice", "ticket", "case", "communication", "customer service"],
  },
  {
    id: "sps-ecommerce",
    audience: "sps",
    title: "SPS NEXUS TECH — E-commerce and order support",
    href: "/customer-support-outsourcing",
    content: "E-commerce and order support can cover order-status questions, delivery updates, returns and exchange enquiries, and customer follow-ups based on the client's policies. The client supplies or approves the policies and processes used by the support team.",
    tags: ["ecommerce", "e commerce", "online store", "order support", "order status", "delivery", "returns", "exchange", "shopping"],
  },
  {
    id: "sps-backoffice",
    audience: "sps",
    title: "SPS NEXUS TECH — Back-office operations",
    href: "/customer-support-outsourcing",
    content: "Back-office operations can include project-defined administrative tasks, data entry, documentation, verification and routine process support. The exact process, system access, data controls and quality expectations are agreed before the project starts.",
    tags: ["back office", "backoffice", "admin", "administration", "data entry", "documentation", "verification", "processing", "non voice"],
  },
  {
    id: "sps-staffing",
    audience: "sps",
    title: "SPS NEXUS TECH — Staffing, recruitment and training",
    href: "/customer-support-outsourcing",
    content: "Staffing is planned around each signed project. After scope and commercial terms are agreed in a contract, project-specific recruitment and role-specific training can be arranged. Supervision planning and delivery preparation are based on the agreed workload. Team size and start dates are confirmed before launch; the website does not promise a large ready-to-deploy team.",
    tags: ["staff", "staffing", "team", "headcount", "agents", "employees", "recruitment", "hiring", "training", "capacity", "ready team"],
  },
  {
    id: "sps-international",
    audience: "sps",
    title: "SPS NEXUS TECH — International projects",
    href: "/customer-support-outsourcing",
    content: "SPS NEXUS TECH is open to discussing international projects. Country, time-zone coverage, language needs, data-protection obligations, systems access and commercial feasibility must be reviewed before confirming delivery. International coverage is discussed per project rather than assumed.",
    tags: ["international", "overseas", "global", "usa", "united states", "uk", "united kingdom", "uae", "dubai", "australia", "canada", "europe", "country", "timezone"],
  },
  {
    id: "sps-pricing",
    audience: "sps",
    title: "SPS NEXUS TECH — Pricing and quotations",
    href: "/customer-support-outsourcing",
    content: "The SPS NEXUS TECH page does not publish a fixed price list. Pricing depends on work type, expected volume, staffing profile, operating hours, training, systems, quality requirements and contract duration. A proposal is prepared after the requirement is understood.",
    tags: ["price", "pricing", "cost", "rate", "quotation", "quote", "budget", "charges", "fees", "commercial"],
  },
  {
    id: "sps-project-process",
    audience: "sps",
    title: "SPS NEXUS TECH — Enquiry and project launch process",
    href: "/customer-support-outsourcing",
    content: "To begin, share the service required, customer types, channels, estimated calls, emails, cases or records per day or month, operating hours, time zone, languages, coverage days, scripts and SOPs, CRM or telephony systems, quality measures, reporting needs, data controls and target start date. The process is to share the requirement, confirm scope and feasibility, agree the contract and delivery plan in writing, then prepare the project team after contract signing.",
    tags: ["start", "get started", "proposal", "enquiry", "form", "project", "launch", "process", "requirements", "volume", "crm", "telephony", "sop"],
  },
  {
    id: "sps-hours-language",
    audience: "sps",
    title: "SPS NEXUS TECH — Operating hours and languages",
    href: "/customer-support-outsourcing",
    content: "The SPS NEXUS TECH project brief asks clients to specify operating hours, time zone, languages and coverage days. The website does not make a blanket promise of 24/7 coverage or list confirmed supported languages; these details need to be reviewed and confirmed for each project.",
    tags: ["24/7", "247", "hours", "operating hours", "shift", "language", "languages", "English", "Hindi", "coverage", "weekend", "time zone"],
  },
  {
    id: "sps-ai-product-guardrail",
    audience: "sps",
    title: "SPS NEXUS TECH — Human-led service scope",
    href: "/customer-support-outsourcing",
    content: "The SPS NEXUS TECH customer-support page focuses on traditional, human-led BPO and customer-support services. It does not claim that a finished AI call-centre product is already launched. AI-plus-human partnership ideas on the wider business site are described as a proposed direction to validate with partners, not an existing launched product.",
    tags: ["ai", "chatbot", "automation", "ai human", "ai plus human", "current", "available", "product", "launched", "human led"],
  },
  {
    id: "contact-centre-pilot",
    audience: "general",
    title: "Contact centre — AI readiness and controlled pilots",
    href: "/contact-centre-bpo-consulting",
    content: "The contact-centre consulting page recommends choosing a narrow and observable problem, agreeing baseline measures and ownership, protecting customer information, keeping human review and escalation available where judgement is needed, and evaluating quality and customer impact before wider automation. An AI call-centre roadmap is a proposed direction to validate with partners, not an already launched product.",
    tags: ["ai pilot", "automation", "human review", "privacy", "risk", "safeguard", "human oversight", "pilot"],
  },
  {
    id: "insight-contact-centre-kpis",
    audience: "general",
    title: "Contact centre KPIs to review before AI automation",
    href: "/insights/contact-centre-kpis-before-ai",
    content: "The contact-centre KPI guide covers resolution and repeat contacts, quality and policy adherence, customer effort and feedback, service level, wait time and abandonment, transfers and escalation quality, agent effort and workflow time, and AI-specific quality and fallback. It advises against optimising one number in isolation and recommends a balanced baseline.",
    tags: ["kpi", "metrics", "first contact resolution", "repeat contact", "quality", "service level", "wait time", "abandonment", "transfer", "escalation", "handling time", "ai automation"],
  },
];

function getRelevantWords(query: string): string[] {
  const stopWords = new Set([
    "a", "an", "and", "are", "as", "at", "be", "can", "do", "does", "for", "from",
    "get", "give", "have", "how", "i", "in", "is", "it", "me", "my", "of", "on",
    "or", "please", "tell", "that", "the", "their", "them", "there", "this", "to",
    "us", "we", "what", "when", "where", "which", "who", "why", "with", "you",
    "your", "about", "would", "should", "could", "our", "more", "same", "much",
    "many", "some", "any", "also", "looking", "like", "need", "want", "per", "fixed"
  ]);
  const aliases: Record<string, string> = {
    center: "centre", centers: "centre", centres: "centre", callcenter: "centre",
    calling: "call", calls: "call", called: "call", telephone: "phone",
    costs: "pricing", cost: "pricing", price: "pricing", prices: "pricing",
    fees: "pricing", fee: "pricing", rates: "pricing", rate: "pricing",
    quote: "pricing", quotation: "pricing", quotations: "pricing",
    employees: "staff", agent: "staff", agents: "staff", people: "staff",
    team: "staff", teams: "staff", manpower: "staff", recruitment: "staff",
    recruit: "staff", hiring: "staff", trained: "training",
    jobs: "career", employment: "career", cv: "resume", interviews: "interview",
    kpis: "kpi", measures: "metric", measurement: "metric", metrics: "metric",
    dashboards: "dashboard", reports: "report", reporting: "report",
    enquiries: "enquiry", inquiry: "enquiry", inquiries: "enquiry",
    abroad: "overseas", global: "overseas",
    processes: "process", workflows: "workflow", operations: "operation",
    languages: "language", shifts: "shift", hours: "hour",
    certificates: "credential", certifications: "credential",
    offer: "service", offers: "service", offering: "service", provide: "service", provides: "service",
    outsource: "outsourcing", outsourced: "outsourcing",
    hire: "staff", number: "phone", mobile: "phone", based: "location",
  };

  return Array.from(new Set(
    query
      .toLowerCase()
      .replace(/&/g, " and ")
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter((word) => word.length > 1 && !/^\d+$/.test(word) && !stopWords.has(word))
      .map((word) => aliases[word] ?? word)
  ));
}

function normalise(value: string): string {
  return value.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

export function searchWebsite(query: string, audience: "general" | "sps") {
  const words = getRelevantWords(query);
  if (!words.length) return [];

  const eligiblePassages = audience === "sps"
    ? websiteKnowledge.filter((passage) => passage.audience === "sps")
    : websiteKnowledge;

  const documents = eligiblePassages.map((passage) => ({
    passage,
    titleWords: new Set(getRelevantWords(passage.title)),
    tagWords: new Set(getRelevantWords(passage.tags.join(" "))),
    bodyWords: new Set(getRelevantWords(passage.content)),
    allText: normalise(passage.title + " " + passage.tags.join(" ") + " " + passage.content),
  }));

  const documentFrequency = new Map<string, number>();
  for (const doc of documents) {
    for (const word of new Set([...doc.titleWords, ...doc.tagWords, ...doc.bodyWords])) {
      documentFrequency.set(word, (documentFrequency.get(word) ?? 0) + 1);
    }
  }

  const question = normalise(query);
  const ranked = documents.map((doc) => {
    let score = 0;
    let matches = 0;
    for (const word of words) {
      const idf = 1 + Math.log((documents.length + 1) / ((documentFrequency.get(word) ?? 0) + 1));
      let fieldScore = 0;
      if (doc.titleWords.has(word)) fieldScore += 5.5;
      if (doc.tagWords.has(word)) fieldScore += 4;
      if (doc.bodyWords.has(word)) fieldScore += 1.3;
      if (fieldScore > 0) matches += 1;
      score += fieldScore * idf;
    }

    const phraseMatches = doc.passage.tags.filter((tag) => {
      const normalTag = normalise(tag);
      return normalTag.length > 3 && question.includes(normalTag);
    });
    if (phraseMatches.length) score += Math.min(phraseMatches.length, 3) * 6;
    if (question.length > 7 && doc.allText.includes(question)) score += 10;

    const coverage = matches / Math.max(words.length, 1);
    score *= 0.5 + coverage * 0.85;
    return { passage: doc.passage, score, coverage };
  });

  return ranked
    .filter((item) => item.score >= 8 && item.coverage >= 0.6)
    .sort((a, b) => b.score - a.score);
}

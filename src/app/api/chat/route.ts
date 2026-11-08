type Variant = "site" | "sps";

type KnowledgeDoc = {
  id: string;
  title: string;
  href: string;
  scope: "site" | "sps" | "both";
  keywords: string[];
  answer: string;
};

const contactHref = "mailto:abhishek@iabhishekshukla.com?subject=Website%20enquiry";
const spsEnquiryHref = "/customer-support-outsourcing#project-enquiry";

const knowledge: KnowledgeDoc[] = [
  {
    id: "profile",
    title: "About Abhishek Shukla",
    href: "/",
    scope: "site",
    keywords: ["Abhishek Shukla", "about founder", "who is Abhishek", "profile", "experience", "credentials", "Thinkers360", "author", "Delhi", "India", "consultant"],
    answer: "Abhishek Shukla is presented on this website as a Customer Experience, Operations and practical AI leader, consultant, project leader and author. The website lists 7+ years of experience, Thinkers360 recognition in Leadership, AI Ethics and Customer Loyalty, and his book, The Bridge You Become. His listed location is Delhi, India, with global and remote consulting.",
  },
  {
    id: "positioning",
    title: "What Abhishek helps organizations with",
    href: "/",
    scope: "site",
    keywords: ["services", "what do you do", "what can you help", "business support", "organizations", "customer experience", "operations", "AI", "data", "leadership", "consulting"],
    answer: "Abhishek's website describes work that helps organizations improve customer experience, operational performance and workplace productivity. The approach combines customer experience, AI, data, process improvement and human-centred leadership. It starts by understanding the business problem before recommending a solution.",
  },
  {
    id: "organization-services",
    title: "Business consulting service areas",
    href: "/business",
    scope: "site",
    keywords: ["business consulting", "organization services", "customer experience", "CX", "AI workplace", "generative AI", "operations", "Lean", "SOP", "workflow", "data analytics", "MIS", "dashboards", "leadership", "project leadership"],
    answer: "The business services page groups its work into six areas: customer experience and contact-centre performance; AI and workplace adoption; operations and process improvement; data and analytics; leadership and people development; and project leadership. Examples include customer-journey improvement, AI use-case prioritization, Lean SOPs, workflow optimization, MIS reporting, dashboards, change management and cross-functional project execution.",
  },
  {
    id: "customer-experience",
    title: "Customer experience consulting",
    href: "/customer-experience-consulting",
    scope: "site",
    keywords: ["customer experience consulting", "CX", "customer journey", "repeat contacts", "service quality", "customer effort", "escalations", "handoffs", "agent guidance"],
    answer: "Customer experience consulting covers customer journeys, repeat contacts, service quality, support operations, agent guidance, knowledge access, escalation ownership and handoffs. The website describes reviewing where customers repeat themselves, cases escalate or teams lose time, then turning those findings into practical service improvements.",
  },
  {
    id: "business-improvement",
    title: "Workflow and operational improvement",
    href: "/business",
    scope: "site",
    keywords: ["operations", "workflow", "process improvement", "Lean SOP", "manual tasks", "handoff", "delays", "rework", "performance", "operational improvement"],
    answer: "The operations service focuses on clarifying workflows, role ownership, standard operating practices and performance measures. Potential work includes mapping delays, rework and handoff issues, prioritizing improvement actions, and preparing an action plan with owners, milestones and measures.",
  },
  {
    id: "data-analytics",
    title: "Data and analytics services",
    href: "/business",
    scope: "site",
    keywords: ["data", "analytics", "MIS", "reporting", "dashboard", "SLA", "performance analysis", "decision support", "reporting automation"],
    answer: "The website lists MIS reporting and governance, executive business dashboards, performance and SLA analysis, actionable business insights, reporting automation and decision-support data modelling as areas within its data and analytics services.",
  },
  {
    id: "leadership",
    title: "Leadership and people development",
    href: "/",
    scope: "site",
    keywords: ["leadership", "people", "team development", "coaching", "culture", "change management", "stakeholder", "accountability", "trust", "adaptability"],
    answer: "The website discusses people-leadership coaching, team development and culture, change management, stakeholder management, leadership capability, accountability and trust. Its leadership principles highlight trust, accountability, adaptability and human judgement.",
  },
  {
    id: "methodology",
    title: "Abhishek's consulting methodology",
    href: "/",
    scope: "site",
    keywords: ["methodology", "process", "approach", "how work starts", "discover", "diagnose", "design", "implement", "improve", "engagement"],
    answer: "The website describes a five-stage consulting methodology: Discover the challenge and context; Diagnose root causes, workflows and data; Design practical solutions and governance; Implement through execution and team enablement; and Improve by measuring outcomes and refining performance.",
  },
  {
    id: "ai-readiness",
    title: "AI readiness consulting",
    href: "/ai-readiness-consulting",
    scope: "site",
    keywords: ["AI readiness", "AI adoption", "artificial intelligence", "AI use cases", "pilot", "data readiness", "privacy", "human oversight", "risk", "AI consulting"],
    answer: "AI readiness consulting starts with the business problem rather than a product. The website describes reviewing business value and workflow fit, data and knowledge readiness, risk and privacy, human judgement, pilot scope, baseline measures and quality checks. A readiness review may recommend process redesign or better knowledge management instead of AI where that is the more suitable choice.",
  },
  {
    id: "ai-philosophy",
    title: "Abhishek's approach to AI",
    href: "/ai-readiness-consulting",
    scope: "site",
    keywords: ["AI philosophy", "human centred AI", "AI should improve", "human", "human oversight", "responsible AI", "AI at work"],
    answer: "The website's stated philosophy is: AI should improve the experience, not replace the human. It emphasizes people, process, data and AI working together, with human accountability, privacy, safeguards and judgement remaining important.",
  },
  {
    id: "contact-centre-consulting",
    title: "Contact-centre and BPO consulting",
    href: "/contact-centre-bpo-consulting",
    scope: "site",
    keywords: ["contact centre consulting", "contact center", "BPO consulting", "service operations", "queues", "handoffs", "agent enablement", "quality assurance", "service level", "wait time", "abandonment", "repeat contacts"],
    answer: "The contact-centre and BPO consulting page covers service operations and workflows, agent enablement and quality, performance visibility, queue and handoff issues, escalation paths, repeat contacts and customer feedback. It also describes possible AI-readiness reviews as a proposed direction to assess with partners, not as a claim that a finished AI call-centre product is available.",
  },
  {
    id: "hiring-support",
    title: "Hiring support for organizations",
    href: "/",
    scope: "site",
    keywords: ["hiring", "recruitment", "candidate", "screening", "shortlisting", "job description", "JD", "competency", "interview framework", "evaluation rubric", "recruiting"],
    answer: "The website lists structured hiring support for organizations: understanding role requirements and competencies, refining job descriptions, creating candidate screening and shortlisting frameworks, designing interview questions, preparing candidate evaluation rubrics and considering AI-assisted recruitment workflows. Final candidate selection and hiring decisions remain with the employer.",
  },
  {
    id: "career-support",
    title: "Career and professional support",
    href: "/",
    scope: "site",
    keywords: ["career", "job search", "job application", "interview preparation", "STAR", "resume", "CV", "LinkedIn", "professional branding", "professional development", "career readiness"],
    answer: "Professional support described on the website includes career strategy, target-role and skill-gap planning, job-search strategy, role matching and applications, STAR-based interview preparation, LinkedIn headline and profile positioning, professional branding, and AI workplace readiness. The website does not promise job placement or hiring outcomes.",
  },
  {
    id: "collaborations",
    title: "Collaboration and partnership opportunities",
    href: "/#collaborations",
    scope: "site",
    keywords: ["collaboration", "partnership", "co-creation", "LinkedIn", "brand partnership", "podcast", "keynote", "speaking", "research", "whitepaper", "creator"],
    answer: "The website invites collaboration around LinkedIn content and co-creation, brand partnerships, creator collaborations, podcasts, interviews, keynotes, joint research, whitepapers, surveys and thought-leadership projects. A useful enquiry should briefly explain the organization, the opportunity and the preferred next step.",
  },
  {
    id: "book",
    title: "The Bridge You Become",
    href: "/",
    scope: "site",
    keywords: ["book", "author", "The Bridge You Become", "leadership book", "mentor", "frontline", "Amazon"],
    answer: "Abhishek is the author of The Bridge You Become: Becoming the Leader Others Remember. The website describes the book as exploring the move from frontline newcomer to seasoned mentor, with themes of trust, emotional reality and consistent leadership. The homepage links to its Amazon listing.",
  },
  {
    id: "resources",
    title: "Resources, guides and insights",
    href: "/insights",
    scope: "site",
    keywords: ["resources", "guides", "templates", "worksheets", "checklists", "leadership", "AI workplace", "career", "management", "STAR", "insights", "articles"],
    answer: "The website's resources include leadership guides and worksheets, AI workplace prompting templates and workflow checklists, career and job-search checklists, STAR interview frameworks, and management materials on coaching, delegation and performance. Its published insights include an AI-readiness checklist and a guide to contact-centre KPIs.",
  },
  {
    id: "privacy",
    title: "Website privacy information",
    href: "/privacy",
    scope: "site",
    keywords: ["privacy", "personal data", "data protection", "privacy policy", "visitor information"],
    answer: "The website has a Privacy Policy page. For questions about how information submitted through a particular form is handled, please review that page or contact Abhishek directly.",
  },
  {
    id: "sps-overview",
    title: "SPS NEXUS TECH customer-support services",
    href: "/customer-support-outsourcing",
    scope: "both",
    keywords: ["SPS Nexus Tech", "BPO", "call centre", "call center", "customer support", "customer service", "outsourcing", "inbound", "outbound", "email support", "ecommerce", "order support", "back office", "human led", "traditional call centre"],
    answer: "SPS NEXUS TECH is discussing human-led, project-based BPO and customer-support work. The published service areas include inbound call handling, outbound calling, customer query and email support, e-commerce and order support, back-office operations, and project-based team setup. Scope and delivery are agreed against each client's requirements.",
  },
  {
    id: "sps-inbound",
    title: "Inbound call handling",
    href: "/customer-support-outsourcing",
    scope: "both",
    keywords: ["inbound", "incoming calls", "receive calls", "phone support", "call answering", "telephone support", "customer enquiries", "product questions", "appointment requests", "routing"],
    answer: "Inbound call handling can cover customer enquiries, product or service questions, appointment requests, and agreed call-routing or escalation workflows. The exact call types, scripts, quality checks and escalation process are confirmed during project scoping.",
  },
  {
    id: "sps-outbound",
    title: "Outbound calling",
    href: "/customer-support-outsourcing",
    scope: "both",
    keywords: ["outbound", "outgoing calls", "calling campaign", "follow up", "lead qualification", "appointment confirmation", "feedback calls", "sales calls"],
    answer: "Outbound calling can include customer follow-ups, lead qualification, appointment confirmation, feedback calls and other clearly scoped calling campaigns. The purpose, audience, scripts, expected volume and reporting requirements need to be agreed before launch.",
  },
  {
    id: "sps-customer-query",
    title: "Customer query and email support",
    href: "/customer-support-outsourcing",
    scope: "both",
    keywords: ["email support", "email", "customer query", "queries", "non voice", "chat support", "customer communication", "response queue", "tickets", "complaints"],
    answer: "Customer query support can cover email and other agreed customer-communication queues. Response guidelines, escalation rules, ownership, quality checks and any required reporting are defined in advance with the client.",
  },
  {
    id: "sps-ecommerce",
    title: "E-commerce and order support",
    href: "/customer-support-outsourcing",
    scope: "both",
    keywords: ["ecommerce", "e-commerce", "online store", "order status", "delivery", "shipment", "returns", "refund", "exchange", "shopping support"],
    answer: "E-commerce and order support can cover order-status questions, delivery updates, returns and exchange enquiries, and customer follow-ups based on the client's policies. The client’s systems, policies and escalation rules would be confirmed before the work begins.",
  },
  {
    id: "sps-back-office",
    title: "Back-office operations",
    href: "/customer-support-outsourcing",
    scope: "both",
    keywords: ["back office", "back-office", "data entry", "administrative", "admin", "documentation", "verification", "process support", "record updates"],
    answer: "Back-office operations can include project-defined administrative tasks, data entry, documentation, verification and routine process support. The exact tasks, access controls, quality checks and data-handling responsibilities must be agreed before launch.",
  },
  {
    id: "sps-team",
    title: "Project-based team setup and staffing",
    href: "/customer-support-outsourcing",
    scope: "both",
    keywords: ["team", "staff", "staffing", "employees", "agents", "workforce", "recruitment", "training", "team size", "ready team", "headcount", "capacity", "hire"],
    answer: "Staffing is planned around each signed project. After the scope and commercial terms are agreed, project-specific recruitment and role-specific training can be arranged. Team size, coverage, supervision and start dates are confirmed before launch; the website does not claim a large ready-to-deploy team.",
  },
  {
    id: "sps-international",
    title: "International customer-support projects",
    href: "/customer-support-outsourcing",
    scope: "both",
    keywords: ["international", "global", "overseas", "outside India", "USA", "United States", "UK", "United Kingdom", "UAE", "Dubai", "GCC", "Australia", "Canada", "country", "timezone"],
    answer: "SPS NEXUS TECH is open to discussing international projects. Country, time-zone coverage, language requirements, customer-data obligations, systems access, service expectations and commercial feasibility are reviewed before delivery is confirmed.",
  },
  {
    id: "sps-pricing",
    title: "SPS NEXUS TECH pricing and quotations",
    href: "/customer-support-outsourcing",
    scope: "both",
    keywords: ["price", "pricing", "cost", "rate", "quote", "quotation", "budget", "charges", "commercial", "per agent", "per call", "per hour"],
    answer: "The website does not publish a fixed one-size-fits-all rate. Pricing depends on the service type, expected volume, staffing profile, operating hours, training, systems, quality requirements and contract duration. Share the requirement to discuss a suitable proposal.",
  },
  {
    id: "sps-process",
    title: "How an SPS NEXUS TECH project starts",
    href: "/customer-support-outsourcing",
    scope: "both",
    keywords: ["start", "get started", "process", "steps", "onboarding", "onboard", "launch", "implementation", "contract", "project plan", "how to begin"],
    answer: "The project discussion follows four steps: share the requirement; review scope and feasibility; agree the contract, pricing, responsibilities, service measures and launch plan in writing; then prepare the project team through project-specific recruitment and training after the contract is signed.",
  },
  {
    id: "sps-brief",
    title: "Information needed for a BPO project enquiry",
    href: "/customer-support-outsourcing#project-enquiry",
    scope: "both",
    keywords: ["what information", "project brief", "requirement", "volume", "working hours", "languages", "channels", "service levels", "escalation", "target start date", "proposal"],
    answer: "A useful project brief should include the company and website, service type, customer channels, expected call or query volume, operating hours and time zone, language requirements, systems, quality expectations, escalation rules, data responsibilities and target start date. This helps assess feasibility and prepare a relevant proposal.",
  },
  {
    id: "sps-hours-languages",
    title: "SPS operating hours, languages and coverage",
    href: "/customer-support-outsourcing",
    scope: "both",
    keywords: ["hours", "working hours", "operating hours", "time zone", "timezone", "language", "languages", "Hindi", "English", "24/7", "night shift", "weekend", "coverage", "service level"],
    answer: "Operating hours, time-zone coverage, language requirements, shift patterns and service levels are confirmed for each project after requirements and delivery feasibility have been reviewed. The website does not promise a fixed 24/7 schedule or a particular language before scoping.",
  },
  {
    id: "sps-human-led",
    title: "Human-led SPS NEXUS TECH service focus",
    href: "/customer-support-outsourcing",
    scope: "both",
    keywords: ["AI", "AI human", "AI plus human", "chatbot", "automation", "human led", "people", "agent", "is it AI", "technology"],
    answer: "The current SPS NEXUS TECH customer-support outsourcing offer is focused on human-led calling, customer queries and project-based BPO services. The SPS outsourcing page does not offer an AI-plus-human call-centre product. Abhishek's wider website has separate pages about AI consulting and readiness.",
  },
  {
    id: "contact",
    title: "Contact Abhishek Shukla",
    href: "/#contact",
    scope: "both",
    keywords: ["contact", "email", "phone", "call", "meeting", "speak", "talk", "reach", "business enquiry", "contact details"],
    answer: "You can contact Abhishek Shukla by email at abhishek@iabhishekshukla.com or by phone at +91 8860220070. The website lists his location as Delhi, India, with global and remote availability.",
  },
];

const stopWords = new Set([
  "a", "an", "and", "are", "as", "at", "be", "but", "by", "can", "could",
  "did", "do", "does", "for", "from", "get", "have", "how", "i", "if", "in",
  "into", "is", "it", "me", "my", "of", "on", "or", "our", "please", "the",
  "their", "them", "there", "these", "this", "to", "us", "was", "we", "what",
  "when", "where", "which", "who", "why", "will", "with", "you", "your",
  "website", "tell", "about", "much", "more", "also", "same", "want",
]);

const synonymGroups = [
  ["team", "teams", "staff", "employee", "employees", "agent", "agents", "workforce", "recruitment", "hiring", "headcount", "capacity"],
  ["price", "pricing", "cost", "rate", "rates", "quote", "quotation", "budget", "charges", "commercial"],
  ["call", "calls", "calling", "phone", "telephone", "voice", "inbound", "outbound"],
  ["email", "emails", "mail", "nonvoice", "non-voice", "ticket", "tickets", "query", "queries"],
  ["hours", "hour", "timing", "time", "times", "shift", "shifts", "coverage", "timezone", "time-zone", "schedule"],
  ["language", "languages", "hindi", "english", "spanish", "french", "arabic"],
  ["order", "orders", "delivery", "shipment", "return", "returns", "exchange", "refund", "ecommerce", "e-commerce"],
  ["career", "careers", "job", "jobs", "resume", "cv", "interview", "linkedin"],
  ["privacy", "security", "data", "personal", "information", "confidential"],
  ["services", "service", "offer", "offers", "offering", "offerings", "help", "support"],
  ["partnership", "partnerships", "partner", "partners", "collaboration", "collaborate"],
  ["ai", "artificial", "intelligence", "automation", "automate", "generative"],
];

function normalize(value: string): string {
  return value.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9\s-]/g, " ").replace(/[-\s]+/g, " ").trim();
}

function tokens(value: string): string[] {
  return normalize(value).split(" ").filter((token) => token.length > 1 && !stopWords.has(token));
}

function expandQueryTerms(original: string[]): string[] {
  const expanded = new Set(original);
  for (const group of synonymGroups) {
    if (group.some((term) => original.includes(term))) {
      for (const term of group) expanded.add(term);
    }
  }
  return Array.from(expanded);
}

function scoreDocument(doc: KnowledgeDoc, question: string, originalTerms: string[], expandedTerms: string[]) {
  const titleTokens = new Set(tokens(doc.title));
  const keywordTokens = new Set(tokens(doc.keywords.join(" ")));
  const answerTokens = new Set(tokens(doc.answer));
  let score = 0;

  for (const term of expandedTerms) {
    const isOriginal = originalTerms.includes(term);
    const weight = isOriginal ? 1 : 0.35;
    if (titleTokens.has(term)) score += 3.2 * weight;
    if (keywordTokens.has(term)) score += 2.8 * weight;
    if (answerTokens.has(term)) score += 0.9 * weight;
  }

  const normalizedQuestion = normalize(question);
  for (const keyword of doc.keywords) {
    const phrase = normalize(keyword);
    if (phrase.length > 3 && normalizedQuestion.includes(phrase)) score += 2.5;
  }

  const matchedOriginals = originalTerms.filter((term) =>
    titleTokens.has(term) || keywordTokens.has(term) || answerTokens.has(term),
  ).length;
  const coverage = originalTerms.length ? matchedOriginals / originalTerms.length : 0;
  return score * (0.75 + coverage * 0.25);
}

function fallback(variant: Variant) {
  return {
    answer: variant === "sps"
      ? "I couldn't find a reliable answer to that in the SPS NEXUS TECH service information. Please share your question through the project enquiry form or contact Abhishek directly, and the team can clarify it."
      : "I couldn't find that detail in the information published on this website, so I don't want to guess. Please contact Abhishek and the team can clarify it.",
    sources: [
      { label: variant === "sps" ? "SPS project enquiry" : "Email Abhishek", href: variant === "sps" ? spsEnquiryHref : contactHref },
    ],
  };
}

export async function POST(request: Request) {
  try {
    const payload: unknown = await request.json();
    if (!payload || typeof payload !== "object") {
      return Response.json({ error: "Invalid chat request." }, { status: 400 });
    }

    const body = payload as { question?: unknown; variant?: unknown; context?: unknown };
    if (typeof body.question !== "string" || !body.question.trim()) {
      return Response.json({ error: "Please enter a question." }, { status: 400 });
    }

    const question = body.question.trim().slice(0, 500);
    const variant: Variant = body.variant === "sps" ? "sps" : "site";
    const context = Array.isArray(body.context)
      ? body.context.filter((item): item is string => typeof item === "string").slice(-2).map((item) => item.slice(0, 300))
      : [];

    const normalized = normalize(question);
    if (/^(hi|hello|hey|good morning|good afternoon|good evening|namaste)$/.test(normalized)) {
      return Response.json({
        answer: variant === "sps"
          ? "Hello! I'm the SPS NEXUS TECH website assistant. Ask me about our human-led BPO services, calling, customer queries, project staffing or how to request a proposal."
          : "Hello! I'm Abhishek's website assistant. Ask me about his profile, consulting services, resources, career support or SPS NEXUS TECH.",
        sources: [],
      }, { headers: { "Cache-Control": "no-store" } });
    }

    if (/are you abhishek|is this abhishek|are you a real person|are you human/.test(normalized)) {
      return Response.json({
        answer: "I'm Abhishek's website assistant, not Abhishek himself. I use information published on this website to help visitors find the right services and contact details. You can contact Abhishek directly by email.",
        sources: [{ label: "Email Abhishek", href: contactHref }],
      }, { headers: { "Cache-Control": "no-store" } });
    }

    let searchQuestion = question;
    const questionTerms = tokens(question);
    if (questionTerms.length <= 3 && context.length > 0) {
      searchQuestion = context.join(" ") + " " + question;
    }
    if (/what do you do|what can you help|what services do you provide/.test(normalized)) {
      searchQuestion += " business services consulting customer experience operations BPO career support";
    }

    const originalTerms = Array.from(new Set(tokens(searchQuestion)));
    if (originalTerms.length === 0) {
      return Response.json(fallback(variant), { headers: { "Cache-Control": "no-store" } });
    }

    const expandedTerms = expandQueryTerms(originalTerms);
    const visibleDocs = variant === "sps"
      ? knowledge.filter((doc) => doc.scope === "sps" || doc.scope === "both")
      : knowledge;
    const ranked = visibleDocs
      .map((doc) => ({ doc, score: scoreDocument(doc, searchQuestion, originalTerms, expandedTerms) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);

    if (!ranked.length || ranked[0].score < 3.0) {
      return Response.json(fallback(variant), { headers: { "Cache-Control": "no-store" } });
    }

    const bestScore = ranked[0].score;
    const selected = ranked
      .filter((item) => item.score >= Math.max(3.2, bestScore * 0.58))
      .slice(0, 3);

    const answer = selected.map((item) => item.doc.answer).join("\n\n");
    const sources = Array.from(new Map(selected.map((item) => [
      item.doc.href,
      {
        label: item.doc.href === "/customer-support-outsourcing" ? "SPS NEXUS TECH" :
          item.doc.href === "/" ? "Abhishek's website" :
          item.doc.title,
        href: item.doc.href,
      },
    ])).values()).slice(0, 3);

    return Response.json({ answer, sources }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("[website-assistant] request error:", error);
    return Response.json(
      { error: "The website assistant is temporarily unavailable. Please try again." },
      { status: 500, headers: { "Cache-Control": "no-store" } },
    );
  }
}

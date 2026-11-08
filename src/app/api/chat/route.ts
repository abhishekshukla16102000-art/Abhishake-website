import { searchWebsite } from "@/components/websiteKnowledge";

type Audience = "general" | "sps";

type Source = {
  title: string;
  href: string;
};

function answerQuestion(question: string, audience: Audience) {
  const query = question.trim().toLowerCase();
  const email = "mailto:abhishek@iabhishekshukla.com?subject=Website%20enquiry";

  if (/^(hi|hello|hey|good morning|good afternoon|good evening|namaste)[!. ]*$/.test(query)) {
    return {
      answer: audience === "sps"
        ? "Hello! Welcome to SPS NEXUS TECH. What would you like to know about our human-led BPO and customer-support services?"
        : "Hello! Welcome. I'm Abhishek's website assistant. Ask me about his profile, services, resources or SPS NEXUS TECH.",
      sources: [] as Source[],
    };
  }

  if (/(who are you|are you abhishek|are you a real person|is this abhishek|are you human|are you a bot|are you ai|are you an ai)/.test(query)) {
    return {
      answer: "I'm Abhishek's website assistant, not Abhishek himself. I use information published on this website to help visitors find services and contact details. You can email Abhishek directly for a personal conversation.",
      sources: [{ title: "Email Abhishek", href: email }],
    };
  }

  const results = searchWebsite(question, audience);
  const best = results[0];

  if (!best || best.score < 8 || best.coverage < 0.24) {
    return {
      answer: audience === "sps"
        ? "I couldn't find a clear answer to that in the published SPS NEXUS TECH information, so I don't want to guess. Please share your question through the project enquiry form or contact Abhishek directly."
        : "I couldn't find a clear answer to that in the information published on this website, so I don't want to guess. Please contact Abhishek and he can help with your specific question.",
      sources: audience === "sps"
        ? [
            { title: "SPS NEXUS TECH project enquiry", href: "/customer-support-outsourcing#project-enquiry" },
            { title: "Email Abhishek", href: email },
          ]
        : [
            { title: "Email Abhishek", href: email },
            { title: "Explore business services", href: "/business" },
          ],
    };
  }

  const selected = results
    .filter((item, index) => index === 0 || (
      index === 1 &&
      item.score >= best.score * 0.68 &&
      item.passage.id !== best.passage.id
    ))
    .slice(0, 2);

  const sources: Source[] = [];
  for (const { passage } of selected) {
    if (!sources.some((source) => source.href === passage.href)) {
      sources.push({
        title: passage.href === "/" ? "Read on the homepage" : "Read more: " + passage.title,
        href: passage.href,
      });
    }
  }

  return {
    answer: selected.map(({ passage }) => passage.content).join("\n\n"),
    sources,
  };
}

export async function POST(request: Request) {
  try {
    const payload: unknown = await request.json();
    if (!payload || typeof payload !== "object") {
      return Response.json({ error: "Invalid chat request." }, { status: 400 });
    }

    const body = payload as { question?: unknown; variant?: unknown };
    if (typeof body.question !== "string" || !body.question.trim()) {
      return Response.json({ error: "Please enter a question." }, { status: 400 });
    }

    const question = body.question.trim().slice(0, 500);
    const audience: Audience = body.variant === "sps" ? "sps" : "general";
    const result = answerQuestion(question, audience);

    return Response.json(result, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch {
    return Response.json(
      { error: "The website assistant is temporarily unavailable. Please try again." },
      { status: 500, headers: { "Cache-Control": "no-store" } },
    );
  }
}

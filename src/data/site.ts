// All site content. Edit this file to update the site.

export const site = {
  name: "Auskin Immanuel",
  tagline: "Voice AI engineer. I build production voice agents.",

  hero: {
    headline: "I build production voice AI agents.",
    sub: "Voice AI engineer at VoxyHealth.",
    metrics: [
      { value: "30+", label: "agents shipped" },
      { value: "6", label: "enterprise clients" },
      { value: "10% to 60%", label: "call accuracy lift" },
    ],
  },

  about: [
    "I build voice AI for healthcare: agents that take patient calls, answer claims and prior-authorization questions, book appointments, and follow up after a hospital discharge.",
    "My path was unusual. I started in sales development, moved into customer success owning two AI products, then moved into product to build the agent side itself. Selling AI, implementing AI, building AI. Each step shaped how I think about what makes AI work in production.",
  ],

  work: [
    {
      title: "voice-agent-prompting",
      blurb:
        "An open writeup of how I build production voice agents: the prompting architecture, model choice for low-latency telephony, and six worked sample agents for the ElevenLabs platform.",
      link: "https://github.com/AuskinImmanuel/voice-agent-prompting",
      linkLabel: "View on GitHub",
    },
    {
      title: "Claims inbound agent",
      blurb:
        "Inbound voice agent for a Medicare Advantage health plan's claims line, around 900 calls a day. Two-phase tool calls, multi-LLM A/B testing, eval-gated releases. Fully-AI-handled containment rose from roughly 10-20% to 60-70%.",
    },
    {
      title: "Multi-location orthopedic operator",
      blurb:
        "One inbound operator agent for an 8-clinic orthopedic group. I catalogued 54 real call types into 36 scenarios and 20 transfer rules, with 911 and red-flag safety routing built in from day one.",
    },
    {
      title: "Post-discharge outreach",
      blurb:
        "Outbound follow-up agent for Medicare Advantage members after a hospital discharge, with a nine-category call-outcome classifier.",
    },
  ],

  experience: [
    {
      role: "Associate Product Manager, AI and Agent side",
      company: "VoxyHealth",
      time: "Aug 2025 - Present",
      blurb:
        "I own the prompting and evaluation side of healthcare voice agents end to end. Shipped 30+ production agents on ElevenLabs across 6 enterprise clients at about 8 a week, and lifted fully-AI-handled call accuracy from 10% to 60% on a claims agent by rebuilding evaluation around call outcomes.",
    },
    {
      role: "Customer Success Manager",
      company: "Klenty",
      time: "Jan 2025 - Jul 2025",
      blurb:
        "Owned customer success for two AI products: SchedX, an inbound AI voice platform, and SDRx, an AI SDR for email, LinkedIn, and calling. The main bridge between customers and the product and engineering teams.",
    },
    {
      role: "Sales Development Representative",
      company: "Klenty",
      time: "Oct 2023 - Dec 2024",
      blurb:
        "First role out of college, in B2B SaaS sales. Generated 15+ qualified leads and booked 8+ meetings a week, consistently above target. This is where the customer fluency that shapes how I scope and demo agents came from.",
    },
    {
      role: "LMS and Marketing Site Intern",
      company: "Aptitude Guru Hem",
      time: "Jun 2022 - Dec 2022",
      blurb:
        "Led a small team to ship the company's learning management system and marketing website end to end, working week to week with the founders.",
    },
  ],

  skills: [
    {
      group: "Voice AI",
      items: [
        "Voice agent design",
        "Prompt engineering",
        "Agent behavior design",
        "LLM evaluation and eval rubrics",
        "Multi-LLM orchestration",
        "RAG",
        "A/B testing on agents",
      ],
    },
    {
      group: "Models and platforms",
      items: ["ElevenLabs", "GPT-4.1", "Claude", "Gemini"],
    },
    {
      group: "Domain",
      items: ["Healthcare AI", "HIPAA-aware design", "Conversational AI", "B2B SaaS"],
    },
    {
      group: "Also",
      items: ["SQL", "JavaScript / TypeScript (read and debug)", "Customer discovery"],
    },
  ],

  education: {
    degree: "B.E. Computer Science and Engineering",
    school: "Loyola-ICAM College of Engineering and Technology, Chennai",
    time: "2020 - 2024",
  },

  contact: {
    email: "auskinimmanuel@gmail.com",
    linkedin: "https://www.linkedin.com/in/auskin-immanuel/",
    github: "https://github.com/AuskinImmanuel",
  },
};

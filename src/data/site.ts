// All site content. Edit this file to update the site.

export const site = {
  name: "Auskin Immanuel",
  tagline: "Forward deployed product manager. I deploy voice AI where it's hardest: healthcare phone lines.",

  hero: {
    badge: "Forward Deployed PM · Voice AI on ElevenLabs",
    headline: "I deploy voice AI where it's hardest.",
    sub: "Healthcare phone lines, where the caller is a patient and a wrong answer actually matters. At VoxyHealth I sit forward with the customer: ‹pull their real call recordings›, catalogue what actually happens on their lines, then build the agents and ‹iterate on live traffic› until the numbers hold.",
    metrics: [
      { value: "30+", label: "production agents" },
      { value: "6", label: "enterprise healthcare clients" },
      { value: "~3,500", label: "calls a day across the fleet" },
      { value: "60-70%", label: "containment, up from 10-20%" },
    ],
    ctas: [
      { label: "See the work", href: "#work", primary: true },
      { label: "GitHub", href: "https://github.com/AuskinImmanuel", primary: false },
    ],
  },

  marquee: [
    "Medicare Advantage claims line",
    "multi-location orthopedic operator",
    "EHR-integrated scheduling",
    "post-discharge outreach",
    "care-gap outreach",
    "40-scenario call routing",
    "eval-gated releases",
    "success criteria before build",
    "phased go-lives",
    "HIPAA-aware design",
    "multi-LLM A/B testing",
  ],

  liveCall: {
    label: "One call, end to end",
    headline: "What a good call sounds like.",
    intro:
      "The shape of the work: a live phone line, a real scheduling system behind it, and a caller who gets what they came for in one conversation. Scroll through a call.",
    disclaimer: "Illustrative transcript. No real patient, clinic, or call data.",
    header: "Inbound · orthopedic scheduling line",
    turns: [
      { who: "agent", text: "Thanks for calling. This is the clinic's virtual assistant. How can I help you today?" },
      { who: "caller", text: "Hi, I need to move my knee follow-up. I'm travelling next week." },
      { who: "note", text: "scenario matched: reschedule · one card of about 40" },
      { who: "agent", text: "No problem, I can help with that. Can I get your first and last name?" },
      { who: "caller", text: "Miguel Torres." },
      { who: "agent", text: "Thanks, Miguel. And your date of birth?" },
      { who: "caller", text: "March 9th, 84." },
      { who: "note", text: "lookupPatient ✓ · verified against the live record" },
      { who: "agent", text: "Found you. Your follow-up is Tuesday the 14th at 3:40 pm. When suits you better?" },
      { who: "caller", text: "Friday morning, if you can." },
      { who: "note", text: "getSlots ✓ · 2 openings inside the caller's window" },
      { who: "agent", text: "I have Friday the 17th at 9:20 or 10:40 in the morning. Which works?" },
      { who: "caller", text: "10:40." },
      { who: "note", text: "bookAppointment ✓ · confirmed on the live system" },
      { who: "agent", text: "Done. Friday the 17th, 10:40 am, and a text confirmation is on its way. Anything else?" },
      { who: "caller", text: "No, that's perfect. Thanks!" },
      { who: "note", text: "one conversation · no hold music · no transfer" },
    ],
  },

  method: {
    statement:
      "I started in sales development, moved into customer success owning two AI products, then moved into product to build the agent side itself. ‹Selling AI, implementing AI, building AI.› That arc is why my agents work: I've sat on every side of the table they get deployed at.",
    steps: [
      {
        title: "Embed",
        blurb:
          "I start inside the customer's world: their ops team, their call recordings, their real day. What actually happens on the line, not what the spec says happens.",
        proof: "«54 real call types» catalogued from about 10,000 calls for one operator agent",
      },
      {
        title: "Design",
        blurb:
          "Scenario maps, transfer rules, tool contracts, prompt architecture, and the success criteria the release will be judged on. The agent exists on paper, agreed with the customer, before it says a word.",
        proof: "911 and red-flag safety routing from day one",
      },
      {
        title: "Ship",
        blurb:
          "Eval-gated releases, multi-LLM A/B tests, and live pilot calls I place myself against the real integration before anything goes live.",
        proof: "«about 15 agents» stood up in one four-week window",
      },
      {
        title: "Operate",
        blurb:
          "Live traffic is the real eval. I classify call outcomes, read the transcripts, and turn every failure class into a fix or a spec for engineering.",
        proof: "28k calls analyzed, 268 hand-labelled",
      },
    ],
  },

  habits: {
    label: "How I learn",
    intro:
      "The meta-skill underneath the method: I find the gaps in my own understanding fast, and close them faster.",
    items: [
      {
        title: "Research until it clicks",
        blurb:
          "Before a build or a big call, I map what I don't know and run deep research on it. Ground truth first, opinions second.",
      },
      {
        title: "Listen in parallel",
        blurb:
          "I turn the research into audio briefings and listen while I move. Long-form learning runs in the background of my day.",
      },
      {
        title: "Build with Claude Code",
        blurb:
          "Ideas become working tools the same day: internal utilities, prototypes, this site, and ‹Lia, the agent living in the orb up top›. I set the same tooling up for my whole prompting team.",
      },
    ],
  },

  caseStudies: [
    {
      title: "A California health-insurance payer",
      badge: "Payor side · 5 lines",
      blurb:
        "My deepest payor relationship: one California health plan, a whole family of agent lines built and iterated as one fleet. The flagship is the Medicare Advantage claims line, «around 900 calls a day». Rebuilding its prompt and eval rubric around call outcomes lifted fully-AI-handled containment from «the 10-20% range to 60-70%» on best cuts, as of June 2026. I ran four LLMs live in parallel on this line against a single rubric; a model earns its slot on data, not on feel.",
      stat: "10-20% to 60-70%",
      statLabel: "fully-AI-handled containment, best cuts",
      hero: true,
      bar: { before: 15, after: 65 },
      lines: [
        { name: "Medicare Advantage claims", note: "the flagship, ~900 calls a day" },
        { name: "Medicare eligibility", note: "coverage and plan checks" },
        { name: "Exchange eligibility", note: "marketplace members" },
        { name: "Prior authorization", note: "inbound intake" },
        { name: "Member verification", note: "outbound outreach" },
      ],
    },
    {
      title: "Multi-location orthopedic operator",
      badge: "Inbound",
      blurb:
        "One operator agent for a multi-location orthopedic group, integrated with their EHR. I catalogued «54 real call types» into about 40 scenarios with named transfer rules and safety routing, then placed live pilot calls on the real integration myself: four calls turned into ‹five fix commits and a validation spec for engineering› within two days.",
      stat: "40",
      statLabel: "scenarios, one agent",
      art: "graph",
    },
    {
      title: "Care-gap outreach platform",
      badge: "Outbound",
      blurb:
        "Outbound agents that coordinate patients, pharmacies, and providers across multiple calls to close screening and medication gaps. A ‹3-layer prompt architecture› runs «five care gaps» per patient under a single master agent, with clean AI-to-human coordinator handoffs.",
      stat: "5",
      statLabel: "care gaps, one master agent",
      art: "gaps",
    },
    {
      title: "Fleet small-model migration",
      badge: "Architecture",
      blurb:
        "Moved «about nine production agents» to a small, fast model in four weeks. The unlock is prompt architecture: ‹a lean base prompt plus one card per scenario›, with a single trailing guardrails block.",
      stat: "20K to 6.4K",
      statLabel: "tokens per turn",
      wide: true,
      bar: { before: 100, after: 32 },
    },
  ],

  range: {
    intro: "Six jobs, one operator.",
    pillars: [
      {
        title: "AI product manager",
        blurb:
          "I own the agent roadmap: what we build, what good means, and the eval rubric that proves it. I built the team's evaluation framework, and ‹eval pass-rate is the release gate›.",
        pills: ["Product management", "Eval design", "A/B testing"],
      },
      {
        title: "Forward-deployment strategist",
        blurb:
          "From the first client workshop to a live pilot. I embed with the customer's team, scope the engagement, and set what success means before the build starts.",
        pills: ["Customer discovery", "Engagement scoping", "Success criteria"],
      },
      {
        title: "Voice AI expert",
        blurb:
          "«30+ production agents» on ElevenLabs. Prompting architecture, model routing, latency budgets, bilingual support, and ‹speech discipline for small models›.",
        pills: ["ElevenLabs", "Prompt engineering", "Multi-LLM routing"],
      },
      {
        title: "Customer-facing operator",
        blurb:
          "SDR, then CSM, then PM. I've been the person on the call at every stage, and I still run the customer meetings for my agents.",
        pills: ["Discovery calls", "Demos", "Onboarding", "Escalations"],
      },
      {
        title: "Close to engineering",
        blurb:
          "I hand engineering exact contracts: ‹tool schemas, validation specs, release plans›. I review PRs for agent-behavior impact, and live call failures come back as clean, testable asks.",
        pills: ["Tool schemas", "Dev specs", "Release gates"],
      },
      {
        title: "Hands-on when needed",
        blurb:
          "I ship internal tools, transforms, and prototypes with Claude Code, and I set the tooling up for our whole prompting team. Enough to prototype, debug, and partner credibly with engineering, not to replace it.",
        pills: ["Claude Code", "SQL", "TypeScript (read and debug)"],
      },
    ],
  },

  experience: [
    {
      role: "Associate Product Manager, AI and Agent side",
      company: "VoxyHealth",
      time: "Aug 2025 - Present",
      blurb:
        "I own the prompting and evaluation side of healthcare voice agents end to end: discovery, prompt architecture, eval rubrics, phased go-lives, live pilot calls, and the specs engineering builds against. Shipped 30+ production agents on ElevenLabs across 6 enterprise clients, running about «3,500 calls a day» as a fleet. I also mentor a small prompting pod: one prompt engineer, two interns.",
      chips: ["30+ agents", "10-20% to 60-70% containment"],
    },
    {
      role: "Customer Success Manager",
      company: "Klenty",
      time: "Jan 2025 - Jul 2025",
      blurb:
        "Owned customer success for two AI products: SchedX, an inbound AI voice platform, and SDRx, an AI SDR for email, LinkedIn, and calling. Onboarded and implemented clients across four verticals and four CRMs (HubSpot, Salesforce, Zoho, Pipedrive); the main bridge between customers and the product and engineering teams.",
    },
    {
      role: "Sales Development Representative",
      company: "Klenty",
      time: "Oct 2023 - Dec 2024",
      blurb:
        "B2B SaaS sales, starting in my final year of college. Generated 15+ qualified leads and booked 8+ meetings a week, consistently above target. This is where the customer fluency that shapes how I scope and demo agents came from.",
    },
    {
      role: "LMS and Marketing Site Intern",
      company: "Aptitude Guru Hem",
      time: "Jun 2022 - Dec 2022",
      blurb:
        "Led a small team to ship the company's learning management system and marketing website end to end, working week to week with the founders.",
    },
  ],

  origin: {
    label: "Where it started",
    narrative: [
      "Loyola-ICAM College of Engineering and Technology, Chennai. B.E. Computer Science, 2020 to 2024, 8.63 CGPA.",
      "My first real software shipped here: a ten-month campus internship building the college's student portal, with a letter of appreciation at the end of it. Build a thing, watch real people use it, fix what they trip on. I've been chasing that loop ever since.",
      "College is also where the pattern set. I'm the one who organises the fest, hypes the room, and then goes quiet for a week to lock in and build the thing. Both gears, on purpose.",
    ],
    groups: [
      {
        label: "Built",
        items: [
          { title: "Campus student portal", detail: "ten-month in-campus internship, with a letter of appreciation" },
          { title: "LMS and marketing site", detail: "React and Node internship at Aptitude Guru Hem, leading a small team" },
          { title: "Workshops", detail: "taught web development at EICON and ran a React workshop" },
        ],
      },
      {
        label: "Led",
        items: [
          { title: "Youth Red Cross", detail: "President" },
          { title: "EICON", detail: "Creative Director" },
          { title: "Culturals", detail: "Cultural Rep, plus a first place in drama on the same stages" },
          { title: "Pattarai", detail: "member of the college builder club" },
        ],
      },
    ],
    receipts: {
      line: "The receipts are still public: the student portal, the workshop repos, all of it.",
      href: "https://github.com/AuskinImmanuel?tab=repositories",
      label: "Old repos on GitHub",
    },
  },

  openSource: {
    title: "voice-agent-prompting",
    blurb:
      "An open writeup of how I build production voice agents: the prompting architecture, model choice for low-latency telephony, writeups from live deployments, and six worked sample agents for the ElevenLabs platform.",
    link: "https://github.com/AuskinImmanuel/voice-agent-prompting",
    linkLabel: "Read it on GitHub",
  },

  writing: [],

  contact: {
    headline: "Building something with voice? Let's talk.",
    email: "auskinimmanuel@gmail.com",
    linkedin: "https://www.linkedin.com/in/auskin-immanuel/",
    github: "https://github.com/AuskinImmanuel",
  },
};

/**
 * All the copy lives here. Plain first person, no superlatives, no acceptance
 * rates. If a line sounds like a pitch deck, rewrite it.
 */

export const profile = {
  name: "Madhavam Shahi",
  role: "Founder, AltOps",
  location: "Miami, Florida",
  tagline: "I build software for the boring parts of running a business.",
  intro:
    "I'm an engineer in Miami. Right now I'm working on AltOps. Before that I was the only engineer at a promotional products distributor for about three years, spent two summers at CBRE, and started a couple of things that didn't work out.",
  email: "madhavam.p.shahi12@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/madhavamshahi/",
    github: "https://github.com/madhavamshahi",
    altops: "https://www.altops.co/",
  },
} as const;

/* ─────────────────────────── What I'm on now ─────────────────────────── */

export const venture = {
  name: "AltOps",
  role: "Founder",
  period: "2025 — now",
  headline: ["If a human can do it,", "AltOps can too."],
  body: [
    "You give AltOps repetitive work — in any app, browser, or document — and it does it the way a person would, by using the software. No API, no integration, no clean schema required.",
    "I started it because of a problem I kept running into. For three years I automated operations at a distributor, and every automation eventually broke on something small: an odd spreadsheet, a scanned PDF, an exception nobody had written down.",
  ],
  facts: [
    "That distributor is our first customer now. Their order entry went from about two hours a day to ten minutes.",
    "We've raised around $355K so far, and I'm part of the Telora fellowship.",
  ],
} as const;

/* ─────────────────────────── Work ─────────────────────────── */

export type Role = {
  company: string;
  title: string;
  period: string;
  year: string;
  summary: string;
  bullets: string[];
  tags: string[];
};

export const roles: Role[] = [
  {
    company: "AltOps",
    title: "Founder",
    period: "2025 — now",
    year: "'25",
    summary:
      "An AI employee with its own computer, for the operations work that never fit into normal software.",
    bullets: [
      "Our first customer is the distributor I used to work for. Their order entry went from about two hours a day to ten minutes.",
      "The agents also catch freight overcharges the team used to write off without noticing.",
    ],
    tags: ["Agents", "Computer use", "Operations"],
  },
  {
    company: "HF Custom Solutions",
    title: "Software Engineer",
    period: "Aug 2023 — Mar 2026",
    year: "'23",
    summary:
      "The only engineer at a promotional products distributor. I started as a sophomore and worked on and off for about three years.",
    bullets: [
      "I sat with the sales, purchasing, and accounting teams to find where their time was going, then built internal tools for it — inventory management, dashboards, supplier integrations, and order entry automation.",
      "The automations kept breaking the same way, which is where AltOps came from. HF is our first customer now.",
    ],
    tags: ["Internal tools", "Integrations", "Automation"],
  },
  {
    company: "CBRE",
    title: "Software Engineer Intern",
    period: "Summers 2024 & 2025",
    year: "'24",
    summary:
      "Two summers on internal software at a commercial real estate firm.",
    bullets: [
      "The first summer I worked on internal applications used across the company — backend services, APIs, cloud infrastructure, and integrations.",
      "The second summer I built AI document automation for their operations teams, which took a lot of manual review out of the process.",
    ],
    tags: ["Backend", "Cloud", "Document automation"],
  },
  {
    company: "Pathi Health",
    title: "Co-Founder",
    period: "Jul 2024 — May 2025",
    year: "'24",
    summary: "AI clinical trial matching, built with three other founders.",
    bullets: [
      "I built the platform end to end — HIPAA-compliant workflows, FHIR integrations with electronic health records, and multilingual voice agents.",
      "We raised a pre-seed, joined Health Wildcatters, and worked directly with hospitals, clinics, and patients. I left in May 2025 to work on something closer to what I knew.",
    ],
    tags: ["Healthtech", "FHIR / HIPAA", "Voice agents"],
  },
  {
    company: "Quipler",
    title: "Founder",
    period: "Aug 2022 — Jul 2023",
    year: "'22",
    summary:
      "A social network for college students — basically Reddit, but for individual classes.",
    bullets: [
      "Built with Flutter, Firebase, and Node. It grew to a few thousand students at my university and won some grant funding through TCU's accelerator.",
      "People liked using it, but retention dropped off and there wasn't a business in it, so we stopped.",
    ],
    tags: ["Consumer", "Flutter", "Shut it down"],
  },
  {
    company: "Gorin Systems",
    title: "Software Engineer",
    period: "Jun 2021 — Aug 2021",
    year: "'21",
    summary:
      "My first job. I was 17, still in high school in India, building Flutter apps remotely.",
    bullets: [
      "It was the first time I realised you could do this from anywhere, with a few cold emails and enough time to learn.",
    ],
    tags: ["First job", "Flutter"],
  },
];

/* ─────────────────────────── Projects ─────────────────────────── */

export type Project = {
  name: string;
  year: string;
  blurb: string;
  detail: string;
  href?: string;
  linkLabel?: string;
  tags: string[];
  accent: "ember" | "amber" | "gold";
};

export const projects: Project[] = [
  {
    name: "CoviCare",
    year: "2021",
    blurb: "Oxygen, plasma, and hospital beds during India's COVID shortage.",
    detail:
      "Information about oxygen cylinders, plasma donors, hospital beds, and medicines was scattered across Twitter and LinkedIn, so I collected and verified it by city in one place. It helped over a thousand people find supplies. It's off the Play Store now — my developer account went inactive.",
    href: "https://apkpure.com/covicare-get-help-at-your-ci/com.app.cohelp.app",
    linkLabel: "See it on APKPure",
    tags: ["Android", "Built in high school"],
    accent: "ember",
  },
  {
    name: "Meridian AI",
    year: "2025",
    blurb: "What viewers did before, during, and after watching a show.",
    detail:
      "Studios can see what a show earned, but not what led someone to it or where they went next. With the participant's consent, Meridian records screen activity and system audio during a session, then uses AI — OCR, accessibility data, and local transcription — to reconstruct the whole viewer journey across streaming, search, and social, redacted for privacy. That makes it much clearer where marketing spend is actually working. Paramount used it to study the customer journey across 11 titles.",
    href: "https://meridiananalytics.app/",
    linkLabel: "meridiananalytics.app",
    tags: ["AI", "Viewer journeys", "Used by Paramount"],
    accent: "amber",
  },
  {
    name: "FasterFlow",
    year: "2025",
    blurb: "An overlay for calls and lectures.",
    detail:
      "Live transcription, notes, and AI help on top of whatever app you're already in, so you don't have to switch windows. I grew it to over 2,700 users. AltOps grew out of this.",
    href: "https://www.fasterflow.co/",
    linkLabel: "fasterflow.co",
    tags: ["Desktop overlay", "Realtime transcription", "2,700+ users"],
    accent: "gold",
  },
  {
    name: "InterviewSure",
    year: "2025",
    blurb: "Checks for cheating in remote interviews, entirely on-device.",
    detail:
      "It looks for suspicious processes, extra input devices, and that sort of thing. Everything runs locally — nothing gets sent anywhere.",
    href: "https://www.interviewsure.com/",
    linkLabel: "interviewsure.com",
    tags: ["On-device", "No telemetry"],
    accent: "amber",
  },
  {
    name: "Safely / Behn",
    year: "2021",
    blurb: "One tap to share your live location with nearby police.",
    detail:
      "A women's safety app I built in high school. It won a hackathon and later became Behn, which means sister in Hindi.",
    href: "https://github.com/madhavam12/safely/",
    linkLabel: "Source on GitHub",
    tags: ["Android", "Hackathon"],
    accent: "ember",
  },
  {
    name: "Predic",
    year: "2024",
    blurb: "A small tool I wrote to predict short squeezes.",
    detail:
      "I traded with it myself and made a couple thousand dollars, which was probably mostly luck. Still the most fun thing I've built for myself.",
    href: "https://predic-sz1o.vercel.app/",
    linkLabel: "Try it",
    tags: ["Side project", "Real money"],
    accent: "gold",
  },
];

/* ─────────────────────────── Everything else ─────────────────────────── */

export type Award = { title: string; detail: string };

export const awards: Award[] = [
  {
    title: "Telora",
    detail:
      "A startup fellowship founded by a YC alum. They take under 1% of applicants. I'm in it now.",
  },
  {
    title: "Next Genius Scholarship",
    detail:
      "A full scholarship to study at TCU. Around 6% of applicants get it.",
  },
  {
    title: "Regents Scholar, University of California",
    detail:
      "Awarded to the top 1–2% of applicants. I couldn't afford the rest of the cost, so I didn't go.",
  },
  {
    title: "TCU CREATE Accelerator",
    detail:
      "Grant funding for Quipler, plus the chance to pitch investors and represent TCU at TechCrunch Disrupt.",
  },
  {
    title: "PeddieHacks",
    detail: "First place.",
  },
  {
    title: "Times NIE National Hackathon",
    detail: "Second runner-up, India.",
  },
];

export const education = [
  {
    school: "Texas Christian University",
    degree: "BS, Computer Science & Mathematics",
    period: "2022 — 2026",
  },
  {
    school: "Modern Academy, Lucknow",
    degree: "High school",
    period: "2018 — 2022",
  },
];

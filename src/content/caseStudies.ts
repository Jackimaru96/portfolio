import type { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "telegram-scheduler-bot",
    title: "Telegram bot + AI automation",
    category: "AI · AUTOMATION",
    summary:
      "An LLM-assisted Telegram bot that automates weekly lesson scheduling, reminders, and teacher payment for a coding and robotics programme — without a human compiling it by hand.",
    disclosure: "writeupOnly",
    result: "Serves 50+ teachers, used daily in production",
    tags: ["Telegram Bot API", "Google Calendar API", "Python", "LLM-assisted dev"],
    belongsTo: "young-maker-head-of-curriculum",
    highlights: [
      "Stateless, recompute-from-scratch design: lesson numbers and series membership are derived fresh from the live calendar every time, so nothing can quietly drift out of sync the way cached tracking state can.",
      "A three-tier fallback for locating a course's events — a purpose-built tag, then the native recurring-event link, then a title/time-pattern match — so it keeps working even for events edited by hand directly in Google Calendar.",
      "Every mutating action (creating, editing, deleting a lesson) runs through a shared Yes/No confirmation with a universal Cancel, and is restricted to an admin allowlist.",
      "A TEST_MODE flag transparently redirects every read and write to a disposable calendar during development, so new features can be built and exercised with zero risk to real production data.",
    ],
    body: [
      "The Young Maker runs coding and robotics lessons across several venues, each on its own Google Calendar. Every week, someone had to manually read each calendar, compile the upcoming schedule into a reminder message for teachers, and separately tally up hours taught to calculate payment — a repetitive, error-prone job that ate into time better spent on the actual programme.",
      "I built the first version myself: a Python bot (python-telegram-bot) that authenticates against Google Calendar via OAuth, reads across the programme's calendars, and posts a formatted weekly schedule and reminder straight into the team's group chat. It also reads the structured teacher/student details already embedded in each event's description to compute payment automatically and export it as a downloadable spreadsheet — turning a manual compilation job into a single command.",
      "From there I used AI coding agents to extend it well beyond a read-only reminder tool: full lifecycle management for recurring courses, one-off workshops, teacher substitutions, and lesson postponements, all driven by conversational flows in Telegram. The interesting engineering problem wasn't the AI integration itself — it was making a bot trusted to directly mutate a shared production calendar safe enough that people were actually willing to let it write.",
      "That's what the architecture is built around: nothing writes without an explicit confirmation step, every write is derived fresh from the calendar's current state rather than from stored assumptions, and a one-flag test mode made it possible to develop and demo new features against a throwaway calendar before ever touching production.",
    ],
  },
  {
    slug: "dsta-tasking-dashboard",
    title: "Enterprise tasking dashboard",
    category: "ENTERPRISE · PRODUCT",
    summary:
      "A v2 overhaul of an internal dashboard at DSTA that replaced one-by-one manual data entry with bulk spreadsheet upload for creating and editing tasking.",
    disclosure: "anonymized",
    result: "Cut tasking-entry time significantly for two major user groups",
    tags: ["Product discovery", "React", "Figma prototyping", "Stakeholder alignment"],
    belongsTo: "dsta-senior-product-engineer",
    highlights: [
      "Discovery interviews surfaced that users were already informally drafting their tasking in spreadsheets before re-keying it into the dashboard by hand, one item at a time.",
      "Designed and shipped bulk create/edit via Excel upload, validated against the existing data model before committing, so the dashboard's own rules couldn't be bypassed by the faster path.",
      "Validated the approach through Figma prototypes with both user groups before building, and aligned engineering, design, and business stakeholders on the final scope.",
    ],
    body: [
      "Two major user groups at DSTA relied on a dashboard to create and edit tasking — discrete units of operational work — but could only do so one item at a time through a form. At any real volume, that meant hours of repetitive, error-prone manual entry before anyone could act on the tasking itself.",
      "Discovery interviews made the fix obvious almost immediately: both groups were already drafting their tasking lists in spreadsheets as a planning step, then manually re-typing each row into the dashboard. The dashboard's input method was the bottleneck, not the underlying workflow.",
      "I led the v2 iteration that closed that gap: a bulk upload flow that accepts the same spreadsheet format users were already working in, validates every row against the dashboard's existing data rules before anything is committed, and supports bulk editing the same way. I validated the design with both user groups through Figma prototypes before a single line of the feature was built, then coordinated engineering, design, and business stakeholders through to shipping it.",
      "The result replaced a manual, item-by-item process with a single upload for both user groups, cutting the time spent on tasking entry substantially and letting people spend that time on the operational decisions the tasking was actually for.",
    ],
  },
  {
    slug: "makerpulse",
    title: "MakerPulse: ESP32 desk gadget",
    category: "HARDWARE · IOT",
    summary:
      "An open-source, 3D-printed desk companion that shows the time, weather, and next bus at a glance — designed, built, and turned into a kids' maker workshop.",
    disclosure: "full",
    result: "20+ workshops run, 40+ students through the programme since launch",
    tags: ["ESP32", "C++ / PlatformIO", "CAD", "FDM 3D printing"],
    repoUrl: "https://github.com/theyoungmaker/MakerPulseV2",
    belongsTo: "young-maker-head-of-curriculum",
    highlights: [
      "Four-screen interface — clock with focus timer, weather, live bus arrivals, and air quality/geomagnetic data — on a single ESP32-powered touchscreen.",
      "Custom-designed, 3D-printed enclosure (60 x 93 x 12.6mm), iterated through multiple FDM print cycles to fit the board and screen precisely.",
      "Open-source, browser-flashable firmware, so anyone can re-flash or extend it without a development environment.",
      "Became the basis of a hands-on workshop programme: launched October 2026, 20+ workshops run, 40+ students through it to date.",
    ],
    body: [
      "MakerPulse started as a personal itch: too many separate apps to check before leaving the desk just to know the time, the weather, and whether the next bus was worth running for. I built it as a small ESP32-powered touchscreen device that puts all three — plus air quality and geomagnetic activity — on one glanceable screen.",
      "I was the sole builder end to end: selecting the ESP32 and display hardware, writing the firmware in C++ with PlatformIO, and designing the enclosure in CAD, then iterating the 3D-printed case across several FDM print cycles until it fit the board and screen cleanly in a compact 60 x 93 x 12.6mm footprint. The firmware is open-source and flashable straight from the browser, so it doesn't require a development setup to use or extend.",
      "What made it worth more than a personal gadget was turning it into a workshop: at The Young Maker, MakerPulse became the vehicle for teaching kids the full arc of a maker project — electronics, firmware, and 3D design — in one hands-on session. Since launching in October 2026, we've run more than 20 workshops and taken over 40 students through the programme.",
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function caseStudiesFor(experienceId: string): CaseStudy[] {
  return caseStudies.filter((c) => c.belongsTo === experienceId);
}

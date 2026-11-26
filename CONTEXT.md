# Portfolio Site

Jack Chen's personal portfolio/job-hunt site. Presents his work as a small set of Case Studies, each tied to the job it happened under, alongside a compact career timeline.

## Language

**Case Study**:
A deep-dive page describing one project (the DSTA tasking dashboard, the Telegram scheduler bot, MakerPulse). Belongs to exactly one Experience Entry — the job it was built under — and carries a Disclosure level governing what can be named or shown.
_Avoid_: Project, portfolio piece

**Disclosure**:
The visibility rule for a Case Study's content, fixed per Case Study and not meant to change casually:
- `full` — real names, public repo link allowed (MakerPulse).
- `anonymized` — the employer is named, but internal specifics (org units, commands, rates, IDs) are not (DSTA dashboard: only "DSTA" is named, never MINDEF/DIS).
- `writeupOnly` — described in prose only, no public repo (Telegram bot).
_Avoid_: Confidentiality, visibility, privacy level

**Experience Entry**:
One job in the career timeline (DSTA Senior Product Engineer, DSTA Software Engineer, Head of Curriculum at The Young Maker). Zero or more Case Studies belong to it. Rendered with a 1-2 line impact summary.
_Avoid_: Role, position, job

**Education Entry**:
An academic program in the timeline (NUS Computer Science). A distinct type from Experience Entry: no Case Study ever belongs to an Education Entry, and it carries no "impact" framing — just institution, degree, and dates.
_Avoid_: Experience Entry (used for education), qualification

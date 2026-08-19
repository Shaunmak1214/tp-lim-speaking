# TP Lim Website — Content, Layout & Structure Plan

Sources: `references/tp-lim-website-discussion.txt` (the live discussion with TP — **supersedes on any conflict**) and `references/TP_Lim_Speaker_Website_Content_and_Build_Brief.docx` (guideline: approved V1 copy, page architecture, verification gates).

---

## 1. Positioning (reconciled)

**Who TP is on this site:** a **motivational speaker and master storyteller** for corporate audiences, whose authority comes from an unusually wide life: barrister-at-law (Lincoln's Inn), London advertising, 13 years as an Astro TV host, trilingual MC for Malaysia's top brands (Panasonic 8 years running, Great Eastern, banks, telcos, insurers), 11 years running the KL operations of Andy Lau's entertainment company, Executive Producer of HOWL (exec-produced by a group including Leonardo DiCaprio and the late Dr Jane Goodall), co-producer of The Vanishing Song with Oscar-winner Ruby Yang, and 17 years alongside Dr Jane Goodall through Roots & Shoots.

**Unifying idea (TP's own words):** *master storyteller* + *the art of delivery*. Delivery in the courtroom, on stage, on screen, and for the living world — different arenas, one craft. "Go wide, not deep": breadth of lived experience = more stories, more value for the audience.

**Tone:** energetic, cinematic, fun-but-credible. NOT the quiet nature-NGO editorial tone from the brief. Nature/sustainability is one dimension of the story, not the brand wrapper.

**Audience:** corporate event organisers and HR/leadership teams booking motivational openers, keynotes and conventions. Typical engagement: the high-energy 10-minute convention opener through to 45–60 min keynotes.

### Conflict resolutions (discussion supersedes)

| Topic | Brief says | Discussion says | Decision |
| --- | --- | --- | --- |
| Category | Keynote speaker · filmmaker · sustainability leader | "I am the motivational one"; whole site geared motivational | Motivational speaker & master storyteller first; film/sustainability as credibility dimensions |
| Brand feel | Calm, editorial, quietly authoritative; forest/cream/sage | Netflix / IMAX / Tony Robbins cinematic; capture instantly | Dark cinematic base, people-first photography, gold accent (bridges the brief's muted gold) |
| Homepage | Section catalogue (hero → credibility → keynote → …) | A story funnel: hero video → who is TP → colorful → progressively professional → funnel | Single-scroll storytelling funnel (Section 3) |
| Primary CTA | "Invite TP to Speak" + long enquiry form | "Schedule a call" + WhatsApp button; keep it simple; no date picker | **Schedule a Call** (primary) + **WhatsApp** everywhere; short form as secondary; date field optional |
| Old TV/MC footage | Not mentioned | Use it — nostalgic, low-res is charming — but keep it a SMALL section so he doesn't read as "entertainer" | "Where I Came From" compact retro section, hover/tap-to-play cards |
| Keynotes | 3 keynotes with full copy | "Speakers have 2–3 signature keynotes — I need that" | Keep the brief's 3 keynotes verbatim (Beyond Speed flagship, Beyond Compliance, Nature-Inspired Leadership) |
| Trilingual | Listed among credentials | Explicit selling point ("for the price of one, three languages") | Its own band on Home + repeated in Speaking/FAQ |

---

## 2. Visual direction

- **Cinematic dark base** (near-black, like the current build) — the "Netflix/IMAX" feel TP approved. Tony Robbins site is the explicit structural/visual reference ("definitely someone I want to emulate").
- **Accent: muted gold `#A98A55` → warmed up** (or the current ember orange re-tuned toward gold). One accent, locked sitewide. Nature sections may shift imagery (not palette) toward field/forest photography.
- **People in every image** — the discussion called out that the TR site "screams they care about people". Real photography of TP on stage, with audiences, with Dr Jane, with Andy Lau, in character.
- **Era treatment:** modern-era photos get a consistent cinematic grade; old Astro/MC footage stays raw and low-res on purpose ("very analog feeling") inside clearly retro-framed cards (CRT/tape vibe optional, subtle).
- Large editorial headlines, generous whitespace, short paragraphs (keep from brief). Serif only for reflective pull-quotes, if at all.
- Typography stays a strong grotesk (current Archivo system works); sentence-case cinematic headlines.

---

## 3. HOME — the storytelling funnel (build first)

Flow per the discussion: **splash video hook → who is TP → colorful story → progressively professional → proof → funnel.** The homepage previews; deeper pages carry detail.

1. **Splash hero (video).** Full-bleed 45–90s showreel (muted autoplay loop; stage energy, characters, film, Dr Jane moments). Headline candidates (pick with TP):
   - "Whatever the message, I'll make them feel it."
   - "Stories that move people. Energy that moves rooms."
   - "Master storyteller. Motivation that sticks."
   CTAs: **Schedule a Call** + WhatsApp icon-button; tertiary link "Explore keynotes".
2. **Credibility strip.** 25+ years on stage · 13 years Astro TV host · MC for Malaysia's top brands · English 中文 粤语 · Exec Producer, HOWL · ICF ACC · HRD Corp Accredited Trainer. (Compact 2-col grid on mobile.)
3. **"One speaker. Many lives." (intro hook).** Two or three sentences: barrister who never wanted the bar, ad man in London, TV host, brand MC, film exec, conservationist — and why that breadth matters to an audience. Sets up the timeline.
4. **The Timeline (signature scroll interaction).** Scroll-driven visual timeline where the imagery transitions era by era — the exact idea from the discussion ("while they scroll the different stories, your face changes to the previous images"):
   - 1999 · Astro Talent Quest Best Talent Award (judged by Wang Leehom) → 13 years of live TV
   - The MC years · 100+ characters for Malaysia's biggest brands (colorful peak — includes 1–2 playable retro clips)
   - The law chapter · Barrister-at-Law, Lincoln's Inn (precision, persuasion)
   - The film chapter · 11 years leading Andy Lau's KL operations
   - The living world · 17 years with Dr Jane Goodall, Roots & Shoots, HOWL, The Vanishing Song
   - Today · the speaker who brings all of it on stage
   Implementation: sticky image panel + scroll-swapped content (GSAP pin or scroll-driven CSS), colorful → professional as you descend.
5. **The Art of Delivery (theme anchor).** Four arenas, one craft: The Courtroom / The Stage / The Screen / The Wild. Each card: one line on what that arena taught him about delivery. This is the discussion's requested anchor concept.
6. **Signature keynotes (3 cards, brief copy verbatim).** Beyond Speed (flagship marker) · Beyond Compliance · Nature-Inspired Leadership. Each links to Speaking page anchor. CTA under the trio: Schedule a Call.
7. **Trilingual band.** "One speaker. Three languages." English · Mandarin · Cantonese — full keynotes in any of them, culture-fit delivery for Malaysian and regional audiences (CNY seasons, bilingual conventions).
8. **In the room (speaking style).** Short: laughter first, then the message lands; formats from 10-minute convention openers to 45–60 min keynotes, keynote + Q&A / workshop. Style copy adapted from brief ("Thought-provoking. Human. Practical.") with more energy.
9. **Proof.** Logo wall (Panasonic, Great Eastern, Astro, telcos/banks/insurers — pending permission classification) + the BAT Malaysia / Roots & Shoots testimonial (faithful wording, correctly attributed) + film proof cards (HOWL, The Vanishing Song).
10. **"Where I came from" (small, nostalgic).** 3–4 retro video cards, hover/tap to play the old character clips (Jack Sparrow-era MC work). Kept deliberately compact per the discussion — a wink, not the brand.
11. **Beyond the keynote (compact).** Workshops · Executive coaching (ICF ACC) · Leadership retreats · Sustainability conversations. Four small cards.
12. **Final CTA funnel.** "What change are you hoping to create?" → **Schedule a Call** + **WhatsApp** + short enquiry form: Name, Organisation, Email, Phone/WhatsApp (optional), What are you exploring (select), Event date (optional — "don't know yet" friendly), Tell us about your audience. No date picker.
13. **Footer.** TP Lim — Motivational Speaker · Master Storyteller (descriptor final wording TBC with TP) · nav · LinkedIn (https://www.linkedin.com/in/tplim789/) · English · Mandarin · Cantonese.

---

## 4. Supporting pages (phase 2, from the brief with tone adjusted)

- **Speaking** — the conversion workhorse: 3 keynotes long-form (brief copy), formats, customisation promise, speaker credibility ("Why TP"), style, cross-sell strip. Sticky enquiry CTA.
- **About** — story-led: law → London advertising → Astro/MC years → Andy Lau film chapter → Dr Jane & conservation → today. Ends with credentials strip (LLB Hons Bristol, Barrister-at-Law Lincoln's Inn, ICF ACC, HRD Corp, languages).
- **Proof** — experience bullets, categorised logo wall, both BAT testimonials (faithful wording, Roots & Shoots attribution), film proof, credentials, linked media coverage.
- **Projects** — HOWL feature, The Vanishing Song, Roots & Shoots engagement, "From Message to Movement" framework.
- **Insights** — launch only with 3–5 real pieces; four themes from brief.
- **FAQ + Enquire** — brief's Q&A (concise, accordion) + the short form; add "Can TP emcee/host our event?" as a question (his MC strength is a real differentiator the brief under-uses).

Nav: About · Speaking · Proof · Projects · Insights · FAQ, persistent **Schedule a Call** pill + WhatsApp. (Home = logo.)

---

## 5. Content rules & verification gate (from brief — still applies)

- "TP Lim" first reference per page, then "TP".
- Approved quote used exactly: "People rarely change because they are given more information. They change when a story enables them to see differently."
- Don't position TP as a technical AI expert.
- Keynote speaking stays visually/commercially dominant over film, coaching, projects.
- **Verify before launch:** Malaysia's highest-grossing film claim; award claims; HOWL credit wording; The Vanishing Song title/credits/status; every logo's relationship + permission; BAT testimonials attributed to Roots & Shoots unless TP-specific permission; Dr Jane stories/images licensed; no unlicensed celebrity imagery (Andy Lau/Dr Jane photos must be TP's own).
- Removed Andy Lau apprenticeship paragraph stays out unless TP reinstates.

## 6. Assets needed from TP

High priority: showreel (45–90s) or raw clips to cut one; hero stage photo; 3–6 stage/audience photos; editorial portrait; era photos (lawyer, London, Astro, MC characters, with Andy Lau, with Dr Jane); the old character videos (low-res fine); logo permissions list; WhatsApp number + call-scheduling link (Calendly or similar); enquiry destination email.

## 7. Open questions for TP

1. Headline + descriptor wording (motivational-first options above vs brief's "Technology is changing how we work…" which now fits the Beyond Speed keynote section better than the hero).
2. Which 3–5 retro clips is he happy to publish?
3. Scheduling tool preference (Calendly?) and WhatsApp number for the button.
4. Logo permissions: which brands can we actually show?
5. Does he want the brief's nature palette anywhere (e.g., Projects page) or full cinematic dark throughout?

## 8. Build sequence

1. Rework Home on the existing dark cinematic system (nav/CTA changes, hero video slot, timeline, art-of-delivery, keynotes, trilingual, proof, retro section, funnel) with placeholder assets clearly marked.
2. Speaking page (second priority — it closes the sale).
3. About / Proof / Projects / Insights / FAQ.
4. Swap in real assets as TP supplies them; run the verification gate; then launch checks (responsive, a11y, SEO, form).

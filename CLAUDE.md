# My Little House — Project Handover

This file is the handover doc for continuing this project in Claude Code (or any
local terminal AI session). It consolidates everything decided in the prior
session (Cowork/cloud) so work can resume here without re-litigating past
decisions. Read this in full before making changes.

## 1. What this is

A 5-page static HTML/CSS business website, built for the **AI Friendship
Design Hackathon 2026**, for a real childcare centre in Bintulu, Sarawak,
Malaysia. Built to be opened directly in a browser (no build step, no
framework, no server required except for the contact-page map embed and
Google Fonts, which need live internet).

Business identity conflict to be aware of:
- The **official registered name**, per the client's own written brief, is
  **"My Little House Childcare Centre."**
- The **site as built** uses **"My Little House Play School"** instead —
  this was an explicit user decision (see §4), matching the wordmark on the
  centre's real logo image (`assets/logo.png`).
- Location: No. 40, Grand Height, Jalan Johari Sunam, 87000 Bintulu,
  Sarawak. (Visible on the client's live Canva site; the client's own brief
  still flags the address as `[TO BE CONFIRMED WITH BENEFICIARY]` — treat as
  provisional until the business owner confirms it.)

## 2. File structure

```
index.html      Home
about.html      About Us
programs.html   Programs (now with real programme data + curriculum section)
gallery.html    Gallery (photo tiles are still placeholders — see §6)
contact.html    Contact (form, map, WhatsApp CTA)
styles.css      Shared design system — all colors/fonts/components as CSS variables
assets/logo.png The client's real logo (circular badge, house illustration)
```

Every page shares the same header/nav, footer, and `styles.css` — no
templating engine, so header/footer edits must be applied to all 5 files by
hand (or scripted with sed/python, which is how prior bulk edits were done).

## 3. Design system

**Palette — lavender / indigo / magenta** (the centre's own brand, from
Puan Siti's Canva site — adopted 2026-09-04 on the business owner's
request, replacing the earlier "Bornean Warmth" green/terracotta scheme).
Applied with proper contrast rather than a literal copy of the Canva
(which used black text on mid-purple). The CSS token **names are kept**
from the old palette, so the whole site re-skins from `:root` alone:

| Token | Hex | Role |
|---|---|---|
| `--green` | `#2B1392` | deep indigo — headings, dark panels, brand |
| `--terracotta` | `#CE2D7C` | magenta — primary CTA buttons |
| `--gold` | `#F0BE3C` | warm yellow — eyebrow tags, accents |
| `--cream` | `#ECE7FF` | lavender — page background |
| `--cream-soft` | `#E0D8F7` | soft lilac — alternating sections |
| `--charcoal` | `#241B3D` | plum-ink — body text, footer |

`.btn-whatsapp` stays WhatsApp green `#25D366` (brand colour, do not
change). The logo artwork is unchanged; its background is the lavender
`#E8E2FF`.

**Typography**: `ADLaM Display` for headings/display text (one weight
only), `Poppins` for body text and buttons. Both loaded via a Google Fonts
`@import` at the top of `styles.css` — **requires live internet** to render
correctly; falls back to a generic sans-serif otherwise (this was verified:
the build sandbox had no internet access and fonts silently fell back, but
the HTML/CSS is correct — just confirm it renders with ADLaM Display once
opened with real internet).

**CTA button classes**: `.btn-primary` (terracotta, filled), `.btn-secondary`
(outlined), `.btn-light` (cream, for dark backgrounds), `.btn-whatsapp`
(green `#25D366`, used only on the Contact page currently).

## 4. Key decisions made this session (and why)

A formal `MyLittleHouseWebsiteBrief.docx` was supplied partway through the
build (see §7 for its real facts). It recommended a different palette, a
different business name, and a different 5-page structure than what had
already been built and approved. The user was asked directly and chose to
**keep the original build's design** rather than switch:

| Decision point | Brief recommended | User chose | Status |
|---|---|---|---|
| Color palette | Purple `#2B1392` / lavender `#E8E2FF` / pink `#FF93DD` (retain existing brand) | Bornean Warmth (green/terracotta/gold) | **Kept Bornean Warmth** |
| Fonts | Nunito (headings) + Inter/Open Sans (body) | ADLaM Display + Poppins | **Kept ADLaM Display + Poppins** |
| Business name | "My Little House Childcare Centre" | "My Little House Play School" | **Kept Play School** |
| Page structure | Home / Programmes & Fees / About & Team / Parent Guide & FAQ / Contact & Visit | Home / About Us / Programs / Gallery / Contact | **Kept original 5 pages** |
| Content policy | Never invent realistic-sounding facts; tag unknowns `[TO BE CONFIRMED WITH BENEFICIARY]` | Initially: keep polished placeholder content, no tags | **Reversed after seeing real content — see below** |

**One reversal**: after the user shared screenshots of the client's actual
live Canva site (its real "We Provide" and "Our Curriculum" pages), they
changed their mind on programme content specifically and asked to replace
the fictional programmes with the real ones. That change **has already been
applied** to `index.html` and `programs.html` (see §6). The palette, fonts,
business name, and page structure were **not** revisited and remain as
built.

## 5. Real, confirmed business facts (safe to use as fact)

From the client's own brief document and their live Canva site — these are
genuinely confirmed, not invented:

- **Age range served**: 3 months to 9 years old.
- **Infant daycare**: ages 3–18 months. Confirmed staff ratio **1 teacher :
  3 babies**.
- **Toddler Playschool**: ages 18–24 months.
- **Preschool**: ages 3–6, split into two groups (3–4 years and 5–6 years).
- **Transit care**: ages 7–9 (the live site says 7–9; the brief separately
  says 5–9 with before/after-school options — the site build used **7–9**
  since it came directly off the client's own live page; flag this
  discrepancy to the client rather than guessing).
- **Inclusive Programme**: early-intervention activities for children
  diagnosed with mild autism, speech delay, and similar developmental
  needs. **Do not describe as therapy or claim outcomes** — the brief is
  explicit about this, and the current copy on `programs.html` already
  respects it ("Suitability is discussed individually... we do not
  guarantee specific outcomes").
- **Curriculum philosophy**: play-based learning, built on four elements —
  self-direction, unstructured exploration, fun, process-oriented. Already
  written into `programs.html`.
- **Room-quality standards** (from the client's own curriculum page):
  soothing environment, defined areas, secure open spaces, personal
  touches, simple/interesting materials, child-size furniture, and (not
  yet added to the site) *small physical challenges* — consider adding this
  7th item to the "What we look for in every room" grid in `programs.html`
  for completeness.
- **Founder**: Puan Siti Fatihah Binti Mohamad — bachelor's degree in Early
  Childhood Education, 22 years of experience since 2004. **Not yet added
  to `about.html`** — the About page currently has a generic, unattributed
  founding story instead of this real, named founder. This is a clear
  opportunity to improve accuracy without touching any of the locked-in
  design decisions.
- **Staff qualifications** (per brief, not yet matched to named individuals):
  Diploma in Early Childhood Education, PERMATA childcare training, training
  under As Sofiyyah Academy, and a certificate in special-needs training.
  The brief is explicit: confirm which credential belongs to which named
  staff member before publishing anything specific.

## 6. What's still placeholder / needs real data before launch

These are intentionally generic right now and should be swapped for real
information before this goes live (the user chose NOT to tag these
visually with `[TO BE CONFIRMED]` markers — that was a deliberate style
choice for the hackathon, not an oversight):

- **Phone / WhatsApp number**: placeholder `60100000000` used in
  `wa.me` links on `contact.html` (nav CTA + "Chat on WhatsApp" button) and
  the footer. Search-and-replace this string across all files once the
  client gives a real number.
- **Email**: placeholder `hello@mylittlehouseplayschool.my` used in the
  contact form's `mailto:` action.
- **Operating hours**: confirmed by the business owner (2026-09-04) as
  **Mon–Fri 6:30am–6:00pm, Sat 7:00am–1:00pm** (closed Sunday). Applied
  site-wide: visible text on every page, `openingHoursSpecification` in the
  JSON-LD on all 5 pages, `llms.txt`, and the contact-page meta/OG
  descriptions.
- **Fees**: `programs.html` has a "Curious about fees?" panel with an
  explicit placeholder note; no real figures anywhere on the site.
- **Daily schedule**: the sample timetable on `programs.html` is generic,
  not tied to the real programmes' actual routines.
- **Gallery photos**: `gallery.html` uses solid-color tiles with captions
  (e.g. "Gawai Celebration," "Art & Craft") instead of real photographs.
  The brief has a **safeguarding requirement**: written parental consent is
  required before publishing any identifiable photo of a child. Do not
  swap in real photos without confirming consent status first.
- **Testimonial quote** on `index.html` ("Every child who walks through our
  little house...") is attributed generically to "My Little House Play
  School," not a real parent — the brief says approved testimonials are
  `[TO BE CONFIRMED WITH BENEFICIARY]`.
- **Safety/hygiene/licensing section** on `about.html` has an explicit
  placeholder note. The brief's own guidance: *"Hide this section if no
  approved proof is available; never fill it with generic badges."*
  Consider removing it rather than leaving generic claims, once real
  content still isn't available.
- **Contact form**: currently a `mailto:` fallback with no backend, no
  validation feedback beyond browser defaults, and no spam protection. The
  brief recommends a real form endpoint plus Cloudflare Turnstile (or
  equivalent) before launch.
- **CTA wording is inconsistent** ("Book a Visit," "Enroll Now," "Contact"
  are all used in different places). The brief recommends one consistent
  primary CTA everywhere — "Check Availability on WhatsApp" — with a
  pre-filled, editable message:
  > Hello My Little House. I would like to check programme availability.
  > My child is [age], I am interested in [programme/schedule], and my
  > preferred start date is [date].
  This was never adopted; worth considering as a low-risk, high-value
  improvement since it doesn't conflict with any locked-in design decision.

## 7. Source brief

The client supplied a formal `MyLittleHouseWebsiteBrief.docx` (a "Website
Requirements Document," prepared from beneficiary interview responses). It
lived only in the prior cloud session's uploads and is **not included in
this folder** — if you need the full original document (it also contains a
priority-questions list for the beneficiary, an accessibility checklist,
and AI-image-generation prompts for decorative assets), ask the user to
re-attach it. Everything factually useful from it has already been
extracted into §5 and §6 above.

## 8. Suggested next steps

1. Get the real business owner to confirm: phone/WhatsApp, email, address,
   hours, and fees. Search-and-replace placeholders once confirmed.
2. Decide whether to add the founder's real bio (§5) to `about.html` —
   currently a clear gap between what's known and what's shown.
3. Get real photos with documented parental consent before touching
   `gallery.html`.
4. Consider consolidating CTA wording site-wide per §6.
5. Confirm ADLaM Display renders as intended once viewed with normal
   internet access (untested in the original sandboxed build environment).
6. Re-run the div-balance sanity check after any bulk edit:
   `grep -c '<div' file.html` should equal `grep -c '</div>' file.html`
   for every page (this was how the file was validated during the build).

## 9. Changelog — Claude Code session, 2026-09-03

This folder is now a **git repo** (`git log` for the full history, one
commit per change so any step can be rolled back). Commits after baseline:

1. **Real facility photos + carousel.** Seven child-free photos cropped
   from the centre's own Canva collages live in `assets/photos/`
   (playroom, playkitchen, reading, toyshelf, sensory, kindyshelf,
   exterior). A reusable `.carousel` component (CSS in `styles.css`, JS
   inline in `index.html` + `gallery.html`) shows **one photo at a time**
   — prev/next arrows, dots, and tap-the-photo-to-advance.
   - `gallery.html`: the 3 grids of placeholder colour tiles are gone,
     replaced by one 7-photo carousel. Note left in place that photos
     **with children** still need written parental consent (safeguarding
     rule from §6 upheld — none were used).
   - `index.html`: "A Peek Inside" tiles → 4-photo carousel.
2. **Real WhatsApp / phone number.** Placeholder `60100000000` →
   **`+60 14-887 9930`** (matches the number on the centre's signboard),
   contact person **Ms Siti**. Applied to every `wa.me` link (with a
   pre-filled enquiry message), the contact-page phone block, the Home
   info-strip, and the footer Contact column on all 5 pages.
   Still placeholder: the `mailto:` email and the enquiry form backend.
3. **Mobile/tablet hamburger fixed** (`<=860px` only — desktop nav
   unchanged). Full-width dropdown rows with dividers + shadow, bigger tap
   targets, `aria-expanded` toggling, hamburger swaps to an X when open.
   `<=480px` hides the nav CTA button so it can't collide with the brand.
4. **SEO / AEO / GEO.** Per-page `<title>` + meta description rewritten
   keyword-first; canonical, Open Graph, Twitter, `theme-color`, and
   geo/ICBM tags added to every page. JSON-LD `@graph` on every page:
   `ChildCare`/`LocalBusiness` (NAP, geo, hours, area served, age
   audience), `WebSite`, `WebPage`, `BreadcrumbList`. `programs.html` also
   carries a visible **FAQ accordion** (`<details>`) with matching
   `FAQPage` schema. Added `robots.txt` (AI crawlers explicitly allowed)
   and `sitemap.xml`. Pages now wrapped in `<main>`; `lang="en-MY"`.

### ⚠ Placeholder domain — must change before launch

Every canonical / `og:url` / JSON-LD `@id` / sitemap / robots URL uses
**`https://mylittlehouseplayschool.my`** as a stand-in. Search-and-replace
this string across `*.html`, `robots.txt` and `sitemap.xml` with the real
deployed domain, or the OG image and canonical tags will point nowhere.
The geo coordinates (`3.1701, 113.0417`) are an approximate Bintulu
centre point — replace with the exact lat/long of No. 40 Grand Height.

### Fees — now published on `programs.html` (2026-09-04, on user's say-so)

The client's live Canva site (pages 10–11) has a dedicated fee section.
Verified figures, now shown in the "Fees" section on `programs.html`
(`#fees`) and summarised in a new FAQ entry + `FAQPage` schema:

- **Monthly:** ages 2 & below — full day RM650 / half day RM450;
  ages 2 & above — full day RM595 / half day RM400.
- **One-time on enrolment:** registration RM150 (first time only),
  miscellaneous RM180, food RM220 per half-year.

Still unconfirmed with the owner (copy hedges accordingly): whether "misc"
is one-time or recurring, whether food is compulsory, how transit care and
the inclusive programme are priced, and any deposit / sibling discount.

The 2026 public-holiday closure list from Canva page 12 (first-half dates
only — the source is labelled "1st term 2026") is now the "2026 school
holidays" section on `programs.html` (`#holidays`).

### SEO / AEO / GEO — second pass (2026-09-04)

- `robots.txt` expanded to explicitly allow the major AI/answer-engine
  crawlers (GPTBot, ClaudeBot, anthropic-ai, PerplexityBot, CCBot,
  Google-Extended, Applebot-Extended, Amazonbot, Bytespider,
  Meta-ExternalAgent, cohere-ai, Diffbot, YouBot, PetalBot, …).
- New `llms.txt` at the site root — a plain-text fact sheet (NAP,
  programmes, fees, page map) for LLM retrieval.
- New branded `404.html` (GitHub Pages serves it for unknown paths;
  uses absolute `/SME-website/…` asset paths).
- `robots` meta upgraded to
  `index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1`.
- JSON-LD business node (all 5 pages) gained `hasMap`, `numberOfEmployees`,
  `employee[]` (the six named staff) and `hasOfferCatalog` (the five
  programmes as `Service` offers). `programs.html` also carries a
  standalone `OfferCatalog` node with the four monthly-fee `Offer`s
  (RM 400–650, `UnitPriceSpecification`).

## 10. Changelog — Claude Code session, 2026-09-03 (evening)

Source material from `Desktop/Sarawak-hackathon/Sarawak-hackathon.zip`
(SSM cert, trade licence, signboard photo, Canva "Our Team" collages)
was reviewed. Confirmed: phone **+60 14-887 9930** (signboard + licence),
registered name **My Little House Playschool Childcare Centre (Taska
Rumah Kecilku)**, operating since **2011**. Corrected: postcode
**87000 → 97000** across all files (Bintulu is 97000; 87000 was wrong).
Street address still unconfirmed — cert, licence and Canva site disagree.

1. **Placeholders removed from visible content.** The `badge-note`
   "Placeholder…" boxes on `about.html` (Health & Safety), `programs.html`
   (schedule, fees) and `contact.html` (form) are gone. `gallery.html`
   owner-facing "add your Instagram link" copy rewritten for visitors.
2. **About page — real people.** New founder feature (Puan Siti Fatihah
   Binti Mohamad, ECE degree, 22 yrs since 2004) with a cropped photo
   (`assets/team/founder.jpg`). New "Our team" section: co-founder Encik
   Sulaiman Bin Suhaili + 4 named teachers with real credentials, as
   monogram cards (`.avatar` in `styles.css`). Health & Safety rewritten
   with evidenced facts only: 1:3 infant ratio, smoke-free premises,
   on-site first-aid kit, documented sick-child policy. CCTV / "daily
   health checks" claims dropped (not evidenced).
3. **Contact form works.** No backend — on submit it composes a
   pre-filled `wa.me` message to Ms Siti and opens it. Placeholder email
   `hello@…` removed from the form, the info panel and all JSON-LD.
4. **CTA unified** to "Book a Visit" (nav, hero-end, footer). The second
   desktop nav button ("Enroll Now" / "Contact") was removed.
5. **Housekeeping.** Deleted an accidental nested duplicate copy of the
   whole site. Added `README.md` and `.nojekyll` (GitHub Pages).
6. JSON-LD business node gains `legalName`, `foundingDate`, `founder`.

Still placeholder: the `mylittlehouseplayschool.my` domain in canonical /
OG / sitemap URLs, the approximate geo coordinates, the street address,
operating hours, and fees.

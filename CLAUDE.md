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

## 3. Design system (locked in, do not silently change)

**Palette — "Bornean Warmth"** (chosen deliberately over the client's
existing purple/lavender/pink identity — see §5 for why):

| Token | Hex | Use |
|---|---|---|
| `--green` | `#1F4D38` | primary brand color, headings |
| `--terracotta` | `#C1502E` | primary CTA buttons |
| `--gold` | `#E8A33D` | accents, eyebrow tags |
| `--cream` | `#F7EFE1` | page background |
| `--charcoal` | `#2B2420` | body text, footer bg |

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
- **Operating hours**: shown as "Mon–Fri, 7:30am – 6:00pm" — plausible but
  unconfirmed.
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

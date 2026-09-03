# My Little House Play School — Website

A 5-page static website for **My Little House Play School** (officially
*My Little House Playschool Childcare Centre / Taska Rumah Kecilku*), a
licensed childcare centre in Bintulu, Sarawak. Built for the Sarawak SME
Website Hackathon, 3–4 September 2026.

## Run it

No build step, no dependencies. Either:

- **Double-click `index.html`** to open it in a browser, or
- Serve the folder: `python -m http.server 8000` then open
  <http://localhost:8000>

Live internet is needed for two things to render fully: Google Fonts
(ADLaM Display + Poppins) and the Google Maps embed on the Contact page.
Everything else works offline.

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `about.html` | About Us — story, founder, team, health & safety |
| `programs.html` | Programmes, curriculum, sample day, FAQ |
| `gallery.html` | Photo gallery (facilities only) |
| `contact.html` | Contact — enquiry form (composes a WhatsApp message), map |

`styles.css` holds the shared design system. Header, footer and nav markup
are copied into each page (no templating), so edits to those must be made
in all five files.

## Design system — "Bornean Warmth"

| Token | Hex | Use |
|---|---|---|
| `--green` | `#1F4D38` | brand colour, headings |
| `--terracotta` | `#C1502E` | primary buttons |
| `--gold` | `#E8A33D` | accents, eyebrow tags |
| `--cream` | `#F7EFE1` | page background |
| `--charcoal` | `#2B2420` | body text, footer |

Type: `ADLaM Display` (headings) + `Poppins` (body).

## Still to confirm with the business owner before launch

- **Street address.** The registration certificate, the trade licence and
  the centre's Canva site each give a different address; the site currently
  shows "No. 40, Grand Height, Jalan Johari Sunam, 97000 Bintulu". The
  postcode (97000) and phone (+60 14-887 9930, Ms Siti) are confirmed.
- **Operating hours** — shown as Mon–Fri 7:30am–6:00pm.
- **Fees** — real figures exist but are intentionally kept off the site;
  the fees section routes people to WhatsApp.
- **Map pin / geo coordinates** — currently an approximate Bintulu point.
- **Deployed domain** — canonical / Open Graph / sitemap URLs use
  `https://mylittlehouseplayschool.my` as a placeholder; search-and-replace
  with the real URL across `*.html`, `robots.txt` and `sitemap.xml`.
- **Transit-care age range** — site says 7–9 (from the centre's own page);
  the brief separately says 5–9.
- Staff names, credentials and the founder photo come from the client's own
  "Our Team" material; confirm they're happy to publish each one.

# Museums 101 style guide

Source of truth for **[museums101.com](https://museums101.com/)** — visual identity, navigation, voice, SEO, and cross-domain branding for the GitHub Pages book site.

This guide also defines how **museums101.com** fits the four-domain rebrand alongside **museumplanning.com**, **museum-experiences.com**, and **markwalhimer.com**.

---

## 1) Ecosystem — four domains, one practice

### Domain roles (do not drift)

| Domain | Brand line | Visual lane | Primary CTA |
|--------|------------|-------------|-------------|
| **museumplanning.com** | Museum Planning LLC | Dark navy + gold (`#111C27` / `#C9A84C`) · Lato body | Start a Conversation |
| **museum-experiences.com** | Designing Museum Experiences | Align with consulting palette; exhibition/experience copy | Companion text + consulting cross-link |
| **museums101.com** | Museums 101 | **Light reading room** (home, resources) + **dark practitioner** (toolbox) | Buy First Edition / Free Resources |
| **markwalhimer.com** | Mark Walhimer · Studio | Artwork / installation identity (Walhimer Studio) | View work · contact for art |

**museumplanner.org** remains the **public writing hub** (essays, archive, categories). Book sites link to it; do not duplicate the full archive on museums101.com.

### Rebrand principles (all four domains)

1. **One job per domain** — consulting, book, experiences book, art. No consulting checkout on museums101.com.
2. **Shared typography family** — **Playfair Display** (headlines), **DM Sans** (UI/body), **DM Mono** (labels/meta) across the network where possible.
3. **Consistent ecosystem footer** — every museums101.com page links to Museum Planner, Consulting, Experiences, Art, Contact (see §6).
4. **GitHub Pages canonical URLs** — apex domains without `www` (`https://museums101.com/`, `https://museumplanning.com/`, etc.).
5. **Hire Mark →** always targets **museumplanning.com**, never museums101.com or markwalhimer.com.
6. **No WordPress URLs** in new copy after cutover — use GitHub-hosted paths or museumplanner.org.

### Cross-domain accent alignment

| Site | Accent | Notes |
|------|--------|-------|
| museumplanning.com | Gold `#C9A84C` | See `website-2.0/STYLE-GUIDE.md` |
| museums101.com (light pages) | Book red `#8c2018` | Publisher / editorial accent |
| museums101.com (toolbox) | Copper `#C9A84C` | Matches consulting gold — practitioner tools |
| museum-experiences.com | Gold / copper family | Keep harmonized with consulting |
| markwalhimer.com | Studio palette | Independent art identity; footer may link to consulting |

---

## 2) Site architecture (this repo)

| Layer | Files | Theme |
|-------|-------|-------|
| **Book landing** | `index.html` | Light — white/off-white, red accent |
| **Toolbox** | `museum-toolbox/index.html` | Dark — navy, cream text, copper accent |
| **Resources** | `museum-resources/index.html` | Light — matches landing tokens |
| **Legacy blog** | `blog/index.html` | Redirect only — no indexable content |

Internal paths use **trailing-slash directories** (`/museum-toolbox/`, not `.html` in public URLs).

Shared assets for toolbox masthead only:

- `assets/site-nav.css`
- `assets/site-nav.js`

---

## 3) Visual identity — light pages (`index.html`, `museum-resources/`)

The book landing is a **light reading room**: white field, warm grays, book-red accent. Distinct from the dark consulting site but in the same serif editorial family.

### Color tokens (`:root`)

| Token | Hex | Role |
|-------|-----|------|
| `--white` | `#ffffff` | Page background |
| `--off` | `#f8f6f3` | Cards, panels |
| `--pale` | `#f0ece6` | Secondary surfaces |
| `--rule` | `#ddd8d0` | Borders, nav hairline |
| `--ink` | `#14120f` | Primary text |
| `--mid` | `#5a5248` | Secondary text |
| `--muted` | `#9a9088` | Meta, footer |
| `--red` | `#8c2018` | Primary accent, CTA, emphasis |
| `--red-dk` | `#6e180f` | CTA hover |

Do **not** use consulting gold on light landing pages — red is the Museums 101 book accent.

### Typography

| Role | Font | Usage |
|------|------|--------|
| Display | **Playfair Display** | H1, H2, book spine, section titles |
| Body / UI | **DM Sans** | Body copy, nav, buttons |
| Labels / logo strip | **DM Mono** | Nav wordmark, section tags, pub strip, footer brand |

Load from Google Fonts (see `index.html` `<head>`).

### Navigation (light pages)

Sticky top bar, 56px height, white background, bottom rule.

**Logo:** `Museums 101` in DM Mono uppercase + optional badge `2nd Ed. Forthcoming` (red outline pill).

**Links (order):**

1. Editions → `#editions`
2. Contents → `#contents`
3. Resources → `#resources`
4. Museum Planner → `https://museumplanner.org`
5. **Hire Mark →** → `https://museumplanning.com` (red filled CTA)

Sub-pages (`museum-resources/`) may simplify nav but must link home (`/`) and retain Hire Mark →.

### Buttons

| Class | Use |
|-------|-----|
| `.btn-red` | Primary — Buy First Edition, main actions |
| `.btn-outline` | Secondary — scroll anchors, Free Resources |
| `.btn-red-outline` | On dark inset sections (second edition block) |
| `.btn-white` | On red CTA band at page bottom |

### Key sections (landing)

Hero → Editions (book spines) → Contents (numbered chapters) → Second edition → Comparison table → Resources → Ecosystem grid → CTA band → Footer.

**Ecosystem grid** must reference all practice domains:

- Museum Planning LLC → museumplanning.com
- Museum Planner → museumplanner.org
- Designing Museum Experiences → museum-experiences.com
- Museum Courses → museumcourses.com

---

## 4) Visual identity — dark toolbox (`museum-toolbox/`)

The toolbox is a **practitioner workspace**: dark navy, cream type, copper accent — visually aligned with consulting tools while remaining under the Museums 101 brand.

### Color tokens (`:root`)

| Token | Hex | Role |
|-------|-----|------|
| `--navy` | `#0D1117` | Page background |
| `--navy-2` | `#141B26` | Sections |
| `--navy-card` | `#19212E` | Cards |
| `--copper` | `#C9A84C` | Accent (matches consulting gold) |
| `--copper-lt` | `#DFC27A` | Hover |
| `--white` | `#F5F1E8` | Primary text |
| `--muted` | `rgba(245,241,232,0.28)` | Meta |

### Toolbox masthead

Use shared `assets/site-nav.css` + `site-nav.js`. Logo text: **Museums** + copper **101** → links to `/`.

Nav: Editions · Contents · Resources · Museum Planner · **Hire Mark →**

Breadcrumb: `Museums 101 › Museum Toolbox`

Template request actions use `mailto:mark@museumplanning.com?subject=Museum Toolbox: …`.

---

## 5) Voice and tone

- **Foundational, not salesy** — what a museum is, how it works, what public trust requires.
- **Authoritative practitioner** — written for founders, board members, staff, students.
- **First edition / second edition** — always distinguish: first edition available; second edition forthcoming (operating environment, AI, demographics, funding).
- **Consulting is separate** — Museums 101 teaches; Museum Planning LLC executes. CTA language: “Planning a museum? Let's talk.” → museumplanning.com.

Avoid startup jargon, emoji, and rainbow UI accents.

---

## 6) Footer standard (required on every page)

```html
<div class="footer-brand">Museums101.com · Museum Planning LLC · © 2026</div>
<div class="footer-links">
  <a href="https://museumplanner.org">Museum Planner</a>
  <a href="https://museumplanning.com">Consulting</a>
  <a href="https://museum-experiences.com">Experiences</a>
  <a href="https://markwalhimer.com">Art</a>
  <a href="mailto:mark@museumplanning.com">Contact</a>
</div>
```

Toolbox may add social links (Facebook, X, LinkedIn, Medium) — keep footer brand line consistent.

---

## 7) SEO head tags (every public page)

Required on each indexable HTML page:

| Tag | Rule |
|-----|------|
| `<title>` | `Museums 101 — [page topic] \| Mark Walhimer` |
| `meta description` | One sentence; include book + relevant keywords naturally |
| `meta keywords` | Maintain shared list; add page-specific terms sparingly |
| `link rel="canonical"` | `https://museums101.com/` or full path on that host |
| Open Graph | `og:title`, `og:description`, `og:url`, `og:type`, `og:site_name` |
| Twitter card | `summary` minimum |
| JSON-LD | `Book` on home; add `WebPage` or `CollectionPage` on sub-pages as appropriate |

**Canonical host:** `https://museums101.com` — never `www`, never WordPress, never `github.io` in canonicals.

Shared keyword set (book + planning):

`museum planning`, `museum feasibility studies`, `museum master planning`, `city cultural planning`, `interactive museum exhibition design`, `immersive museum experiences`, `museum strategic planning`, `museum consultant`, `starting a museum`, `museum governance`, `museum feasibility study`, `museum board members`, `nonprofit museum`, `museum collections management`, `museum exhibition design`, `interpretive planning`, `Mark Walhimer`, `Museums 101 book`

Consulting service terms in JSON-LD may reference `museumplanning.com` via `ProfessionalService` — do not rewrite the book site as a consulting landing page.

---

## 8) Link conventions

| Link type | Pattern |
|-----------|---------|
| Same site | Root-relative: `/`, `/museum-toolbox/`, `/#contents` |
| Consulting | `https://museumplanning.com/…` |
| Experiences | `https://museum-experiences.com` |
| Art | `https://markwalhimer.com` |
| Writing / archive | `https://museumplanner.org/…` |
| Buy book | Amazon affiliate `https://amzn.to/2TxIDfN` |
| Contact | `mailto:mark@museumplanning.com` or museumplanning.com contact page |

After WordPress retirement, **do not link** to `/blog/` content on museums101.com except the redirect stub.

---

## 9) Spacing and responsive

- Desktop horizontal padding: **56px** (nav, sections) — toolbox may use **40px** where already established
- Mobile: **24px** padding; collapse nav per `site-nav.js` on toolbox
- Section rhythm: generous vertical padding (60–88px); editorial, not cramped
- Book spine hero: scale down on narrow viewports (see `@media` in `index.html`)

---

## 10) New page checklist

- [ ] Tokens from §3 (light) or §4 (dark) — no new accent colors
- [ ] Nav + footer per §6
- [ ] Canonical + OG tags per §7
- [ ] Entry in `sitemap.xml`
- [ ] Cross-links to sibling domains where relevant
- [ ] Hire Mark → points to museumplanning.com
- [ ] No duplicate consulting copy that belongs on museumplanning.com or museum-experiences.com

---

## 11) Related repositories

| Repo | Domain | Style guide |
|------|--------|-------------|
| `Museum-Planning-LLC/website-2.0` | museumplanning.com | `STYLE-GUIDE.md` in that repo |
| `Museum-Planning-LLC/Designing-Museum-Experiences` | museum-experiences.com | Align with consulting; document there when expanded |
| `Museum-Planning-LLC/museums-101` | museums101.com | **this file** |
| `walhimer/walhimer.github.io` | markwalhimer.com | Studio / artwork — separate creative identity |
| `Museum-Planning-LLC/museum-planner-2.0` | museumplanner.org | `STYLE-GUIDE.md` — writing hub |

When the network rebrand changes consulting or art tokens, update **this file §1 and §6** so footer and ecosystem grids stay synchronized.

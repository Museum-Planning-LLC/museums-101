# museums-101

Source for **[museums101.com](https://museums101.com/)** — the book site for *Museums 101* by Mark Walhimer (Rowman & Littlefield / AAM Press). Static HTML on **GitHub Pages**, replacing the former WordPress install.

**Repo:** [`Museum-Planning-LLC/museums-101`](https://github.com/Museum-Planning-LLC/museums-101)  
**Git remote:** `git@github-museumplanning:Museum-Planning-LLC/museums-101.git`

---

## Four-domain brand architecture

Museum Planning LLC is consolidating public web presence onto **GitHub Pages** with a consistent cross-link network. Each domain has one job — do not blur roles across sites.

| Domain | Repo | Role | Audience |
|--------|------|------|----------|
| **[museumplanning.com](https://museumplanning.com/)** | [`website-2.0`](https://github.com/Museum-Planning-LLC/website-2.0) | **Consulting** — feasibility, master planning, strategic planning, city cultural planning, hire Mark | Clients, municipalities, institutions |
| **[museum-experiences.com](https://museum-experiences.com/)** | [`Designing-Museum-Experiences`](https://github.com/Museum-Planning-LLC/Designing-Museum-Experiences) | **Consulting / companion text** — interactive exhibition design, immersive museum experiences | Exhibition teams, experience designers |
| **[museums101.com](https://museums101.com/)** | **this repo** | **Book** — *Museums 101*, toolbox, resources, second edition | Founders, boards, staff, students |
| **[markwalhimer.com](https://markwalhimer.com/)** | [`walhimer.github.io`](https://github.com/walhimer/walhimer.github.io) | **Artwork** — studio practice, installations, creative work | Collectors, curators, art audience |

**Intellectual home (writing, archive):** [museumplanner.org](https://museumplanner.org) — [`museum-planner-2.0`](https://github.com/Museum-Planning-LLC/museum-planner-2.0). Book sites link out; long-form writing stays on Museum Planner until migrated.

### Cross-site footer standard (all four domains + book pages)

Every Museums 101 page footer should include:

- Museum Planner → `https://museumplanner.org`
- Consulting → `https://museumplanning.com`
- Experiences → `https://museum-experiences.com`
- Art → `https://markwalhimer.com`
- Contact → `mailto:mark@museumplanning.com`

Primary CTA for **hire / consulting** always points to **museumplanning.com**, not museums101.com.

---

## Site map (this repo)

| Path | File | URL |
|------|------|-----|
| Home | `index.html` | `https://museums101.com/` |
| Museum Toolbox | `museum-toolbox/index.html` | `https://museums101.com/museum-toolbox/` |
| Resources library | `museum-resources/index.html` | `https://museums101.com/museum-resources/` |
| Blog (legacy redirect) | `blog/index.html` | `https://museums101.com/blog/` → Museum Planner archive |

Supporting files: `CNAME`, `robots.txt`, `sitemap.xml`, `assets/site-nav.css`, `assets/site-nav.js`.

---

## Documentation

| File | Purpose |
|------|---------|
| [STYLE-GUIDE.md](./STYLE-GUIDE.md) | Visual identity, navigation, typography, cross-domain rebrand rules, SEO head tags |
| [STYLE-GUIDE.md](./STYLE-GUIDE.md) § Ecosystem | How museums101.com relates to museumplanning.com, museum-experiences.com, markwalhimer.com |

Style guides for sibling sites:

- **Consulting:** `website-2.0/STYLE-GUIDE.md`
- **Museum Planner:** `museum-planner-2.0/STYLE-GUIDE.md`

---

## GitHub Pages deployment

- **Branch:** `main`
- **Source path:** `/` (repo root)
- **Custom domain:** `museums101.com` (see `CNAME`)
- **Canonical host:** `https://museums101.com/` — **no `www`**

After push, Pages rebuilds in ~1–2 minutes. Project URL `museum-planning-llc.github.io/museums-101/` redirects to the custom domain once DNS is active.

### DNS (registrar)

Point **away from WordPress** and toward GitHub:

**Apex `museums101.com` — A records:**

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**`www` — CNAME:**

```
www  →  museum-planning-llc.github.io
```

Then in **Settings → Pages**: confirm domain check passes and enable **Enforce HTTPS**.

---

## SEO

- **Canonical:** always `https://museums101.com/` (or the page path on that host)
- **Primary keywords:** museum planning, feasibility studies, master planning, starting a museum, governance, exhibition design — see `meta name="keywords"` and JSON-LD in `index.html`
- **Sitemap:** `https://museums101.com/sitemap.xml`
- **Consulting keywords** may appear in structured data linking to `museumplanning.com`; the book site does not replace the consulting site in search intent

Do not point canonical tags at `www.museums101.com` or WordPress URLs after cutover.

---

## Editing conventions

1. Read [STYLE-GUIDE.md](./STYLE-GUIDE.md) before adding pages or changing tokens.
2. Keep pages **self-contained** (inline CSS per page) unless shared nav assets are intentional (`assets/site-nav.*` for toolbox masthead only).
3. Use **root-relative paths** for internal links (`/`, `/museum-toolbox/`, `/#contents`).
4. Use **full HTTPS URLs** for cross-domain links (museumplanning.com, museum-experiences.com, markwalhimer.com, museumplanner.org).
5. Every new public HTML page: update `sitemap.xml`.

---

## Contact

Mark Walhimer · Museum Planning LLC  
mark@museumplanning.com · [museumplanning.com/museum-planning-contact.html](https://museumplanning.com/museum-planning-contact.html)

# Kelly Lemayian — Portfolio SPA

Single-page app, hash-routed, vanilla JS. Same visual language as the
original Tailwind/Alpine template this replaces — deep orange accent,
PT Sans/DM Sans, light & dark mode, card hovers, reveal-on-scroll — but
rebuilt as one shell with a small JS kernel instead of five static pages,
plus a working admin panel to manage the project list.

## What changed from the template this started from

- **One shell, not five pages.** The old build was five static HTML files
  (`index.html`, `projects.html`, `case-study.html`, `blog.html`,
  `blog-article.html`) styled with Tailwind CDN and wired up with
  Alpine.js. `index.html` is now just `<link>` tags and a stack of
  `<script>` tags — no build step, no bundler. Routing happens
  client-side via the URL hash (`#/`, `#/projects`, `#/projects/:id`,
  `#/blog`, `#/blog/:id`, `#/contact`, `#/admin`, ...).
- **Alpine.js removed.** All the `x-data` / `x-show` / `@click` reactivity
  from the original template is now plain vanilla JS (`src/app.js` +
  `src/router.js`) — dark-mode toggle, mobile menu, and scroll-reveal all
  work the same way, just without the framework.
- **Home is a short overview, not a long scroll.** The original template
  put everything — hero, services, work, testimonials, blog preview,
  contact — on one long landing page. Here, Home is a brief hero + a
  taste of skills and featured work, and each section links out to its
  own page (`#/projects`, `#/blog`, `#/contact`) to actually browse.
- **Admin panel added**: `#/admin/login` → `#/admin` (dashboard) →
  `#/admin/projects` (CRUD over the case studies shown on the public
  Projects page) and `#/admin/assets` (manage the photo library used for
  project covers and the profile photo). Gated by a mock login in
  `src/utilities/auth.js`.
- **Content personalized.** Name, tagline, skills, and social links now
  point at Kelly's real profiles instead of the template's placeholder
  "Eliott" branding.

## Assets — how the photo library works

`assets/1.jpeg` … `assets/7.jpeg` are Kelly's own photos, dropped
straight into the `assets/` folder — no build step needed, they're
served as-is. `src/services/mockData.js` has an `assets` array (file
path + caption + credit) that the admin **Assets** page
(`#/admin/assets`) reads and manages, and that the **Projects** form's
cover-image field picks from.

Two photos (`4.jpeg`, `7.jpeg`) carry a visible on-image watermark —
"Karis Lens" and "kenyan~justice" respectively — so they're credited to
those names in `mockData.js` and flagged `needsReview: true`. Since
that's a different credit than "my own images," it's worth confirming
before publishing: either they're licensed/cleared for use, or they
should be swapped for photos you hold clear rights to.

**Important limitation:** the browser can't write new files to disk on
its own. Adding an asset from `#/admin/assets` registers a *reference*
(a file path or URL) — it doesn't upload bytes. To add a new photo:
drop the file into `/assets` yourself first, then register its path in
the admin panel (or directly in `mockData.js`). "Removing" an asset
from the admin panel hides the reference; it doesn't delete the file.

## File map

```
index.html                     SPA shell
styles/
  tokens.css                   reset, base type, reveal/shimmer/scrollbar, layout primitives
  admin.css                    admin shell, sidebar, tables, forms, stat cards
assets/                       Kelly's own photos (1.jpeg … 7.jpeg), served directly
src/
  app.js                       kernel: mounts header/footer + delegated cross-page events
  router.js                    hash parsing + route dispatch
  pages/
    home.js  projects.js  project.js  blog.js  blogArticle.js  contact.js  notFound.js
    admin/login.js  admin/dashboard.js  admin/projects.js  admin/assets.js
  components/                  pure render functions (return HTML strings)
    header.js  footer.js  serviceCard.js  projectCard.js  blogCard.js  contactChannels.js
    admin/sidebar.js  admin/shell.js  admin/statCard.js  admin/table.js
    admin/projectForm.js  admin/assetGrid.js  admin/assetForm.js
  services/
    mockData.js                seed data — delete once a real backend (e.g. D1) is live
    api.js                     async client; swap function BODIES for real fetch() calls later
    dataLoader.js               the only data-import surface pages/components use (adds caching)
  utilities/
    helpers.js                 DOM helpers, formatting, toast, scroll-reveal observer
    auth.js                    mock login + session flag (swap for real auth later)
    icons.js                   shared inline-SVG icon set
```

## Running it

No build step, no server required — every script is a plain classic
`<script>` tag (not an ES module), so double-clicking `index.html` works
straight from the file system. Opening it through a local server (e.g.
`npx serve .`) works too, and is closer to how it'll behave once you
add real API calls.

## Going to a real backend later

Only two files should need to change:

1. `src/services/api.js` — swap each function body for a `fetch()` call
   to your API (Cloudflare Worker + D1 fits). Right now it persists to
   `localStorage` so admin edits survive a reload without a server.
2. `src/utilities/auth.js` — swap `checkCredentials` / session storage
   for a real auth check (e.g. a signed cookie or JWT from the Worker).

Everything above `api.js` (`dataLoader.js`, pages, components) talks to
`dataLoader`, not `api.js` or `mockData.js` directly, so the swap stays
contained.

## Demo admin login

```
username: kelly
password: buildinpublic
```

Change this in `src/utilities/auth.js` before using this anywhere real —
it's a placeholder for local/demo use only.

## Content that needs your input

- **Profile & bio** — pulled from the GitHub profile README (full-stack
  engineer; React, TypeScript, DevOps, AI integration; open to remote
  contracts). Worth a pass to make sure the framing still fits, especially
  next to the hospitality client work below.
- **Four project write-ups are placeholders** — the challenge/approach/
  result text for Safari Stays, Vintex Guest House, Pleasant Comfort
  Guest House, and Romeo Gardens is generic scaffolding (`needsReview:
  true`), since the real story of each engagement wasn't supplied. The
  real links are wired up (repo, live site, Booking.com listing) —
  swap the copy in from `#/admin/projects`.
- **Guest-house cover photos are stock placeholders** (Unsplash) — no
  photos of the actual properties were supplied, and Booking.com's own
  listing photos aren't ours to use. Replace them with real photos of
  each property (your own, or ones the client has cleared for use) via
  the cover-image picker in `#/admin/projects`, which pulls from
  whatever's registered in `#/admin/assets`.
- **Social links** — WhatsApp, Telegram, YouTube, TikTok, and Facebook
  are marked `needsReview: true` in `mockData.js` simply because they
  weren't independently verified; LinkedIn and GitHub were. Double-check
  the handles before publishing.
- **Three blog posts** are pure placeholders so the Blog page isn't
  empty. Replace or delete them directly in `mockData.js` (blog isn't
  wired into the admin panel yet).
- **No contact email was supplied** — WhatsApp/Telegram are the
  contact channels wired up on the Contact page instead. Add an email
  in `mockData.js` (and to `contactChannels.js`) if you want one listed.

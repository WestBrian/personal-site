# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, both confirmed by the owner:

- **Blog readers.** People who arrive on an article, usually from a shared link, to read about frontend, the web, and "the details in between". Their job is to read one piece comfortably on a phone or a laptop, then decide whether to read another.
- **Potential employers.** Hiring managers, recruiters, and engineers evaluating Brian West as a software engineer with a frontend focus. Their job is to learn who he is, where he is based, and how he thinks and builds, usually in a short visit that starts at About (`/`).

Whether employers also judge the site itself as evidence of frontend craft, beyond its copy, is undecided.

## Product Purpose

The personal site of Brian West, a software engineer in Virginia with a passion for frontend. It introduces him (About at `/`) and publishes his writing (`/blog`, `/blog/[slug]`). Success means a reader finishes an article and finds the next one, and an employer leaves with a clear, accurate picture of who Brian is.

What an employer should do next is undecided. The site has no contact link, résumé, GitHub, or social link, and none should be invented.

## Positioning

A frontend engineer's own small corner of the web, where the writing and the build quality speak for him. The site makes no claims it cannot show. Those two sentences are a reading of the shipped lines "I build for the web." and "Made for the web." A separate slogan is undecided.

## Operating Context

- Read on phones and desktops. The layout has explicit phone (≤550px), tablet (≤800px), and wide (≥1500px) breakpoints.
- Light theme by default. Readers can switch to dark, and the choice is remembered in `localStorage` under `bw-theme`.
- Articles are written by hand as TSX modules in `src/content/posts` and registered in `src/content/posts/index.ts`. There is no CMS, comments system, newsletter, or analytics in the repo.
- Hosted as a Next.js App Router site at brianwest.dev (per `src/app/manifest.webmanifest`).

## Capabilities and Constraints

- Routes: About (`/`), Blog index (`/blog`), Article (`/blog/[slug]`), and a 404 page. Unknown article slugs return 404.
- Each post carries slug, title, description, ISO date, reading minutes, category, and a `Content` component. Posts sort newest first.
- Stack: Next.js 15 App Router, React 19, TypeScript, Tailwind CSS 3, Node 24.x. Inter loads through `next/font/google`, so builds need network access.
- No articles are published yet. About and Blog intentionally show empty states until the first post lands.
- `motion` is a dependency but is not imported anywhere today.
- Undecided: contact or hiring channel, project or case-study content, RSS, and post categories beyond the free-text `category` field.

## Brand Commitments

- Name "Brian West" with the lowercase "bw" monogram mark. Domain brianwest.dev.
- Voice: first person, warm, modest, short sentences. Examples already shipped: "Welcome to my little corner of the web.", "Thinking out loud.", "Thanks for stopping by.", "Made for the web."
- Owner's binding visual constraint (setup brief): **preserve the current visual direction, which is simple, modern, and generous with whitespace.** Recorded as stated, without expansion.

## Evidence on Hand

- Portrait: `public/me.png`, shown at 37px on About.
- Icons and favicons: `src/app/favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-icon.png`, `public/android-chrome-*.png`.
- Copy: About intro and "A little about me" section in `src/app/page.tsx`. Blog intro in `src/app/blog/page.tsx`.
- **Absent, must not be fabricated:** published articles, project case studies, employer names, testimonials, metrics, résumé, social or contact links.

## Product Principles

1. **Writing is the product, and the chrome recedes.** Navigation, meta, and decoration exist to get a reader into and through an article.
2. **Honest over impressive.** Empty states say "No posts yet." rather than filling space. Nothing is claimed that the site cannot show.
3. **Portfolio evidence is undecided.** Whether employers should treat accessibility, theming, responsive behavior, and performance as the portfolio, beyond the writing, is still open.
4. **One calm path for two audiences.** About leads to writing, and writing leads back to About. Neither audience gets a separate funnel.

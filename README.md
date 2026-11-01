# Brian West

A personal site built with Next.js App Router, React, TypeScript, and Tailwind CSS. About lives at `/`, the blog at `/blog`, and articles at `/blog/[slug]`.

## Local development

```sh
npm install
npm run dev
```

Run `npm run lint`, `npx tsc --noEmit`, and `npm run build` before shipping. Use `npm start` to serve the production build. Builds fetch Inter through `next/font/google`, so font downloads need network access.

## Adding an article

Create a `.tsx` file in `src/content/posts`. Export a `post` object that satisfies `Post` from `./types`, with a unique slug, title, description, ISO date (`YYYY-MM-DD`), reading minutes, category, and a `Content` component containing semantic JSX. Import it into `src/content/posts/index.ts` and add it to `posts`. That manifest supplies listings, article routes, static parameters, and metadata. Articles are sorted newest first.

The site starts with no published articles. About and Blog show empty states until a real article is added to the manifest. Unknown article URLs return a 404.

The theme defaults to light and remembers the reader’s selection in `bw-theme` when browser storage is available.

## Design tooling

Cursor agents get the [Impeccable](https://impeccable.style) design skill from `.cursor/skills/impeccable`, with product context in `PRODUCT.md` and the visual system in `DESIGN.md`. Type `/impeccable` in Cursor chat to list commands. A design-detector hook in `.cursor/hooks.json` reviews agent edits to UI files; turn it off for this project with `/impeccable hooks off`. On first use the launcher downloads a checksum-verified engine binary for your platform into `~/.impeccable`, so it needs network access once.

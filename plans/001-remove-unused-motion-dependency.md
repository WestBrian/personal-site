# 001 — Remove unused motion dependency

- **Status**: TODO
- **Commit**: cfdcc9c
- **Severity**: MEDIUM
- **Category**: Cohesion & tokens
- **Estimated scope**: 2 files (`package.json`, `package-lock.json`), plus a one-line note in `PRODUCT.md`

## Problem

The site declares a motion library it never runs. That invites a future agent to import `motion/react` and add animation against the design system.

```json
/* package.json:15-20 — current */
"dependencies": {
  "motion": "^12.0.5",
  "next": "15.5.28",
  "react": "^19.0.0",
  "react-dom": "^19.0.0"
}
```

```text
/* PRODUCT.md:41 — current */
- `motion` is a dependency but is not imported anywhere today.
```

A repo-wide search of `src/` for `from "motion"`, `from 'motion'`, `motion/react`, `AnimatePresence`, and `whileHover` returns no matches (verified at commit `cfdcc9c`).

## Target

- `package.json` dependencies list only `next`, `react`, and `react-dom`.
- `package-lock.json` no longer resolves `motion`, `framer-motion`, `motion-dom`, or `motion-utils` for this app.
- `PRODUCT.md` drops the bullet that records the unused dependency, or replaces it with a short note that motion libraries are out of scope for this site.

## Repo conventions to follow

- Dependencies live in root `package.json`. Install and uninstall with npm so the lockfile stays consistent.
- Product facts about the stack live in `PRODUCT.md` next to the other dependency notes.
- Exemplar: `PRODUCT.md` already documents that `motion` is unused. After uninstall, that sentence must not claim the package is still present.

## Steps

1. Confirm again with `rg -n "from ['\\\"]motion|motion/react|AnimatePresence|whileHover|whileInView" src`. Expect zero hits.
2. Run `npm uninstall motion` from the repo root. Do not hand-edit the lockfile.
3. Open `PRODUCT.md` and remove or rewrite the bullet at the line that says `` `motion` is a dependency but is not imported anywhere today. `` so it no longer names an installed package.
4. Run `npx tsc --noEmit` and `npm run lint`. Both must exit 0.
5. Run `npm run build`. Expect a successful production build with no `motion` in the traced dependency graph for app routes.

## Boundaries

- Do NOT add any animation, transition, or motion import.
- Do NOT change UI components, Tailwind config, or `globals.css`.
- Do NOT add a replacement animation library.
- If `rg` finds a real `motion` import in `src/` that landed after `cfdcc9c`, STOP and report. Do not uninstall.

## Verification

- **Mechanical**: `rg -n '"motion"|framer-motion' package.json package-lock.json` shows no production dependency entries for the app. `npx tsc --noEmit`, `npm run lint`, and `npm run build` exit 0.
- **Feel check**: load `/` and `/blog`. Confirm the page still renders. There is no motion to feel-check. Confirm DevTools Network does not fetch a `motion` chunk.
- **Done when**: `motion` is gone from `package.json`, the lockfile no longer installs it for this project, and PRODUCT.md no longer describes it as a current dependency.

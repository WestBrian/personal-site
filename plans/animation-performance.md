# Animation performance report

Commit audited: `cfdcc9c`
Skill: `/animation-performance`

## Phase 1 — What animates

| Element | Driver | Properties | Plays during |
| --- | --- | --- | --- |
| _(none in `src/`)_ | — | — | — |

Post-row and link hovers change `color` with no `transition`. Theme toggle swaps CSS variables with no transition. The skip link changes `top` with no transition. None of these enter the layout/paint/composite animation pipeline as timed motion.

`package.json` still lists `motion`, but nothing imports it, so it never runs on the main thread.

## Phase 2 — Diagnose

Walked the cause list against `src/`:

1. Non-composite properties animated — none.
2. Motion during busy navigation or fetch — none.
3. React state per animation frame — none. Theme toggle writes `dataset` and `localStorage` once per click.
4. Inherited CSS variable driving transforms — none.
5. Motion `x`/`y`/`scale` shorthands — none.
6. Animated `blur()` over 20px — none.
7. Layer promotion / `will-change` shift — not applicable.

## Phase 3 — Findings

No performance findings in site source.

Verified from code and from the remove-pass stylesheet grep (zero `scroll-behavior`, `animation:`, `transition:`, `@keyframes` in the served CSS). Not verified on a mid-range phone recording, because there is no timed animation left to profile.

Do not add `will-change`. Do not reintroduce CSS transitions for their own sake.

If plan `001` uninstalls `motion`, that also removes the risk of a future main-thread Motion import on a busy page.

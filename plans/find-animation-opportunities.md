# Find animation opportunities

Skill: `/find-animation-opportunities`
Commit: `30852cc` (after design docs allow restrained motion)
Stack: Next.js 15, React 19, Tailwind. `motion` installed, unused. No easing/duration tokens yet. Personality: crisp personal site; motion now allowed when purposeful.

Frequency map: skip link / Tab (rare keyboard). About ↔ Blog (core nav, tens per visit). Theme toggle (occasional). Post-row hover (tens while scanning). Empty states / 404 (rare). Blog list mount (occasional).

## Sweep

| Hunt class | Result |
| --- | --- |
| Feedback gaps | Theme toggle has `onClick`, no `:active` transform. Links have hover color only. |
| Teleporting state | Theme swaps CSS variables instantly. Empty states and route content mount with no transition. |
| Missing spatial story | No drawers, popovers, toasts, or menus. Cleared. |
| Group entrances | `posts.map` / `posts.slice` lists mount as a block when posts exist. |
| Gesture seams | None. Cleared. |
| Delight budget | Blog empty state, About empty writing block, 404 page. |

---

### Part 1 — Opportunities table

| # | Location | Today | Purpose | Frequency | Suggested motion |
| --- | --- | --- | --- | --- | --- |
| 1 | `src/app/_components/theme-toggle.tsx:14-21` + `:root` tokens in `src/app/globals.css` | `dataset.theme` flip; page colors teleport | Preventing a jarring change | Occasional | On `html`, `transition: background-color 200ms var(--ease-out), color 200ms var(--ease-out)` with `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)`. Prefer transitioning the painted surfaces (`body` bg + ink) over `transition: all`. Under `@media (prefers-reduced-motion: reduce)`, drop to ≤100ms or opacity-only crossfade on a full-viewport veil, no large travel. Feel-check: toggle twice quickly; colors should retarget, not restart. |
| 2 | `src/app/_components/theme-toggle.tsx:25-40` | Button has hover bg, no press feedback | Feedback | Tens/day | `transition: transform 160ms cubic-bezier(0.23, 1, 0.32, 1)`. `:active { transform: scale(0.97) }`. Gate hover bg with `@media (hover: hover) and (pointer: fine)`. Reduced motion: keep opacity/bg change, omit scale. |
| 3 | `src/app/blog/page.tsx:39-56` (mirror soft touch on `src/app/page.tsx` empty writing block) | Empty state pops in fully opaque | Delight | Rare / first-time | Enter once via `@starting-style` or Motion `initial`/`animate`: from `opacity: 0; transform: translateY(8px) scale(0.98)` → settled, `200–250ms` `cubic-bezier(0.23, 1, 0.32, 1)`. Never `scale(0)`. Reduced motion: opacity only, ≤150ms. |
| 4 | `src/app/_components/post-row.tsx` list mounts on `src/app/blog/page.tsx` / About latest | Rows appear as one opaque block when posts exist | Preventing a jarring change | Occasional | Stagger opacity only: each row `opacity 0→1`, `180ms` `cubic-bezier(0.23, 1, 0.32, 1)`, delay `nth * 40ms`, cap total ≤300ms. Pointer events enabled immediately (stagger must not block). Reduced motion: single group fade, no stagger. |
| 5 | `src/app/_components/post-row.tsx:26` `group-hover:text-accent` (and muted→ink link hovers in header/footer) | Instant color snap | Feedback | Tens/day | Near-imperceptible only: `transition: color 150ms ease`. No scale, lift, or shadow. Hover gated: `@media (hover: hover) and (pointer: fine)`. |

### Part 2 — Rejected candidates

- `src/app/layout.tsx` skip link (`href="#main"`) — keyboard focus jump. **Rejected: keyboard-initiated. Never animate.** (Smooth scroll already removed.)
- `src/app/_components/navigation.tsx:18-25` active page dot / About↔Blog — core in-app navigation. **Rejected: frequency + DESIGN don't: core nav route changes.**
- Full-page route transitions between About, Blog, and articles — same surfaces, every visit. **Rejected: high-frequency product chrome; reads as delay.**
- Scroll-reveal / `whileInView` on About sections — visitor sees once per section every visit. **Rejected: purpose fails (decoration); DESIGN don't: every section on scroll.**
- `src/app/not-found.tsx` bounce or long celebratory entrance — rare, but 404 is recovery, not delight. **Rejected: function; motion would hinder getting out.** Soft opacity enter is optional polish, not high leverage.

### Part 3 — Verdict

This site needs a little motion, not a system of it. After the remove pass it is under-animated on real state changes (theme) and press feedback, and still correctly static on keyboard and nav. Highest leverage is **#1 theme color bridge**, then **#2 press scale** on the same control. Hand off with `improve-animations plan <row>` (or implement via `/animate`) starting with the theme toggle pair.

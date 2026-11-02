# Animation plans

Audit commit: `cfdcc9c` (after `/remove-animations`).
Stack: Next.js 15 App Router, React 19, Tailwind. Personality: crisp personal site. Design north star in `DESIGN.md`: nothing animates.

## Recon summary

| Surface | Driver | Notes |
| --- | --- | --- |
| Document scroll | removed | Was `scroll-behavior: smooth`. Gone. |
| Component hover colors | CSS class, no duration | Instant. Not animations. |
| Theme toggle | CSS variables | Instant swap. By design. |
| `motion` package | unused | Listed in `package.json`, never imported. |

Frequency map: skip link is rare keyboard use. Nav and post-row hovers are tens per visit. No command palette, modal, toast, or route transition exists.

## Findings (vetted)

| # | Severity | Category | Location | Finding | Fix summary |
| --- | --- | --- | --- | --- | --- |
| 1 | MEDIUM | Cohesion | `package.json:16` | Unused `motion` dependency invites future animation against the north star | Uninstall `motion` and update PRODUCT.md |
| 2 | LOW | Accessibility / cohesion | `DESIGN.md:314`, `.impeccable/design.json` | Docs still require `prefers-reduced-motion` handling after the only motion rule was deleted | Align Do guidance with the no-animation system |

Settled and not re-litigated: Overview "Nothing floats, glows, or animates." Instant theme and hover color changes stay.

## Missed opportunities

None selected for plans. A theme crossfade or nav-indicator morph would fight the written north star. If that north star changes, revisit theme swap and the active nav mark first.

## Plans

| # | Title | Severity | Status | Depends on |
| --- | --- | --- | --- | --- |
| 001 | Remove unused motion dependency | MEDIUM | TODO | none |
| 002 | Align design docs after motion removal | LOW | TODO | none |

Recommended order: `001`, then `002`. They do not share files.

## Animation performance

See `animation-performance.md` in this folder. No frame-budget fixes were required after the remove pass.

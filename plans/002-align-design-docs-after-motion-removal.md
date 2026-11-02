# 002 — Align design docs after motion removal

- **Status**: TODO
- **Commit**: cfdcc9c
- **Severity**: LOW
- **Category**: Accessibility / cohesion
- **Estimated scope**: 2 files (`DESIGN.md`, `.impeccable/design.json`)

## Problem

`/remove-animations` deleted the only timed motion on the site (`scroll-behavior: smooth` and its `prefers-reduced-motion` override) in `src/app/globals.css`. The design system still tells agents to keep `prefers-reduced-motion` handling intact, which now points at nothing in the stylesheet.

```markdown
/* DESIGN.md:314 — current */
- **Do** keep the skip link, `:focus-visible` outline (2px accent, 6px offset, `focus` radius), and `prefers-reduced-motion` handling intact.
```

```json
/* .impeccable/design.json — current do's entry */
"Do keep the skip link, `:focus-visible` outline (2px accent, 6px offset, `focus` radius), and `prefers-reduced-motion` handling intact."
```

`DESIGN.md` Overview already states the settled personality: "Nothing floats, glows, or animates." That decision stays. The docs need to match the stylesheet so a later agent does not reintroduce an empty reduced-motion block, or worse, invent motion just to have something to reduce.

## Target

Keep the skip link and focus-visible rules mandatory. Replace the `prefers-reduced-motion` clause with guidance that matches the no-animation north star:

```markdown
/* DESIGN.md — target Do bullet */
- **Do** keep the skip link and `:focus-visible` outline (2px accent, 6px offset, `focus` radius) intact. Do not add timed animations. If a future change introduces motion, gate movement behind `prefers-reduced-motion` and keep opacity or color feedback.
```

Mirror the same sentence in `.impeccable/design.json` so the live design panel matches `DESIGN.md`.

## Repo conventions to follow

- `DESIGN.md` is the human-readable source of truth for the visual system.
- `.impeccable/design.json` mirrors Do/Don't and overview text for the Impeccable panel. Keep the two in sync.
- Exemplar: Overview line "Nothing floats, glows, or animates." That sentence already settles the motion personality. The Do bullet must not contradict it.

## Steps

1. Edit `DESIGN.md` Do bullet that currently names `prefers-reduced-motion`. Replace it with the target wording above. Do not change other Do/Don't items.
2. Edit `.impeccable/design.json` so the matching Do string uses the same wording.
3. Grep both files for `prefers-reduced-motion` and `scroll-behavior`. Expect no claim that a current stylesheet rule handles reduced motion.
4. Do not touch `src/`.

## Boundaries

- Do NOT add CSS animations, transitions, or a new `prefers-reduced-motion` block "for completeness."
- Do NOT change colors, type, layout tokens, or PRODUCT.md in this plan.
- Do NOT uninstall `motion` here. That is plan `001-remove-unused-motion-dependency.md`.
- If `src/app/globals.css` has gained timed motion since `cfdcc9c`, STOP and report instead of weakening the reduced-motion guidance.

## Verification

- **Mechanical**: `rg -n "prefers-reduced-motion|scroll-behavior" DESIGN.md .impeccable/design.json src/app/globals.css` shows the updated guidance in the docs and still zero motion rules in `globals.css`.
- **Feel check**: open the site and Tab to the skip link. Confirm it still appears and jumps to `#main` with no smooth scroll. Toggle the theme. Confirm focus rings still use the accent outline.
- **Done when**: DESIGN.md and design.json no longer require an existing reduced-motion stylesheet rule, and they still forbid adding animation by default.

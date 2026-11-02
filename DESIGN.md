---
name: Brian West
description: Personal site and blog of a frontend-minded software engineer, set in quiet greys with a single violet accent.
colors:
  background: "#fdfdfc"
  ink: "#27272b"
  muted: "#6e6e76"
  soft: "#73737d"
  line: "#eaeaec"
  accent: "#6558bd"
  button: "#f0f0ef"
  headline: "#898992"
  selection: "#ded8f5"
  selection-ink: "#282335"
  link-underline: "#cccbd4"
  quote-rule: "#c5b9ee"
  background-dark: "#19191b"
  ink-dark: "#e9e9ec"
  muted-dark: "#a3a3ad"
  soft-dark: "#85858e"
  line-dark: "#313136"
  accent-dark: "#b8aaf3"
  button-dark: "#29292e"
  headline-dark: "#9d9da8"
typography:
  display:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "62px"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-3.4px"
  display-tablet:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "55px"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-3.4px"
  display-phone:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "44px"
    fontWeight: 500
    lineHeight: 1.16
    letterSpacing: "-2.4px"
  headline:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "52px"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-2.7px"
  headline-article:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "49px"
    fontWeight: 500
    lineHeight: 1.18
    letterSpacing: "-2.5px"
  headline-article-phone:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "36px"
    fontWeight: 500
    lineHeight: 1.18
    letterSpacing: "-1.5px"
  title-lg:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "23px"
    fontWeight: 500
    letterSpacing: "-0.7px"
  title:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "22px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "-0.7px"
  title-phone:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "21px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "-0.7px"
  quote:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "-0.3px"
  lede:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: "-0.35px"
  lede-sm:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.8
  body:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.95
    letterSpacing: "-0.1px"
  body-sm:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.9
    letterSpacing: "-0.15px"
  body-base:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.8
  ui:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 400
  label:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 400
  caption:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 400
  micro:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "10px"
    fontWeight: 400
rounded:
  focus: "3px"
  monogram: "9px"
  full: "9999px"
spacing:
  gutter: "48px"
  gutter-tablet: "35px"
  gutter-phone: "26px"
  hero-top: "108px"
  hero-top-phone: "73px"
components:
  nav-link:
    textColor: "{colors.muted}"
    typography: "{typography.ui}"
    padding: "9px 0"
  nav-link-active:
    textColor: "{colors.ink}"
  monogram:
    textColor: "{colors.ink}"
    rounded: "{rounded.monogram}"
    size: "29px"
  theme-toggle:
    rounded: "{rounded.full}"
    size: "30px"
  theme-toggle-hover:
    backgroundColor: "{colors.button}"
    rounded: "{rounded.full}"
  post-row:
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "26px 0"
  post-row-hover:
    textColor: "{colors.accent}"
  text-link:
    textColor: "{colors.ink}"
  text-link-hover:
    textColor: "{colors.accent}"
  quiet-link:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
  quiet-link-hover:
    textColor: "{colors.ink}"
  avatar:
    rounded: "{rounded.full}"
    size: "37px"
  skip-link:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.background}"
    padding: "12px"
---

# Design System: Brian West

## Overview

**Creative North Star: "Simple modern whitespace"**

A single calm column of text on near-white paper. The page is mostly whitespace. Hierarchy comes from size, weight, and two greys rather than color or ornament, and the one violet accent appears only when something responds to the reader. Nothing floats, glows, or animates. Depth is a hairline. The interface steps back so the writing and the person behind it carry the page.

**Key Characteristics:**

- One typeface (Inter), set large and tight for headings and airy for reading.
- Warm near-white ground with cool grey ink. Dark mode is `:root[data-theme="dark"]` and mirrors every role that has a dark pair.
- Content sits in a single centered column. There are no cards, grids of tiles, or sidebars.
- Hairline rules (1px `line`) separate sections and list rows.
- The accent is a state, not a fill.

## Colors

Restrained neutrals with one violet accent held in reserve.

### Primary

- **Quiet Violet** (`accent` / `accent-dark`): hover color for links and post titles, the `:focus-visible` outline, and, through `selection` and `quote-rule`, the tint of text selection and the article blockquote rule.

### Neutral

- **Paper** (`background` / `background-dark`): the page ground everywhere. It is never tinted or boxed.
- **Ink** (`ink` / `ink-dark`): headings, link text, active nav, and the brand wordmark.
- **Muted Grey** (`muted` / `muted-dark`): secondary copy, the lede, article paragraphs, nav at rest, and meta.
- **Soft Grey** (`soft` / `soft-dark`): the quietest text (footer copyright, list headers) and trailing icons.
- **Headline Grey** (`headline` / `headline-dark`): only the second line of the About display heading ("I build for the web.").
- **Hairline** (`line` / `line-dark`): 1px rules between sections and rows, and the monogram and avatar borders.
- **Button Wash** (`button` / `button-dark`): the hover fill behind the round theme toggle. It is the only filled hover state.
- **Selection** (`selection` on `selection-ink`): the text-selection pair. It is not theme-aware today.
- **Unused:** `--wash` / `--wash-dark` are defined in `globals.css` and mapped in Tailwind, but nothing in `src/` uses them. Do not assign them a job in this document.
- **Literal colors without dark pairs:** `selection`, `selection-ink`, `link-underline`, and `quote-rule` are hex literals in CSS or JSX. They have no dark counterparts.

### Named Rules

**The Violet-as-State Rule.** `accent` appears only in response to the reader (hover, focus, selection) or as a hairline (the blockquote rule). It is never a background fill or a resting text color.

**The Display-Only Grey Rule.** `headline` grey sits at about 3.4:1 on light Paper, so it is reserved for display-size type. Never use it for text below 24px.

## Typography

**Display Font:** Inter (with Arial, sans-serif)
**Body Font:** Inter (with Arial, sans-serif)

**Character:** A single neutral grotesque that does all the work. Headings are medium weight, very large, and tightly tracked. Reading text is regular weight with tall line height and a whisper of negative tracking.

The ramp is fine-grained because every shipped size is a literal Tailwind step. The frontmatter lists each one so new work reuses an existing step instead of adding a new one.

### Hierarchy

- **Display** (`display`, `display-tablet`, `display-phone`): the About hero heading, split into two tones (an Ink line, then a Headline Grey line). That split is the signature. `display-phone` is also the Blog heading on phones and the 404 heading.
- **Headline** (`headline`, `headline-article`, `headline-article-phone`): the Blog index heading and article titles.
- **Title** (`title-lg`, `title`, `title-phone`): the empty-state heading and article `h2` sections.
- **Quote** (`quote`): article blockquotes.
- **Lede** (`lede`, `lede-sm`): the intro paragraph under a page heading, in Muted Grey. `lede-sm` is also the full post-row title on phones.
- **Body** (`body`, `body-sm`, `body-base`): article paragraphs in a 660px column, About prose and compact post-row titles, and the 14px document default.
- **UI** (`ui`): header navigation and the About meta line.
- **Label / Caption / Micro** (`label`, `caption`, `micro`): back links and section labels, then dates and byline, then the footer and byline on phones.

### Named Rules

**The One Family Rule.** Inter only, at weights 400, 500, 550, and 600. Hierarchy comes from size, weight, and grey value, never from a second face.

## Layout

A centered frame (max 1080px) with horizontal gutters of `gutter`, `gutter-tablet`, and `gutter-phone`. Inside it, pages use a single content column of 744px (620px on tablet). Articles narrow to 660px. Page tops open with generous air (`hero-top`, 135px on wide screens, `hero-top-phone` on phones). Sections stack vertically and are divided by a top hairline with roughly 40–60px of padding. The About intro section uses a two-column label/content grid (170px label column, 130px on tablet) that collapses to one column on phones. The header is a fixed-height band (120/100/93px) with the wordmark on the left and the navigation and theme toggle on the right. Breakpoints are max-width `tablet` (800px) and `phone` (550px), plus min-width `wide` (1500px).

### Named Rules

**The Single Column Rule.** Content lives in one centered column. There are no sidebars, multi-column feeds, or full-bleed bands.

## Elevation & Depth

Flat by design. The codebase has no `box-shadow`, blur, or layered surfaces. Depth and grouping come from whitespace and 1px `line` hairlines, and the only filled state is the theme toggle's hover wash.

### Named Rules

**The Hairline Rule.** Separate with a 1px `line` rule or with space. Never with a shadow, a card, or a tinted panel.

## Shapes

Mostly square and open. Content blocks have no container shape at all. Rounding is reserved for small identity and control elements: the circular avatar and theme toggle (`full`), the softly squared "bw" monogram tile (`monogram`, 8px on phone), and the focus outline (`focus`). The article ends with a 6px square end mark at 1px radius.

## Components

### Navigation

- **Style:** text links in `ui` type and Muted Grey, spaced about 30px apart (21px on phone), followed by the theme toggle.
- **Active:** Ink text plus a 4px Ink dot centered beneath the label (`aria-current="page"`).
- **Hover:** none beyond the cursor. The active dot is the only state mark.

### Theme Toggle (icon button)

- **Shape:** 30px circle, transparent at rest.
- **Hover:** Button Wash fill. Icon is a 17px stroked sun at 1.5 stroke.
- **Behavior:** flips `data-theme` on `<html>` and persists `bw-theme`.

### Post Row (signature)

- **Style:** a full-width link row with a top hairline. Title and description sit on the left. Date and a small arrow sit on the right in Caption type.
- **Variants:** compact (About, `h3`, `body-sm` title) and full (Blog index, `h2`, 18px title, 14px description at max 480px).
- **Hover:** the title turns Quiet Violet. No background, lift, or underline.

### Links

- **Text link:** Ink with a 4px-offset `link-underline` underline, hovering to Quiet Violet.
- **Quiet link:** Muted Grey `label` with a trailing arrow, hovering to Ink. Used for "All posts", "Back to all writing", and similar.

### Article Prose

- **Paragraphs:** `body` in Muted Grey with 25px bottom margin.
- **Headings:** `title` with 45px above.
- **Blockquote:** a 2px `quote-rule` left border, 22px inset, 19px text.
- **End mark:** a 6px Soft Grey square after the last paragraph.

### Empty State

- A top hairline, a short Ink heading ("No posts yet."), one Muted Grey sentence, and an optional quiet link. The Blog index adds a 28px stroked icon.

### Icons

- Inline SVG, `viewBox="0 0 24 24"`, `fill="none"`, stroke `currentColor`, width 1.5, round caps. Default box 17px. Not a filled icon set.

## Do's and Don'ts

### Do:

- **Do** keep every new surface inside the 744px column (660px for long-form reading) with the incumbent gutters.
- **Do** define any new color as a CSS variable in `globals.css` with both light and dark values, then map it in `tailwind.config.ts`.
- **Do** separate content with 1px `line` hairlines and whitespace.
- **Do** keep the skip link, `:focus-visible` outline (2px accent, 6px offset, `focus` radius), and `prefers-reduced-motion` handling intact.

### Don't:

- **Don't** add shadows, cards, tinted panels, or gradients. The system is flat.
- **Don't** introduce a second typeface.
- **Don't** use `accent` as a fill or as resting text color.
- **Don't** use `headline` grey below display sizes.
- **Don't** bring back Geist, a slate palette, or `prefers-color-scheme`. Those are not this site.
- **Don't** replace the incumbent 10–11px meta type as part of an Impeccable pass. A later rendered audit can argue about it.

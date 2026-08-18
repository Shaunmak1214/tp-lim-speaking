# 001 — Gate smooth scrolling behind prefers-reduced-motion

- **Status**: DONE
- **Commit**: 06028d9
- **Severity**: HIGH
- **Category**: Accessibility
- **Estimated scope**: 2 files, ~10 lines

## Problem

The site animates long-distance scrolls for users who have asked the OS to reduce motion.

1. Global smooth scrolling is unconditional. Every anchor link in the navbar (`#about`, `#programs`, `#events`, ...) and every in-page CTA (`href="#events"`, `href="#coaching"`) triggers a multi-thousand-pixel animated scroll:

```css
/* site/src/index.css:21-23 — current */
html {
  scroll-behavior: smooth;
}
```

2. The carousel arrow buttons always request animated scrolling, regardless of the user's motion preference:

```js
// site/src/components/shared.jsx:76-80 — current
const scrollBy = (dir) => {
  const el = trackRef.current
  if (!el) return
  el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.85), behavior: 'smooth' })
}
```

Reduced motion means fewer and gentler animations, not zero: opacity feedback elsewhere can stay, but large positional animation like page scrolling must be dropped.

## Target

```css
/* site/src/index.css — target: smooth scroll only when motion is allowed */
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}
```

```js
// site/src/components/shared.jsx — target: carousel arrows respect the preference
const scrollBy = (dir) => {
  const el = trackRef.current
  if (!el) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.85), behavior: reduce ? 'auto' : 'smooth' })
}
```

## Repo conventions to follow

- The repo already gates its scroll-reveal animation correctly; imitate this pattern (`site/src/index.css:56-63`):

```css
@media (prefers-reduced-motion: no-preference) {
  .reveal {
    opacity: 0;
  }
  .reveal.in-view {
    animation: fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
}
```

- Styling is Tailwind v4 with a plain-CSS block in `site/src/index.css`; keep the media query in that file, do not create new CSS files.

## Steps

1. In `site/src/index.css`, delete the top-level `html { scroll-behavior: smooth; }` rule (lines 21-23) and add the same rule wrapped in `@media (prefers-reduced-motion: no-preference) { ... }` (place it just above the existing `@media (prefers-reduced-motion: no-preference)` block or merge it into a single new media block; either is acceptable as long as `scroll-behavior: smooth` no longer applies unconditionally).
2. In `site/src/components/shared.jsx`, inside the `scrollBy` function of `useCarousel`, read `window.matchMedia('(prefers-reduced-motion: reduce)').matches` into a local `reduce` const and pass `behavior: reduce ? 'auto' : 'smooth'` to `el.scrollBy`.

## Boundaries

- Do NOT touch any component other than `shared.jsx`, and only the `scrollBy` function within it.
- Do NOT remove or alter the `.reveal` animation block.
- Do NOT add new dependencies.
- If the cited code does not match (drift since commit 06028d9), STOP and report instead of improvising.

## Verification

- **Mechanical**: `cd site && npx vite build` completes with no errors.
- **Feel check**: run `npm run dev` in `site/`, open DevTools > Rendering > "Emulate CSS media feature prefers-reduced-motion":
  - With `reduce` set: clicking "Events" in the navbar jumps instantly to the section; carousel arrows jump instantly between cards.
  - With `no-preference`: both scroll smoothly, exactly as before.
- **Done when**: both emulation states behave as above and the build passes.

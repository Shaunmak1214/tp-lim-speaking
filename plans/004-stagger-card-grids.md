# 004 — Stagger the poster carousel and shop grid entrances

- **Status**: DONE
- **Commit**: 06028d9
- **Severity**: LOW
- **Category**: Cohesion (group entrances)
- **Estimated scope**: 3 files, ~30 lines

## Problem

Card groups enter all at once. The seven "Events that liberate" posters and the four shop product cards appear in a single simultaneous block when scrolled into view (or with no entrance at all), where a 30-80ms stagger would give the grids a composed, sequential arrival without delaying interaction.

Current poster track (no entrance animation at all; the section header uses `Reveal` but the track does not):

```jsx
{/* site/src/components/Programs.jsx:31-36 — current (abridged) */}
<div
  ref={trackRef}
  onScroll={onScroll}
  className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 lg:px-10"
>
  {PROGRAMS.map((p) => (
    <a key={p.name} href="#events" className="group relative w-[280px] shrink-0 snap-start overflow-hidden rounded-xl md:w-[310px]">
```

Current shop grid (no entrance animation):

```jsx
{/* site/src/components/Shop.jsx:40-42 — current (abridged) */}
<div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
  {shown.map((p) => (
    <a key={p.name} href="#" className="group flex flex-col rounded-xl bg-shell p-4 transition hover:bg-cloud">
```

The reveal machinery already exists: `Reveal` in `site/src/components/shared.jsx:4-27` observes intersection and adds `in-view`, and `site/src/index.css:45-63` defines the `fade-up` keyframes gated behind `prefers-reduced-motion: no-preference`.

## Target

A `stagger` mode on the existing `Reveal` component: the wrapper itself does not animate, its `.stagger-item` children each run the existing `fade-up` keyframe delayed by `calc(var(--stagger-i) * 50ms)`.

CSS to add inside the existing `@media (prefers-reduced-motion: no-preference)` block in `site/src/index.css`:

```css
.reveal-stagger .stagger-item {
  opacity: 0;
}
.reveal-stagger.in-view .stagger-item {
  animation: fade-up 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  animation-delay: calc(var(--stagger-i, 0) * 50ms);
}
```

(If plan 002 has been executed, write the curve as `var(--ease-out)` instead; the values are identical.)

`Reveal` gains a `stagger` prop that swaps the wrapper class:

```jsx
// site/src/components/shared.jsx — target signature and wrapper line
export function Reveal({ children, className = '', delay = 0, stagger = false }) {
  ...
  <div ref={ref} className={`${stagger ? 'reveal-stagger' : 'reveal'} ${className}`} ...>
```

Call sites wrap the two grids and mark items:

```jsx
{/* Programs.jsx — target: track wrapped, each card marked */}
<Reveal stagger>
  <div ref={trackRef} onScroll={onScroll} className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 lg:px-10">
    {PROGRAMS.map((p, i) => (
      <a key={p.name} href="#events" style={{ '--stagger-i': i }} className="stagger-item group relative w-[280px] shrink-0 snap-start overflow-hidden rounded-xl md:w-[310px]">
```

```jsx
{/* Shop.jsx — target: grid wrapped, each card marked */}
<Reveal stagger>
  <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
    {shown.map((p, i) => (
      <a key={p.name} href="#" style={{ '--stagger-i': i }} className="stagger-item group flex flex-col rounded-xl bg-shell p-4 transition hover:bg-cloud">
```

## Repo conventions to follow

- `Reveal` is the single entrance mechanism (`site/src/components/shared.jsx:4-27`); extend it rather than adding a second observer or a library.
- Keyframes and their reduced-motion gate live in `site/src/index.css:45-63`; the new rules go inside that same `@media (prefers-reduced-motion: no-preference)` block.
- Existing exemplar of a delayed reveal: `<Reveal delay={120}>` at `site/src/components/About.jsx:18`.

## Steps

1. In `site/src/index.css`, add the two `.reveal-stagger` rules shown above inside the existing `@media (prefers-reduced-motion: no-preference)` block, after the `.reveal.in-view` rule.
2. In `site/src/components/shared.jsx`, add the `stagger = false` prop to `Reveal` and make the wrapper class `${stagger ? 'reveal-stagger' : 'reveal'}` as shown. The IntersectionObserver logic is untouched (it only adds `in-view`).
3. In `site/src/components/Programs.jsx`, wrap the track `div` (the one with `ref={trackRef}`) in `<Reveal stagger>...</Reveal>`, change the map callback to `(p, i)`, and add `style={{ '--stagger-i': i }}` plus a leading `stagger-item ` to each card `<a>`'s className.
4. In `site/src/components/Shop.jsx`, do the same for the products grid `div` and its card `<a>` elements.

## Boundaries

- Do NOT stagger any other section (footer, pillars, quote attributions are out of scope).
- Do NOT change scroll/carousel logic (`useCarousel`, `onScroll`, snap classes) or card markup beyond the class/style additions shown.
- Do NOT let the stagger block interaction: no `pointer-events` changes, no delays beyond `count * 50ms`.
- Do NOT add new dependencies.
- If the cited code does not match (drift since commit 06028d9), STOP and report instead of improvising.

## Verification

- **Mechanical**: `cd site && npx vite build` passes.
- **Feel check**: dev server, reload at the top and scroll down slowly:
  - Posters cascade left-to-right roughly 50ms apart; the whole run finishes well under a second (7 x 50ms + 600ms).
  - Shop cards do the same in grid order.
  - Cards are hoverable/clickable immediately, even mid-entrance.
  - Changing the shop filter re-runs no entrance (items already in view stay visible) or at worst re-fades briefly without breaking layout; if filtering visibly re-triggers the full stagger and it feels laggy, note it in the report (candidate follow-up, not this plan).
  - DevTools > Rendering > `prefers-reduced-motion: reduce`: cards render instantly with no fade and no invisible items.
- **Done when**: both grids stagger at ~50ms/item under `no-preference` and render instantly under `reduce`.

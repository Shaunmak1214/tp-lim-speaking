# 002 — Introduce a strong ease-out token and apply it to image zooms and the reveal keyframe

- **Status**: DONE
- **Commit**: 06028d9
- **Severity**: MEDIUM
- **Category**: Easing & duration / Cohesion & tokens
- **Estimated scope**: 6 files, ~10 lines

## Problem

The site has no motion tokens. Its one deliberate curve is hand-typed in the keyframe rule, and its five 700ms image hover-zooms run on Tailwind's default transition easing `cubic-bezier(0.4, 0, 0.2, 1)`, which is too weak for a 700ms deliberate move: the zoom feels flat and mechanical instead of gliding to a stop.

Current zoom call sites (all use `transition duration-700` with the default easing, and `transition` animates more properties than needed):

```jsx
{/* site/src/components/Hero.jsx:34 — current */}
className="aspect-video w-full object-cover transition duration-700 group-hover:scale-[1.04]"
```

```jsx
{/* site/src/components/Programs.jsx:37 — current */}
<img src={p.img} alt={p.name} className="aspect-[2/3] w-full object-cover transition duration-700 group-hover:scale-[1.05]" />
```

```jsx
{/* site/src/components/Shop.jsx:43 — current */}
<img src={p.img} alt={p.name} className="aspect-square w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
```

```jsx
{/* site/src/components/About.jsx:46 — current */}
className="aspect-video w-full object-cover transition duration-700 group-hover:scale-[1.03]"
```

```jsx
{/* site/src/components/Coaching.jsx:51 — current */}
className="absolute inset-0 h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
```

Hand-typed curve in the reveal animation:

```css
/* site/src/index.css:61 — current */
animation: fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
```

## Target

One shared strong ease-out curve, defined once as a Tailwind v4 theme token and used everywhere deliberate motion needs it:

```css
/* site/src/index.css — add inside the existing @theme block */
--ease-out: cubic-bezier(0.23, 1, 0.32, 1);
```

In Tailwind v4, defining `--ease-out` in `@theme` overrides the built-in token, so the existing `ease-out` utility class now emits this strong curve, and `var(--ease-out)` is available in plain CSS.

Each zoom image switches to transform-only transitions with the token:

```jsx
{/* target pattern for all five image class lists */}
className="... transition-transform duration-700 ease-out group-hover:scale-[1.04]"
```

(`transition` becomes `transition-transform`; `ease-out` is appended; the existing `group-hover:scale-[...]` value on each site is kept unchanged.)

The reveal keyframe reuses the token:

```css
/* site/src/index.css:61 — target */
animation: fade-up 0.7s var(--ease-out) forwards;
```

## Repo conventions to follow

- Design tokens already live in the `@theme` block of `site/src/index.css` (colors like `--color-ember: #ff9700;` at `site/src/index.css:8-18`). Add `--ease-out` there, at the end of the block.
- Components style exclusively with Tailwind utility classes in `className`; do not add inline `style` attributes or new CSS classes for this.

## Steps

1. In `site/src/index.css`, add `--ease-out: cubic-bezier(0.23, 1, 0.32, 1);` as the last line inside the `@theme { ... }` block.
2. In the same file, change line 61 from `animation: fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;` to `animation: fade-up 0.7s var(--ease-out) forwards;`.
3. In `site/src/components/Hero.jsx:34`, replace `transition duration-700` with `transition-transform duration-700 ease-out` in that image's `className`.
4. Repeat the identical substitution in `site/src/components/Programs.jsx:37`, `site/src/components/Shop.jsx:43`, `site/src/components/About.jsx:46`, and `site/src/components/Coaching.jsx:51`.

## Boundaries

- Do NOT change the `group-hover:scale-[...]` values or the `duration-700` values.
- Do NOT touch the `Pill` press feedback (`active:scale-[0.98]` in `site/src/components/shared.jsx:46`) — its 150ms default is within the 100-160ms press budget and out of scope.
- Do NOT rename or move existing color tokens.
- Do NOT add new dependencies.
- If a cited class string does not match the code you find (drift since commit 06028d9), STOP and report instead of improvising.

## Verification

- **Mechanical**: `cd site && npx vite build` passes. `grep -rn "cubic-bezier(0.16" site/src` returns nothing. `grep -rn "transition duration-700" site/src` returns nothing (all five became `transition-transform`).
- **Feel check**: run the dev server, hover a shop product image and a program poster. In DevTools > Animations panel at 10% speed, the zoom should start quickly and decelerate into its final size (strong ease-out), not ramp up gently. Hover on/off rapidly: the zoom must reverse from wherever it is (CSS transitions retarget; no restart from scale 1).
- **Done when**: all five zooms and the scroll-reveal share `var(--ease-out)` and the greps above are clean.

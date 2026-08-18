# 003 — Animate the mobile menu open/close with an interruptible transition

- **Status**: DONE
- **Commit**: 06028d9
- **Severity**: MEDIUM
- **Category**: Interruptibility / Missed opportunity
- **Estimated scope**: 1 file, ~15 lines

## Problem

The mobile menu is conditionally rendered, so it pops in and out with zero motion and zero interruptibility. Tapping the hamburger teleports a full-width black panel into view; tapping again snaps it away. It also flows inside the fixed header, so opening it pushes the header's height instead of overlaying the page like a dropdown.

```jsx
{/* site/src/components/Navbar.jsx:53-70 — current */}
{open && (
  <div className="border-t border-white/10 bg-black px-5 pb-8 pt-4 lg:hidden">
    <ul className="flex flex-col gap-4">
      {NAV_LINKS.map((l) => (
        <li key={l}>
          <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="text-lg font-semibold text-white">
            {l}
          </a>
        </li>
      ))}
    </ul>
    <a href="#coaching" className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-black">
      Start now
    </a>
  </div>
)}
```

## Target

The panel stays mounted, is absolutely positioned below the header, and toggles via classes so a CSS transition (which retargets mid-flight, unlike keyframes) drives an ease-out fade + 8px drop. Rapidly tapping the hamburger must reverse the motion from wherever it currently is.

```jsx
{/* target — replaces the conditional block */}
<div
  className={`absolute inset-x-0 top-full border-t border-white/10 bg-black px-5 pb-8 pt-4 transition-[opacity,transform,visibility] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transform-none lg:hidden ${
    open ? 'visible translate-y-0 opacity-100' : 'pointer-events-none invisible -translate-y-2 opacity-0'
  }`}
>
  ... (inner markup unchanged) ...
</div>
```

Values: 200ms, `cubic-bezier(0.23, 1, 0.32, 1)` (strong ease-out; entrances/exits use ease-out), enter from `-translate-y-2` (8px) + `opacity-0`. `visibility` is included in the transition so the panel only becomes hidden after the fade completes, and `motion-reduce:transform-none` keeps an opacity-only fade for reduced-motion users (reduced motion keeps feedback, drops movement).

## Repo conventions to follow

- Components style exclusively with Tailwind utility classes; conditional classes use template literals with a ternary on state, e.g. the shop filter buttons (`site/src/components/Shop.jsx:24-31`).
- The header element (`site/src/components/Navbar.jsx:9`) is `fixed inset-x-0 top-0 z-50`, which already makes it the containing block for an `absolute` child; no wrapper changes are needed.
- If plan 002 has been executed, `ease-out` (the overridden token utility) may be used instead of the arbitrary `ease-[cubic-bezier(0.23,1,0.32,1)]` — both produce the same curve.

## Steps

1. In `site/src/components/Navbar.jsx`, remove the `{open && (` / `)}` wrapper around the mobile menu `div` (lines 53 and 70) so the `div` always renders.
2. Replace that `div`'s className with the target className above, keeping every inner element (the `ul`, links, and "Start now" pill) byte-identical.
3. Keep the existing `onClick={() => setOpen(false)}` handlers on the links: closing on navigation must still work.

## Boundaries

- Do NOT touch the desktop nav, the announcement bar, or the hamburger button (except nothing: its `onClick` already toggles `open`).
- Do NOT add a new state variable, effect, or dependency; this is a class-toggle transition, not a mount animation.
- Do NOT change the panel's inner markup or copy.
- If the cited block does not match the code you find (drift since commit 06028d9), STOP and report instead of improvising.

## Verification

- **Mechanical**: `cd site && npx vite build` passes.
- **Feel check**: dev server at a narrow viewport (< 1024px, e.g. 390px):
  - Tapping the hamburger fades/slides the panel in over ~200ms, decelerating (fast start, soft landing).
  - The panel overlays the hero instead of pushing it down.
  - Spam-tapping the hamburger reverses the panel mid-motion with no restart-from-zero flicker.
  - With the panel closed, the hero CTA button directly under the header area is still clickable (the invisible panel must not block taps).
  - DevTools > Rendering > emulate `prefers-reduced-motion: reduce`: the panel fades without vertical movement.
- **Done when**: all five observations hold and the build passes.

# Animation Improvement Plans

Audit of the TP Lim site's motion (commit `06028d9`), produced by the `improve-animations` skill. Plans are self-contained; any agent can execute one without reading the audit conversation. Run with `improve-animations execute <plan>` or hand a plan file to any executor.

## Plans

| # | Plan | Severity | Status |
| --- | --- | --- | --- |
| 001 | [Gate smooth scrolling behind prefers-reduced-motion](001-reduced-motion-smooth-scroll.md) | HIGH | DONE |
| 002 | [Strong ease-out token; apply to image zooms and reveal keyframe](002-motion-tokens-and-zoom-easing.md) | MEDIUM | DONE |
| 003 | [Animate the mobile menu with an interruptible transition](003-mobile-menu-transition.md) | MEDIUM | DONE |
| 004 | [Stagger the poster carousel and shop grid entrances](004-stagger-card-grids.md) | LOW | DONE |

## Recommended execution order

1. **001** — accessibility fix, zero visual risk, independent.
2. **002** — establishes the `--ease-out` token that 003 and 004 can reference.
3. **003** — uses the same curve as 002 (inlined as an arbitrary value, so it does not strictly depend on it).
4. **004** — extends the `Reveal` component; independent of 003.

## Dependencies

- 003 and 004 both inline `cubic-bezier(0.23, 1, 0.32, 1)` so they can run standalone, but if 002 has landed they should use the `ease-out` utility / `var(--ease-out)` instead (each plan notes this).
- No plan depends on 001.

## Not planned (noted for later)

- **Shop filter swap teleports** — switching category filters swaps the product grid instantly; a ~150ms opacity fade on the grid would soften it. Low value until the shop has more products.
- **Hero first-load entrance** — a one-shot fade-up of headline, CTA, and next-event card on initial load is an allowed delight moment (first impression, rare). Deliberately skipped to keep LCP simple; revisit if desired.
- **Nav dropdown menus** — the carets imply dropdowns that don't exist yet. When built, they should scale from ~0.96 at the trigger's origin over 150-250ms ease-out, never from `scale(0)`.

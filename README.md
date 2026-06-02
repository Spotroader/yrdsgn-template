# YuruDesign Template — Design System

Impeccable-inspired product register + AI-Taste `gsap-interactions` skill.

**Baseline milestone:** [YuruDesign 1](docs/YURUDESIGN-1.md) — git tag `yurudesign-1`

## Stack
- **impeccable.css** — shared tokens, grain, sidebar, preview frames, shop grid
- **GSAP 3.12** — scroll scenes, orb drift, stagger reveals
- **data.js** — shared catalog

## Pages
| File | Role |
|------|------|
| `experience.html` | Primary cinematic showcase (dark, pinned scroll) |
| `category.html` | Category listing with sidebar rail |
| `product.html` | PDP with preview-frame hero |
| `index.html` | Homepage (warm light panel + impeccable accent) |

## Preview
```bash
cd yurudesign-template && python3 -m http.server 8777
```
- http://localhost:8777/experience.html
- http://localhost:8777/category.html?cat=tv
- http://localhost:8777/product.html
- http://localhost:8777/index.html

## Skills
- `skills/impeccable-safe/` — **docs-only** Impeccable (design rules, `/polish` `/audit` `/typeset`; no Node scripts). Security audit: ✅ PASS. See `SAFE-BUILD.md`.
- `skills/impeccable/` — redirect stub (full upstream had live-server scripts; removed)
- `skills/gsap-interactions/SKILL.md` — AI-Taste (GSAP scroll, grain, orbs)
- `skills/emil-design-eng/SKILL.md` — Emil Kowalski (UI polish, animation restraint)

Global install: `~/.cursor/skills/impeccable-safe/` (same safe build)

## Theme
- `theme.js` — dark/light toggle, `localStorage` key `yuru-theme`, system preference fallback
- Toggle: sidebar (experience/category) or header (index/product)
- Emil-style ~280ms ease-out color transitions (respects `prefers-reduced-motion`)

## Design tokens
- Background: `#09090b` (experience/category) / `#faf9f7` (index)
- Accent: `#e8954a` (warm amber from product photography)
- Display: Fraunces · UI: Plus Jakarta Sans · Labels: IBM Plex Mono
- Grain overlay on all pages via `body::before`

# YuruDesign 1 — baseline milestone

**Tag:** `yurudesign-1`  
**Date:** 2026-06-01  
**Status:** Approved working baseline — do not regress without explicit request.

## What this version is

First stable cinematic shop template: index hero, experience scroll, category rail, product page, shared catalog.

## Pages

| Page | State |
|------|--------|
| `index.html` | Hero video vitrine (16:9), flex layout fixed, edge-to-edge mobile |
| `experience.html` | Lenis + GSAP pinned scenes, sol kategori rail çalışır |
| `category.html` | Sol rail + ürün grid, `?cat=` routing |
| `product.html` | Sinematik PDP hero |

## Experience (critical fixes in v1)

- Sol kategori seçimi: TDZ fix (`setActive` after `let activeIdx`)
- Pin hizası: `pinReparent` + `alignPinnedScene` (rail 260px, no 520px drift)
- Vitrine: larger grid (0.48 / 1.52), height up to 74vh
- Geçişler: pin scroll 172% (was 240%), tighter exit timeline, z-index stack per scene
- Fallback scroll when ScrollTrigger unavailable

## Shared

- `data.js` — catalog, categories, products
- `impeccable.css` — sidebar z-index 120, rail tokens
- `skills/surgical-fix/` — regresyonsuz düzeltme checklist

## Preview

```bash
cd yurudesign-template && python3 -m http.server 8777
```

- http://localhost:8777/experience.html
- http://localhost:8777/category.html?cat=tv
- http://localhost:8777/index.html

## Restore this baseline

```bash
git checkout yurudesign-1
# or
git checkout main && git reset --hard yurudesign-1
```

# Hero

## Metadata
- **Category:** Organism
- **File:** `app/src/components/organisms/Hero/`
- **Status:** Stable

## Overview
Full-height landing hero with video background, word-stacked title, overlay tags, and a 4-column card row at bottom.

**Height:** `calc(100svh - 40px)`.

## Anatomy
```
[.image: video bg + gradient overlay]
  [.heroTopRow: Badge tags (year, city)]
  [.heroBottom]
    [.heroText: stacked word spans]
    [.heroSubtitle]
[.grid: 4 cards]
  [.header: title + "view all"]
  [.card × 3: event cards]
```

## Tokens used (key)
| Property | Token |
|---|---|
| `border-radius` | `--radius-lg` |
| `background` (image) | `--color-bg-inverse` |
| Gradient | `--color-black-80` → `--color-black-25` → transparent |
| `z-index` (overlays) | `--z-above` |
| `font-size` (hero word) | `--text-hero-size` |
| `letter-spacing` | `--text-hero-track` |
| `font-weight` | `--font-weight-regular` |
| `color` (hero word) | `--color-text-inverse` |
| `color` (accent word) | `--color-accent` |
| `color` (subtitle) | `--color-text-inverse-dim` |
| `color` (label) | `--color-text-inverse-muted` |
| `background` (tag) | `--color-surface-glass` |
| `color` (tag) | `--color-text-inverse-sub` |
| `transition` (card) | `--transition-fast` |
| `border-color` (card hover) | `--color-surface-glass-hover` |
| `color` (arrow) | `--color-text-inverse-label` |
| Card height | 170px (structural) |
| Grid gap | `--space-3` |

## Cross-references
- [Badge](Badge.md) — overlay tags

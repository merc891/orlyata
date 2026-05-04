# PageHero

## Metadata
- **Category:** Organism
- **File:** `app/src/components/organisms/PageHero/`
- **Status:** Stable

## Overview
Dark hero block for inner pages. 2fr/1fr grid. Left: label + fluid display title + description. Right: aside slot (Stats badges or similar).

## Anatomy
```
[.hero dark bg 2fr/1fr grid]
  [.body: label + title + description]
  [.aside: slot for badges/stats]
```

## Tokens used
| Property | Token |
|---|---|
| `background` | `--color-bg-inverse` |
| `border-radius` | `--radius-lg` |
| `padding` | `--space-8` |
| `min-height` | 360px (structural) |
| `color` (label) | `--color-text-inverse-muted` |
| `color` (title) | `--color-text-inverse` |
| `font-size` (title) | `clamp(48px, 6vw, 96px)` |
| `color` (description) | `--color-text-inverse-dim` |

## Props/API
| Prop | Type |
|---|---|
| `label` | string |
| `title` | string |
| `description` | string |

## Cross-references
- [About page](../pages/About.md)
- [Stats](Stats.md) — used in aside slot

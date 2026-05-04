# Footer

## Metadata
- **Category:** Organism
- **File:** `app/src/components/organisms/Footer/`
- **Status:** Stable

## Overview
Dark page footer with 5/2/2/3 column grid: brand, two nav columns, contacts.

## Anatomy
```
[.footer dark bg]
  [.grid 5fr 2fr 2fr 3fr]
    [.brand: logo, tagline, copy]
    [.col: nav list × 2]
    [.colWide: address, contacts, legal]
```

## Tokens used (key)
| Property | Token |
|---|---|
| `background` | `--color-bg-inverse` |
| `border-radius` | `--radius-lg` |
| `padding` | `--space-8` |
| `gap` | `--space-8` |
| `color` (tagline) | `--color-text-inverse` |
| `color` (copy) | `--color-text-inverse-muted` |
| `color` (colLabel) | `--color-text-inverse-label` |
| `color` (link) | `--color-text-inverse-dim` |
| `color` (link hover) | `--color-text-inverse` |
| `color` (address) | `--color-text-inverse-dim` |
| `color` (legal) | `--color-text-inverse-label` |
| `color` (legal hover) | `--color-text-inverse-dim` |
| `transition` | `--transition-fast` |
| Logo color | `--color-accent` |
| Logo size | 40px (structural) |

## Cross-references
- [About](../pages/About.md), Dashboard pages — uses Footer at bottom

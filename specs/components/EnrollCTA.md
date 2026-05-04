# EnrollCTA

## Metadata
- **Category:** Organism
- **File:** `app/src/components/organisms/EnrollCTA/`
- **Status:** Stable

## Overview
Full-width green CTA block with a 1fr/1fr grid: left side has label + heading, right side has subtitle + button.

## Anatomy
```
[.cta green bg]
  [.left: label + heading]
  [.right: subtitle + Button]
```

## Tokens used
| Property | Token |
|---|---|
| `background` | `--color-accent` |
| `border-radius` | `--radius-lg` |
| `padding` | `--space-8` |
| `min-height` | 240px (structural) |
| `color` (label) | `--color-text-muted-on-light` |
| `color` (heading) | `--color-text-primary` |
| `color` (subtitle) | `--color-text-sub-on-light` |

## Code example
```tsx
<EnrollCTA />
```

## Cross-references
- [Button](Button.md) — primary CTA action
- [About page](../pages/About.md)

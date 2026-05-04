# PhotosVideos

## Metadata
- **Category:** Organism
- **File:** `app/src/components/organisms/PhotosVideos/`
- **Status:** Stable

## Overview
Gallery + video section. Split into:
- Top: white card with 4-column photo grid (440px height) and nav controls.
- Bottom: 2fr/1fr split — dark video section (3 cards) + green CTA block.

## Tokens used (key)
| Property | Token |
|---|---|
| Gallery bg | `--color-bg-default` |
| Gallery border | `--color-border` |
| Gallery nav border | `--color-border` |
| Gallery nav hover | `--color-surface-hover` |
| Photo gradient | `--color-black-75` → transparent |
| Date badge bg | `--color-surface-glass-hover` |
| Video section bg | `--color-bg-inverse` |
| Label color | `--color-text-inverse-muted` |
| Video thumb bg | `--color-surface-thumb` |
| Play button bg | `--color-surface-play` |
| Duration badge bg | `--color-surface-scrim` |
| Platform color | `--color-text-inverse-label` |
| Platform hover | `--color-text-inverse-dim` |
| CTA bg | `--color-accent` |
| CTA label | `--color-text-muted-on-light` |
| Photo card height | 440px (structural) |
| Video thumb height | 180px (structural) |
| CTA min-height | 260px (structural) |
| Transitions | `--transition-fast`, `--transition-slow` |
| z-index overlays | `--z-above` |

## Cross-references
- [Badge](Badge.md) — date badges
- [Button](Button.md) — CTA action

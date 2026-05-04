# Geography

## Metadata
- **Category:** Organism
- **File:** `app/src/components/organisms/Geography/`
- **Status:** Stable

## Overview
Dark card listing countries where the choir has performed. Lives in a 1/3 column alongside AchievementsTeaser.

## Anatomy
```
[.section dark card full-height]
  [.label]
  [.heading]
  [.description]
  [.countries: flex-wrap of .country pills]
```

## Tokens used
| Property | Token |
|---|---|
| `background` | `--color-bg-inverse` |
| `border-radius` | `--radius-lg` |
| `padding` | `--space-7` |
| `color` (label) | `--color-text-inverse-muted` |
| `color` (heading) | `--color-text-inverse` |
| `color` (description) | `--color-text-inverse-sub` |
| `background` (country pill) | `--color-surface-glass` |
| `border-radius` (pill) | `--radius-full` |
| `color` (pill) | `--color-text-inverse-soft` |

## Cross-references
- [AchievementsTeaser](AchievementsTeaser.md) — sibling in split layout

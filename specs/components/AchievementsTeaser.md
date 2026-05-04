# AchievementsTeaser

## Metadata
- **Category:** Organism
- **File:** `app/src/components/organisms/AchievementsTeaser/`
- **Status:** Stable

## Overview
White card with top-5 competition results in a `64px 200px 1fr` table grid.

## Anatomy
```
[.section white card]
  [.header: label + heading + "view all"]
  [.list]
    [.row × 5: year | rank | event]
```

## Tokens used
| Property | Token |
|---|---|
| Section bg | `--color-bg-default` |
| Section border | `--color-border` |
| Row divider | `--color-divider` |
| `color` (year) | `--color-text-secondary` |
| `color` (rank) | `--color-text-primary` |
| `color` (event) | `--color-text-secondary` |
| `font-size` (year) | `--text-lg-size` |
| `transition` | `--transition-fast` |

## Cross-references
- [Geography](Geography.md) — sibling in split layout

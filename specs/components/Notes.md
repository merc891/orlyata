# Notes

## Metadata
- **Category:** Organism
- **File:** `app/src/components/organisms/Notes/`
- **Status:** Stable

## Overview
Sheet music catalogue. White card with display heading, scrollable table of 20 pieces: №, title + icon, composer, voice badge, download link.

## Anatomy
```
[.section white card]
  [.sectionHeader: heading + "view all"]
  [.table]
    [.row × N: num | titleCell | composer | voice | download]
```

## Grid columns
`40px 1fr 160px auto 32px` (structural — aligns track list)

## Tokens used (key)
| Property | Token |
|---|---|
| Section bg | `--color-bg-default` |
| Section border | `--color-border` |
| Row height | 49px (structural) |
| Row divider | `--color-divider` |
| Voice badge bg | `--color-bg-muted` |
| `color` (num, composer) | `--color-text-secondary` |
| `color` (title) | `--color-text-primary` |
| `transition` | `--transition-fast` |

## Cross-references
- [Badge](Badge.md) — voice pill style

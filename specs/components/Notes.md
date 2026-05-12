# Notes

## Metadata
- **Category:** Organism
- **File:** `app/src/components/organisms/Notes/`
- **Status:** Stable

## Overview
Sheet-music download list. Header with title + view-all link, then a sequence of [NoteRow](NoteRow.md) molecules.

## Anatomy
```
.section (column, gap = --space-4)
  .header
    h2 .heading
    a .viewAll
  .list
    NoteRow × N
```

## Tokens used (key)
| Property | Token |
|---|---|
| Title-to-content gap | `--space-4` |
| Heading `font-size` | `--text-display-size` |
| Heading `font-weight` | `--font-weight-medium` |
| Link `color` | `--color-text-primary` |
| Link `transition` | `--transition-fast` |

## Cross-references
- [NoteRow](NoteRow.md) — list item
- [Tag](Tag.md) — used inside NoteRow for category

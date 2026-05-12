# Hero

## Metadata
- **Category:** Organism
- **File:** `app/src/components/organisms/Hero/`
- **Status:** Stable

## Overview
Two-column hero on the home page: a tall video tile on the left and a content column on the right with the page heading, an "ближайшие события" sub-header and two [EventCard](EventCard.md) tiles.

## Anatomy
```
.hero (grid 1fr / 1fr, gap = --space-4)
  .video (aspect 798/758)
    <video> autoplay-muted-loop
  .column
    .heading  // hero-size lowercase, 4 lines
    .eventsHeader (label + viewAll link)
    .events (2 EventCards, gap = --space-4)
```

## Tokens used (key)
| Property | Token |
|---|---|
| Section gap | `--space-4` |
| Video radius | `--radius-lg` |
| Heading `font-size` | `--text-hero-size` |
| Heading `line-height` | `--text-hero-line` |
| Heading `letter-spacing` | `--text-hero-track` |
| Heading `font-weight` | `--font-weight-medium` |
| Events label `font-size` | `--text-display-size` |
| Link `color` | `--color-text-primary` |
| Link `transition` | `--transition-fast` |
| Events row gap | `--space-4` |

## Layout rules
- Video and right column have a 16 px gap (`--space-4`).
- The two EventCards have a 16 px gap (`--space-4`).
- Heading is rendered in lowercase (`text-transform: lowercase`).

## Responsive
| Breakpoint | Behaviour |
|---|---|
| ≤ 1279 | Single column: video stacks above content |
| < 768 | EventCards stack vertically |

## Cross-references
- [EventCard](EventCard.md)

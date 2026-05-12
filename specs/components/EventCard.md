# EventCard

## Metadata
- **Category:** Molecule
- **File:** `app/src/components/molecules/EventCard/`
- **Status:** New

## Overview
Compact teaser card for an upcoming event or achievement. Renders as a link if `href` is provided.

## Anatomy
```
<a class="card">
  <div class="head">
    <span class="date">{date}</span>
    <span class="icon">{icon}</span>
  </div>
  <h3 class="title">{title}</h3>
</a>
```

## Tokens used
| Property | Token |
|---|---|
| `height` | `170px` (fixed) |
| `padding` | `--space-6` (top, x), `--space-4` (bottom) |
| `background` | `--color-bg-default` |
| `border-radius` | `--radius-lg` |
| date `font-size` | `--text-body-md-size` |
| date `color` | `--color-text-secondary` |
| title `font-size` | `--text-body-lg-size` |
| title `color` | `--color-text-primary` |
| hover `background` | `--color-surface-hover` |
| `transition` | `--transition-fast` |

## Props/API
| Prop | Type | Default |
|---|---|---|
| `date` | string | required |
| `title` | string | required |
| `icon` | ReactNode | — |
| `href` | string | — |

## States
- Default — white card.
- Hover (link) — light grey surface.

## Code example
```tsx
<EventCard date="18 апреля" title="«Крылатое сердце» — большой весенний концерт" icon={<MasksIcon />} href="/events/spring-concert" />
```

## Cross-references
- [Hero](Hero.md) — places two EventCards under the headline

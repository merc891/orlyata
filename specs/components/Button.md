# Button

## Metadata
- **Category:** Atom
- **File:** `app/src/components/atoms/Button/`
- **Status:** Stable

## Overview
Primary interactive element. Renders as `<button>` or `<a>` (via `href` prop).

**Use when:** triggering an action or navigating to a primary destination.
**Don't use when:**
- linking inline within text → use [Link](Link.md)
- labelling a date/category/filter chip → use [Tag](Tag.md)

## Anatomy
`<button class="button [variant]">icon? label icon?</button>`

Height is fixed at 64 px. Children may include a leading or trailing icon.

## Tokens used
| Property | Token |
|---|---|
| `height` | `64px` (fixed) |
| `padding` | `--space-3` / `--space-6` |
| `gap` | `--space-1` |
| `border-radius` | `--radius-lg` |
| `font-family` | `--font-body` |
| `font-size` | `--text-body-md-size` |
| `line-height` | `--text-body-md-line` |
| `letter-spacing` | `--text-body-md-track` |
| `font-weight` | `--font-weight-regular` |
| `transition` | `--transition-fast` |
| `background` (primary) | `--color-bg-inverse` |
| `color` (primary) | `--color-text-inverse` |
| `background` (secondary) | `transparent` |
| `color` (secondary) | `--color-text-primary` |
| `border` (secondary) | `1px solid --color-border-strong` |

## Props/API
| Prop | Type | Values | Default |
|---|---|---|---|
| `variant` | string | `"primary"` \| `"secondary"` | `"primary"` |
| `children` | ReactNode | — | — |
| `onClick` | () => void | — | — |
| `href` | string | — | — |

## Variants
- **primary** — filled black, white text. Main CTA.
- **secondary** — outlined, transparent background, neutral-400 border, primary text. Companion action.

> The pre-2026 `ghost` variant has been merged into `secondary`. The pre-2026 muted-pill `secondary` has moved to its own atom: see [Tag](Tag.md).

## States
| State | Primary | Secondary |
|---|---|---|
| Default | Filled black | Outlined, transparent |
| Hover | `opacity: 0.85` | Fills black: `background → --color-bg-inverse`, `color → --color-text-inverse`, `border-color → --color-bg-inverse` |
| Focus | inherit browser focus (add `--shadow-focus` when needed) | same |
| Disabled | Not yet implemented | Not yet implemented |

## Code example
```tsx
<Button variant="primary">Записаться</Button>
<Button variant="secondary">Подробнее</Button>
```

## Cross-references
- [Tag](Tag.md) — non-action chips (dates, categories, filters)
- [Link](Link.md) — inline text links
- [EnrollCTA](EnrollCTA.md) — uses Button as primary CTA

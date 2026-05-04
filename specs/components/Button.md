# Button

## Metadata
- **Category:** Atom
- **File:** `app/src/components/atoms/Button/`
- **Status:** Stable

## Overview
Primary interactive element. Renders as `<button>` or `<a>` (via `as` prop or `href`).

**Use when:** triggering an action or navigating to a new page.
**Don't use when:** linking inline within text — use Link atom instead.

## Anatomy
`<button class="button [variant]">icon? label</button>`

## Tokens used
| Property | Token |
|---|---|
| `padding` | `--space-3` / `--space-5` |
| `gap` | `--space-2` |
| `border-radius` | `--radius-full` |
| `font-family` | `--font-body` |
| `font-size` | `--text-body-md-size` |
| `line-height` | `--text-body-md-line` |
| `letter-spacing` | `--text-body-md-track` |
| `font-weight` | `--font-weight-regular` |
| `transition` | `--transition-fast` |
| `background` (primary) | `--color-bg-inverse` |
| `color` (primary) | `--color-text-inverse` |
| `background` (secondary) | `--color-bg-muted` |
| `color` (secondary) | `--color-text-primary` |
| `border` (ghost) | `1px solid --color-text-primary` |

## Props/API
| Prop | Type | Values | Default |
|---|---|---|---|
| `variant` | string | `"primary"` \| `"secondary"` \| `"ghost"` | `"primary"` |
| `children` | ReactNode | — | — |

## States
| State | Behaviour |
|---|---|
| Default | Full opacity |
| Hover | `opacity: 0.85` |
| Focus | (inherit browser focus — add `--shadow-focus` when needed) |
| Disabled | Not yet implemented |

## Code example
```tsx
<Button variant="primary">Записаться</Button>
<Button variant="ghost">Подробнее</Button>
```

## Cross-references
- [Link](Link.md) — inline text links
- [EnrollCTA](EnrollCTA.md) — uses Button as primary CTA

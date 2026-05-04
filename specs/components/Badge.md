# Badge

## Metadata
- **Category:** Atom
- **File:** `app/src/components/atoms/Badge/`
- **Status:** Stable

## Overview
Inline label for tagging content. Used for years, categories, geographical tags, voice parts.

**Use when:** labelling a piece of content with a short word or phrase.
**Don't use when:** the label needs interaction — use Button instead.

## Anatomy
`<span class="badge [variant]">text</span>`

## Tokens used
| Property | Token |
|---|---|
| `padding` | `--space-1` / `--space-2` / `--space-3` |
| `border-radius` | `--radius-full` |
| `font-size` | `--text-body-sm-size` |
| `line-height` | `--text-body-sm-line` |
| `letter-spacing` | `--text-body-sm-track` |
| `background` (default) | `--color-bg-muted` |
| `color` (default) | `--color-text-primary` |
| `background` (inverse) | `--color-surface-glass` |
| `color` (inverse) | `--color-text-inverse-sub` |
| `background` (overlay) | `--color-surface-overlay` |
| `color` (overlay) | `--color-text-primary` |

## Props/API
| Prop | Type | Values | Default |
|---|---|---|---|
| `tone` | string | `"default"` \| `"inverse"` \| `"overlay"` | `"default"` |
| `children` | ReactNode | — | — |

## States
- No interactive states (not clickable by default).

## Code example
```tsx
<Badge tone="default">Soprano</Badge>
<Badge tone="inverse">2005</Badge>
<Badge tone="overlay">г. Зеленоград</Badge>
```

## Cross-references
- [Button](Button.md) — for interactive labels
- [NavItem](NavItem.md) — uses similar pill shape

# Link

## Metadata
- **Category:** Atom
- **File:** `app/src/components/atoms/Link/`
- **Status:** Stable

## Overview
Inline text link. Renders as `<a>`. Always underlined, inherits parent color, dims to 70% by default.

**Use when:** linking inline within body text or as a subtle "view all" action.
**Don't use when:** the action is a primary CTA — use Button instead.

## Anatomy
`<a class="link">icon? text</a>`

## Tokens used
| Property | Token |
|---|---|
| `gap` | `--space-1` |
| `font-size` | `--text-body-md-size` |
| `line-height` | `--text-body-md-line` |
| `letter-spacing` | `--text-body-md-track` |
| `transition` | `--transition-fast` |
| `color` | `inherit` |
| `opacity` | 0.7 → 1 on hover |

## States
| State | Opacity |
|---|---|
| Default | 0.7 |
| Hover | 1.0 |

## Code example
```tsx
<Link href="/repertoire">Весь репертуар →</Link>
```

## Cross-references
- [Button](Button.md) — for primary/secondary actions

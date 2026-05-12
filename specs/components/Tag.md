# Tag

## Metadata
- **Category:** Atom
- **File:** `app/src/components/atoms/Tag/`
- **Status:** New

## Overview
Static or selectable chip used to label a date, category, platform, or filter. Renders as `<span>`, `<a>` (with `href`), or `<button>` (with `onClick`).

**Use when:** displaying a meta value (date, category, platform link, filter token) next to other content.
**Don't use when:**
- the element triggers a primary action → use [Button](Button.md)
- it is inline body text → use [Link](Link.md)

## Anatomy
`<span class="tag [size]">label</span>`

## Sizes
- **md** — 64 px tall. Used in main content (date selector under hero, platform chips in MediaCard).
- **sm** — 26 px tall. Used inline in dense rows (NoteRow category column).

## Tokens used
| Property | Token |
|---|---|
| `background` | `--color-bg-muted` |
| `color` | `--color-text-secondary` |
| `border-radius` (md) | `--radius-lg` |
| `border-radius` (sm) | `--radius-md` |
| `padding` (md) | `--space-3` / `--space-6` |
| `padding` (sm) | `--space-1` / `--space-2` |
| `gap` | `--space-1` |
| `font-family` | `--font-body` |
| `font-size` (md) | `--text-body-md-size` |
| `font-size` (sm) | `--text-body-sm-size` |
| `transition` | `--transition-fast` |
| hover `background` | `--color-surface-hover` |
| hover `color` | `--color-text-primary` |

## Props/API
| Prop | Type | Values | Default |
|---|---|---|---|
| `size` | string | `"sm"` \| `"md"` | `"md"` |
| `children` | ReactNode | — | — |
| `href` | string | — | — |
| `onClick` | () => void | — | — |

## States
| State | Span (static) | Link / Button |
|---|---|---|
| Default | Muted bg, **secondary** text | Muted bg, **primary** text |
| Hover | — (no affordance) | Inverse bg (`--color-bg-inverse`), inverse text (`--color-text-inverse`) |

## Code example
```tsx
<Tag>23 мая</Tag>
<Tag href="https://rutube.ru/...">RuTube ↗</Tag>
<Tag size="sm">Старший хор</Tag>
```

## Cross-references
- [Button](Button.md) — for action triggers
- [MediaCard](MediaCard.md) — uses Tag for platform/date chips
- [NoteRow](NoteRow.md) — uses Tag size="sm" for category

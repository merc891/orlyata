# TeacherCard

## Metadata
- **Category:** Molecule
- **File:** `app/src/components/molecules/TeacherCard/`
- **Status:** Stable (placeholder photos)

## Overview
Card displaying a single teacher: photo (or initials placeholder), name, role.

**Use when:** listing teaching staff in a grid.

## Anatomy
```
[photo / initials]
[name]
[role]
```

## Tokens used
| Property | Token |
|---|---|
| `padding` | `--space-6` |
| `gap` (card) | `--space-5` |
| `gap` (info) | `--space-2` |
| `border` | `1px solid --color-border` |
| `border-radius` | `--radius-lg` |
| `background` (card) | `--color-bg-default` |
| `background` (photo placeholder) | `--color-bg-muted` |
| `border-radius` (photo) | `--radius-md` |
| `font-size` (initials) | `--text-display-size` |
| `letter-spacing` (initials) | `--text-display-track` |
| `color` (initials) | `--color-text-placeholder` |
| `font-size` (name) | `--text-body-lg-size` |
| `color` (name) | `--color-text-primary` |
| `font-size` (role) | `--text-body-sm-size` |
| `color` (role) | `--color-text-secondary` |

## Props/API
| Prop | Type | Description |
|---|---|---|
| `name` | string | Full name |
| `role` | string | Position / title |
| `photo` | string? | Image URL (optional) |

## States
No interactive states.

## Code example
```tsx
<TeacherCard name="Иван Карпман" role="Художественный руководитель" />
```

## Cross-references
- [Teachers](Teachers.md) — grid parent

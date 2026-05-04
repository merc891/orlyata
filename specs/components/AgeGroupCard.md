# AgeGroupCard

## Metadata
- **Category:** Molecule
- **File:** `app/src/components/molecules/AgeGroupCard/`
- **Status:** Stable

## Overview
Card for one age group: age badge, heading, description.

## Anatomy
```
[Badge: age range]
[Heading XL: group name]
[Body text: description]
```

## Tokens used
| Property | Token |
|---|---|
| `padding` | `--space-6` |
| `border` | `1px solid --color-border` |
| `border-radius` | `--radius-lg` |
| `background` | `--color-bg-default` |
| `min-height` | 240px (structural) |

## Props/API
| Prop | Type |
|---|---|
| `age` | string |
| `name` | string |
| `description` | string |

## Code example
```tsx
<AgeGroupCard age="5–8 лет" name="Приготовительный" description="Знакомство с хоровым пением..." />
```

## Cross-references
- [AgeGroups](AgeGroups.md) — grid parent
- [Badge](Badge.md) — age chip

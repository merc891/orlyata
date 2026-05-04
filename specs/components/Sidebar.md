# Sidebar

## Metadata
- **Category:** Organism
- **File:** `app/src/components/organisms/Sidebar/`
- **Status:** Stable

## Overview
Fixed left navigation panel. Contains logo, nav items, divider, and footer nav item.

**Width:** 239px (structural constant — matches `margin-left` on page `<main>`).

## Anatomy
```
[Header: logo + name]
[Nav: NavItem list]
[Divider]
[Footer: secondary NavItem]
```

## Tokens used
| Property | Token |
|---|---|
| `background` | `--color-bg-default` |
| `border-right` | `1px solid --color-border` |
| `padding-bottom` | `--space-4` |
| `height` (header) | 76px (structural) |
| `gap` (header) | `--space-2` |
| `padding` (header) | `--space-6` / `--space-4` |
| `width` / `height` (logo) | 28px (structural) |
| `color` (logo) | `--color-text-primary` |
| `font-size` (logo name) | `--text-body-lg-size` |
| `color` (logo name) | `--color-text-primary` |
| `font-weight` (logo name) | `--font-weight-regular` |
| `gap` (nav) | 2px (structural) |
| `padding` (nav) | `--space-2` / `--space-3` |

## Cross-references
- [NavItem](NavItem.md) — navigation entries

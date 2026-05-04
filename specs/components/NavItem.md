# NavItem

## Metadata
- **Category:** Molecule
- **File:** `app/src/components/molecules/NavItem/`
- **Status:** Stable

## Overview
Single navigation entry in the Sidebar. Uses react-router NavLink for active state.

## Anatomy
`<NavLink class="item [active]"><icon> label</NavLink>`

## Tokens used
| Property | Token |
|---|---|
| `gap` | `--space-2` |
| `padding` | `--space-2` / `--space-3` |
| `border-radius` | `--radius-sm` |
| `color` (resting) | `--color-text-nav` |
| `font-size` | `--text-body-md-size` |
| `line-height` | `--text-body-md-line` |
| `letter-spacing` | `--text-body-md-track` |
| `transition` | `--transition-fast` |
| `background` (hover/active) | `--color-bg-muted` |
| `color` (hover/active) | `--color-text-primary` |

## Props/API
| Prop | Type | Description |
|---|---|---|
| `to` | string | Route path |
| `icon` | ReactNode | SVG icon element |
| `label` | string | Display label |

## States
| State | Background | Color |
|---|---|---|
| Resting | transparent | `--color-text-nav` |
| Hover | `--color-bg-muted` | `--color-text-primary` |
| Active | `--color-bg-muted` | `--color-text-primary` |

## Code example
```tsx
<NavItem to="/" icon={<HomeIcon />} label="Главная" />
<NavItem to="/about" icon={<InfoIcon />} label="О капелле" />
```

## Cross-references
- [Sidebar](Sidebar.md) — parent container

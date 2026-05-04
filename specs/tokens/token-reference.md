# Token Reference

Master map of every CSS custom property in `tokens.css`.

---

## Colors — Primitives

### Brand
| Variable | Value |
|---|---|
| `--color-brand-black` | `#0a0a0a` |
| `--color-brand-green` | `#6ccc47` |

### Neutral
| Variable | Value |
|---|---|
| `--color-neutral-white` | `#ffffff` |
| `--color-neutral-50` | `#f4f4f5` |
| `--color-neutral-400` | `#71717a` |
| `--color-neutral-950` | `#0a0a0a` |

### Alpha — white
| Variable | Value |
|---|---|
| `--color-white-8` | `rgba(255,255,255,0.08)` |
| `--color-white-15` | `rgba(255,255,255,0.15)` |
| `--color-white-40` | `rgba(255,255,255,0.40)` |
| `--color-white-50` | `rgba(255,255,255,0.50)` |
| `--color-white-60` | `rgba(255,255,255,0.60)` |
| `--color-white-70` | `rgba(255,255,255,0.70)` |
| `--color-white-80` | `rgba(255,255,255,0.80)` |
| `--color-white-90` | `rgba(255,255,255,0.90)` |
| `--color-white-95` | `rgba(255,255,255,0.95)` |

### Alpha — black
| Variable | Value |
|---|---|
| `--color-black-5` | `rgba(0,0,0,0.05)` |
| `--color-black-7` | `rgba(0,0,0,0.07)` |
| `--color-black-25` | `rgba(0,0,0,0.25)` |
| `--color-black-40` | `rgba(0,0,0,0.40)` |
| `--color-black-50` | `rgba(0,0,0,0.50)` |
| `--color-black-60` | `rgba(0,0,0,0.60)` |
| `--color-black-70` | `rgba(0,0,0,0.70)` |
| `--color-black-75` | `rgba(0,0,0,0.75)` |
| `--color-black-80` | `rgba(0,0,0,0.80)` |

---

## Colors — Semantic

### Background
| Variable | References | Description |
|---|---|---|
| `--color-bg-default` | neutral-white | Card / sidebar surface |
| `--color-bg-muted` | neutral-50 | Page body |
| `--color-bg-inverse` | brand-black | Dark cards, footer |
| `--color-accent` | brand-green | CTA, accent |

### Text on light surfaces
| Variable | References | Description |
|---|---|---|
| `--color-text-primary` | brand-black | Default body text |
| `--color-text-secondary` | neutral-400 | Metadata, captions |
| `--color-text-placeholder` | black-25 | Photo placeholder initials |
| `--color-text-nav` | black-80 | Sidebar nav resting |
| `--color-text-muted-on-light` | black-50 | Label on green CTA |
| `--color-text-sub-on-light` | black-70 | Sub-text on green CTA |

### Text on dark surfaces
| Variable | References | Description |
|---|---|---|
| `--color-text-inverse` | neutral-white | Primary text on dark |
| `--color-text-inverse-label` | white-40 | Dim label on dark |
| `--color-text-inverse-muted` | white-50 | Secondary on dark |
| `--color-text-inverse-sub` | white-60 | Tag / badge text |
| `--color-text-inverse-dim` | white-70 | Links, descriptions on dark |
| `--color-text-inverse-soft` | white-80 | Country pills |

### Borders & dividers
| Variable | References | Description |
|---|---|---|
| `--color-border` | black-7 | Card borders |
| `--color-border-subtle` | white-8 | Subtle border on dark |
| `--color-divider` | black-7 | Table row separator |

### Surfaces & overlays
| Variable | References | Description |
|---|---|---|
| `--color-surface-glass` | white-8 | Dark glass badge/tag |
| `--color-surface-glass-hover` | white-15 | Glass hover / date badge |
| `--color-surface-hover` | black-5 | Hover on white card |
| `--color-surface-overlay` | white-90 | Tooltip / popup |
| `--color-surface-play` | white-95 | Play button circle |
| `--color-surface-thumb` | black-40 | Video thumbnail overlay |
| `--color-surface-scrim` | black-60 | Duration badge / lightbox |

---

## Spacing

| Variable | Value |
|---|---|
| `--space-0` | `0px` |
| `--space-1` | `4px` |
| `--space-2` | `8px` |
| `--space-3` | `12px` |
| `--space-4` | `16px` |
| `--space-5` | `20px` |
| `--space-6` | `24px` |
| `--space-7` | `32px` |
| `--space-8` | `40px` |

---

## Typography

| Variable | Value |
|---|---|
| `--font-heading` | `'Gramatika', sans-serif` |
| `--font-body` | `'Gramatika', sans-serif` |
| `--font-weight-regular` | `400` |
| `--text-hero-size` | `96px` |
| `--text-hero-line` | `1` |
| `--text-hero-track` | `-1.92px` |
| `--text-display-size` | `44px` |
| `--text-display-line` | `40px` |
| `--text-display-track` | `-1.32px` |
| `--text-xl-size` | `36px` |
| `--text-xl-line` | `32px` |
| `--text-xl-track` | `-0.72px` |
| `--text-lg-size` | `24px` |
| `--text-lg-line` | `32px` |
| `--text-lg-track` | `-0.48px` |
| `--text-body-lg-size` | `18px` |
| `--text-body-lg-line` | `27px` |
| `--text-body-lg-track` | `-0.16px` |
| `--text-body-md-size` | `16px` |
| `--text-body-md-line` | `20.8px` |
| `--text-body-md-track` | `-0.16px` |
| `--text-body-sm-size` | `14px` |
| `--text-body-sm-line` | `21px` |
| `--text-body-sm-track` | `-0.16px` |

---

## Radius

| Variable | Value |
|---|---|
| `--radius-sm` | `10px` |
| `--radius-md` | `16px` |
| `--radius-lg` | `24px` |
| `--radius-full` | `9999px` |

---

## Shadow

| Variable | Value |
|---|---|
| `--shadow-card` | `0 1px 2px var(--color-black-7), 0 0 0 1px var(--color-black-7)` |
| `--shadow-modal` | `0 8px 32px var(--color-black-25)` |
| `--shadow-focus` | `0 0 0 3px rgba(108,204,71,0.4)` |

---

## Motion

| Variable | Value |
|---|---|
| `--duration-fast` | `0.15s` |
| `--duration-base` | `0.3s` |
| `--duration-slow` | `0.4s` |
| `--ease-default` | `ease` |
| `--transition-fast` | `var(--duration-fast) var(--ease-default)` |
| `--transition-base` | `var(--duration-base) var(--ease-default)` |
| `--transition-slow` | `var(--duration-slow) var(--ease-default)` |

---

## Z-index

| Variable | Value |
|---|---|
| `--z-above` | `1` |
| `--z-sticky` | `100` |
| `--z-overlay` | `200` |
| `--z-modal` | `300` |

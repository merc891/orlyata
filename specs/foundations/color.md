# Color

## Palette

### Brand
| Token | Value | Use |
|---|---|---|
| `--color-brand-black` | `#0a0a0a` | Primary UI black |
| `--color-brand-green` | `#6ccc47` | Accent / CTA |

### Neutral
| Token | Value | Use |
|---|---|---|
| `--color-neutral-white` | `#ffffff` | Base white |
| `--color-neutral-50` | `#f4f4f5` | Page background |
| `--color-neutral-400` | `#71717a` | Secondary text |
| `--color-neutral-950` | `#0a0a0a` | alias of brand-black |

### Alpha — white (for dark surfaces)
| Token | Alpha | Typical role |
|---|---|---|
| `--color-white-8` | 8% | Glass badge background |
| `--color-white-15` | 15% | Glass hover border, date badge |
| `--color-white-40` | 40% | Dimmed labels on dark |
| `--color-white-50` | 50% | Secondary metadata on dark |
| `--color-white-60` | 60% | Badge/tag text on dark |
| `--color-white-70` | 70% | Nav links, address on dark |
| `--color-white-80` | 80% | Country badge text |
| `--color-white-90` | 90% | Overlay/tooltip background |
| `--color-white-95` | 95% | Play button background |

### Alpha — black (for light surfaces)
| Token | Alpha | Typical role |
|---|---|---|
| `--color-black-5` | 5% | Hover state on white card |
| `--color-black-7` | 7% | Row dividers, borders |
| `--color-black-25` | 25% | Placeholder initials |
| `--color-black-40` | 40% | Video thumbnail overlay |
| `--color-black-50` | 50% | Muted label on accent |
| `--color-black-60` | 60% | Lightbox / scrim |
| `--color-black-70` | 70% | Sub-text on accent |
| `--color-black-75` | 75% | Photo card gradient end |
| `--color-black-80` | 80% | Nav item resting color |

## Semantic aliases (Layer 2)

### Background
| Token | References | When to use |
|---|---|---|
| `--color-bg-default` | white | Card / sidebar surface |
| `--color-bg-muted` | neutral-50 | Page body background |
| `--color-bg-inverse` | brand-black | Dark cards, footer, hero |
| `--color-accent` | brand-green | CTA block background |

### Text — light surfaces
| Token | References | When to use |
|---|---|---|
| `--color-text-primary` | brand-black | Body text |
| `--color-text-secondary` | neutral-400 | Metadata, captions |
| `--color-text-placeholder` | black-25 | Initials in empty photo slot |
| `--color-text-nav` | black-80 | Sidebar nav resting state |
| `--color-text-muted-on-light` | black-50 | Muted text on green accent |
| `--color-text-sub-on-light` | black-70 | Sub-text on green accent |

### Text — dark surfaces
| Token | References | When to use |
|---|---|---|
| `--color-text-inverse` | white | Primary text on dark |
| `--color-text-inverse-label` | white-40 | Dimmed metadata label |
| `--color-text-inverse-muted` | white-50 | Secondary info on dark |
| `--color-text-inverse-sub` | white-60 | Badge/tag text on dark |
| `--color-text-inverse-dim` | white-70 | Nav links, descriptions |
| `--color-text-inverse-soft` | white-80 | Country badges |

### Borders & dividers
| Token | References | When to use |
|---|---|---|
| `--color-border` | black-7 | Card borders, row separators |
| `--color-border-subtle` | white-8 | Subtle border on dark bg |
| `--color-divider` | black-7 | Table / list row separator |

### Surfaces & overlays
| Token | References | When to use |
|---|---|---|
| `--color-surface-glass` | white-8 | Dark glass badge/tag |
| `--color-surface-glass-hover` | white-15 | Glass hover border, date badge |
| `--color-surface-hover` | black-5 | Hover state on white card button |
| `--color-surface-overlay` | white-90 | Tooltip / popup background |
| `--color-surface-play` | white-95 | Play button circle |
| `--color-surface-thumb` | black-40 | Video thumbnail dark overlay |
| `--color-surface-scrim` | black-60 | Duration badge, lightbox |

## Rules
- Never use raw hex or rgba() outside `tokens.css`.
- Light surfaces → use `--color-text-*` aliases.
- Dark surfaces (`bg-inverse`) → use `--color-text-inverse-*` aliases.
- Accent surface → use `--color-text-muted-on-light` / `--color-text-sub-on-light`.

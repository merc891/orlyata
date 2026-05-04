# Elevation & Shadow

| Token | Value | Use |
|---|---|---|
| `--shadow-card` | `0 1px 2px var(--color-black-7), 0 0 0 1px var(--color-black-7)` | Subtle card lift |
| `--shadow-modal` | `0 8px 32px var(--color-black-25)` | Modal / drawer |
| `--shadow-focus` | `0 0 0 3px rgba(108,204,71,0.4)` | Keyboard focus ring (green) |

## Depth without shadows
Most depth in this design system is achieved through background color contrast, not box-shadows:
- Light card on muted page (`bg-default` on `bg-muted`)
- Dark inverse card (`bg-inverse`) stands out strongly on light background

Use `--shadow-card` sparingly — only when a card floats above content.
Use `--shadow-focus` on `:focus-visible` for all interactive elements.

## Z-index
| Token | Value | Use |
|---|---|---|
| `--z-above` | 1 | Elements positioned above siblings (hero text, z-index overlays within a card) |
| `--z-sticky` | 100 | Sticky headers |
| `--z-overlay` | 200 | Dropdown menus |
| `--z-modal` | 300 | Modals, lightboxes |

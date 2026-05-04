# Spacing

## Scale (4pt grid)

| Token | Value | Common use |
|---|---|---|
| `--space-0` | 0px | Reset / no gap |
| `--space-1` | 4px | Tight inline gap (tags, badge padding) |
| `--space-2` | 8px | Icon gap, list item gap |
| `--space-3` | 12px | Card grid gap, tight sections |
| `--space-4` | 16px | Column gap, internal padding |
| `--space-5` | 20px | Page padding, section gap (sm) |
| `--space-6` | 24px | Card padding, section gap (md) |
| `--space-7` | 32px | Card padding (lg), section outer gap |
| `--space-8` | 40px | Section padding, footer padding |

## Rules
- Every `padding`, `margin`, and `gap` must reference a `--space-*` token.
- Pixel values in layout (widths, heights, min-heights) are structural — not spacing — and may stay as fixed px if they map to a design fixture (e.g., sidebar width 239px, card height 170px).
- Use `clamp()` for fluid typography sizing; never for spacing.

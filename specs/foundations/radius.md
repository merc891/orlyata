# Border Radius

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 10px | NavItem hover, small tags, duration badge |
| `--radius-md` | 16px | Video thumbnails, photo placeholders |
| `--radius-lg` | 24px | Cards, sections, hero blocks, footer |
| `--radius-full` | 9999px | Badges, pills, nav buttons, avatar circles |

## Rules
- Never use raw `border-radius` values — always a `--radius-*` token.
- Outer containers → `--radius-lg`.
- Inner elements within containers → `--radius-md` or smaller.
- Pills and badges → `--radius-full`.

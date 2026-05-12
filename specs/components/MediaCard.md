# MediaCard

## Metadata
- **Category:** Molecule
- **File:** `app/src/components/molecules/MediaCard/`
- **Status:** New

## Overview
Caption block placed under a media tile (photo or video). Combines a horizontal stack of chips (date, platform links, category) with a title.

## Anatomy
```
<div class="card">
  <div class="chips">{chips}</div>
  <h3 class="title">{title}</h3>
</div>
```

`chips` accepts any combination of [Tag](Tag.md), [Button](Button.md), or [Link](Link.md) — typically Tag.

## Tokens used
| Property | Token |
|---|---|
| `gap` (card) | `--space-2` |
| `gap` (chips row) | `--space-1` |
| title `font-size` | `--text-lg-size` |
| title `font-weight` | `--font-weight-medium` |
| title `letter-spacing` | `--text-lg-track` |
| title `color` | `--color-text-primary` |

## Props/API
| Prop | Type | Default |
|---|---|---|
| `chips` | ReactNode | required |
| `title` | string | required |

## Code example
```tsx
<MediaCard
  chips={<>
    <Tag>23 мая</Tag>
    <Tag href="https://rutube.ru/...">RuTube ↗</Tag>
    <Tag href="https://vk.com/...">VK ↗</Tag>
  </>}
  title="Концерт в КЦ «Зеленоград»"
/>
```

## Cross-references
- [PhotosVideos](PhotosVideos.md) — uses MediaCard under each tile
- [Tag](Tag.md) — primary chip element

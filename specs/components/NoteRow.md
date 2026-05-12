# NoteRow

## Metadata
- **Category:** Molecule
- **File:** `app/src/components/molecules/NoteRow/`
- **Status:** New

## Overview
Tabular row in the sheet-music table: number, title with icon, composer, category tag, action icon. Renders as a link when `href` is provided.

## Anatomy
```
<div class="row">
  <span class="left">
    <span class="index">{padded number}</span>
    <span class="title">
      <span class="titleIcon">{icon}</span>
      <span class="titleText">{title}</span>
    </span>
  </span>
  <span class="author">{author}</span>
  <span class="category">{category}</span>
  <a class="action" href={href}>{action icon}</a>
</div>
```

The whole row is **not** a link — only the trailing action icon links to the download.

## Tokens used
| Property | Token |
|---|---|
| `height` | `48px` (fixed) |
| `border-bottom` | `1px solid --color-divider-strong` |
| `gap` (left) | `--space-6` |
| `gap` (title) | `--space-2` |
| index `color` | `--color-text-secondary` |
| index/title/author/category `font-size` | `--text-body-lg-size` |
| title/author/category `color` | `--color-text-primary` |
| hover `background` | `--color-surface-hover` |
| `transition` | `--transition-fast` |

## Props/API
| Prop | Type | Default |
|---|---|---|
| `index` | number \| string | required |
| `title` | string | required |
| `author` | string | required |
| `category` | string | required |
| `icon` | ReactNode | — |
| `action` | ReactNode | — |
| `href` | string | — |

When `index` is a number it is zero-padded to two digits.

## Cross-references
- [Notes](Notes.md) — list container for NoteRow

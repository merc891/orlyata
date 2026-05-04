# Цель: собрать единый artifacts/tokens.json + сгенерировать app/src/tokens/{tokens.ts,tokens.css,typography.ts}.

## Источники
- Если был extract_patterns — artifacts/design-audit.json.
- Если ветка Figma — mcp__figma__get_variable_defs.
- Если ветка Git/локалька — существующие токены (CSS variables в :root, theme.ts, tailwind.config, styled-system).
- Если scratch — стартовый шаблон из quickstart.md.

## Структура tokens.json
{ "color": { "brand": {...}, "neutral": {...}, "accent": {...}, "semantic": {...} },
  "space": { "0":0, "1":4, "2":8, "3":12, "4":16, "5":20, "6":24, "7":32, "8":40 },
  "radius": { "sm":4, "md":8, "lg":12, "xl":16, "2xl":24, "full":9999 },
  "shadow": { "card": "...", "modal": "...", "focus": "..." },
  "typography": {
    "family": { "heading": "...", "body": "..." },
    "style": {
      "heading/3xl": { "family":"heading","size":48,"line":56,"weight":700 },
      "heading/2xl": { "family":"heading","size":36,"line":44,"weight":700 },
      "heading/xl":  { "family":"heading","size":30,"line":38,"weight":700 },
      "heading/lg":  { "family":"heading","size":24,"line":32,"weight":700 },
      "heading/md":  { "family":"heading","size":20,"line":28,"weight":600 },
      "heading/sm":  { "family":"heading","size":16,"line":24,"weight":600 },
      "body/xl":     { "family":"body","size":18,"line":28,"weight":400 },
      "body/lg":     { "family":"body","size":16,"line":24,"weight":400 },
      "body/md":     { "family":"body","size":14,"line":20,"weight":400 },
      "body/sm":     { "family":"body","size":12,"line":16,"weight":400 },
      "caption":     { "family":"body","size":12,"line":16,"weight":400 }
    }
  }
}

## Генерация
- tokens.css → :root { --color-...: #...; --space-...: ...px; ... }, алиасы через var().
- tokens.ts → TS объект с типами, для типобезопасного доступа в компонентах.
- typography.ts → функция className по styleName или CSS object.

Семантические цвета — алиасы на base. В CSS: var(--color-bg-default) = var(--color-white).

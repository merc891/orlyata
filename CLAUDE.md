# Орлята

## О проекте

**«Орлята»** — хоровая капелла мальчиков, г. Зеленоград (Москва).
Основана в 2005 году. Принимает мальчиков и юношей от 5 до 17 лет.
Более 80 участников. 10–15 концертов, конкурсов и фестивалей в год — в Зеленограде, Москве и за рубежом.

## Целевая аудитория

| Сегмент | Цель визита |
|---|---|
| Родители мальчиков 5–12 лет | Записать ребёнка, узнать об условиях |
| Родители / юноши 12–17 лет | Узнать о старших программах, достижениях |
| Журналисты / организаторы | Пресс-материалы, контакты |
| Поклонники / выпускники | Новости, фото, видео |

## Визуальный стиль

- Shadcn/ui — чёрно-бело-зелёная минималистичная система; нейтральные цвета, акцент #6CCC47 (CSS var `--color-accent`).
- Светлая тема. Современный дизайн с бенто-сеткой. 
- Адаптив обязателен — desktop-first. Используй скилл responsiveness-check для создания адаптивных версий. 
— Используй скилл frontend-design для создания дизайна новых страниц.
- Все изображения и видео — с сайта zelorlyata.ru (реальные фото коллектива).

## Среда parity

Цель — поддерживать двустороннее соответствие между React-кодовой базой и Figma-файлом: токены, переменные, стили, компоненты, варианты.

## Неразрывная связь (parity)

React-компонент = Figma-компонент = токен. Любое расхождение между кодом и Figma — баг, решается правкой обоих, не одного.

| Сущность | React | Figma |
|----------|-------|-------|
| Цвет | `tokens.color.[group].[name]` / CSS var | Variable `Colors/[Group]/[Name]` |
| Шрифт | Text style из `typography.ts` | Text Style с тем же именем |
| Spacing | `tokens.space.[n]` | Variable `Spacing/[N]` |
| Radius | `tokens.radius.[size]` | Variable `Radius/[Size]` |
| Shadow | `tokens.shadow.[name]` | Effect Style с тем же именем |
| Компонент | `<Button variant="primary"/>` | Component `Button` + variant `Primary` |

## Архитектура (3 слоя)

- **Layer 1 — Directives** (`directives/`) — markdown-инструкции по каждому шагу пайплайна.
- **Layer 2 — Orchestration** (основной агент) — читает нужную директиву, принимает решения, вызывает MCP/скрипты.
- **Layer 3 — Execution** — скрипты парсинга, генератор токенов, Figma MCP-вызовы.

## Стек

- React + Vite + TypeScript
- CSS Variables + CSS Modules
- Figma MCP (`mcp__figma__*`)

## Структура

```
.
├── CLAUDE.md
├── .mcp.json
├── figma.config.json
├── .gitignore
├── directives/
├── source/
├── app/
│   └── src/
│       ├── tokens/
│       └── components/
│           ├── atoms/
│           ├── molecules/
│           └── organisms/
└── artifacts/
```

## Директивы

- `quickstart` — точка входа (этот пайплайн)
- `figma_mcp_setup` — подключение Figma MCP
- `build_tokens` — design-audit.json → tokens.json + tokens.css/ts
- `build_react_ds` — создание/обновление React-компонентов
- `sync_to_figma` — заливка ДС в Figma через use_figma батчами
- `parity_check` — формальная сверка React ↔ Figma
- `demo_app` — сборка демо-страницы из инстансов

## Правила

- Никакого хардкода цветов / размеров / шрифтов вне `tokens.ts`. Только переменные.
- Имена компонентов в React и Figma — 1:1. Variant property = React prop.
- Каждый новый компонент — мгновенно зеркалится. Не копим долги синхронизации.
- `parity_check` после каждой значимой итерации.
- При создании Figma-нод **никогда не вызывать `node.resize(W, 0)`** на auto-layout. Для HUG — `primaryAxisSizingMode = "AUTO"` без resize по этой оси.
- Каждый TEXT-нод в Figma подвязывается к локальному Text Style через `setTextStyleIdAsync`.

## Design System — правила для AI

> **Before writing or modifying any UI code, read the relevant spec file in `specs/`.
> Use only tokens from `app/src/tokens/tokens.css`. Run the token audit script before committing. Zero errors required.**

### Как использовать систему

1. **Перед правкой компонента** → прочитай `specs/components/<Name>.md` — там перечислены все токены, которые компонент должен использовать.
2. **Нужен цвет?** → найди подходящий в `specs/tokens/token-reference.md`. Не создавай rgba() в коде — если нужного токена нет, добавь его в `tokens.css` и задокументируй в `specs/`.
3. **Нужен новый компонент?** → создай файл `specs/components/<Name>.md` по шаблону других спеков, затем пиши CSS.
4. **После правок** → запусти аудит:
   ```bash
   node app/scripts/token-audit.js --dir app/src
   ```
   **Ноль ошибок обязателен.** Предупреждения — допустимы, но нежелательны.

### Иерархия токенов (3 слоя)
- **Layer 1** — примитивы: `--color-brand-green`, `--color-black-40`, `--space-4` и т.д.
- **Layer 2** — семантические алиасы: `--color-text-inverse-dim`, `--color-surface-glass`, `--transition-fast`.
- **Layer 3** — компоненты: используют **только Layer 2**, никогда Layer 1 напрямую.

### Что категорически запрещено
- `color: #xxxxxx` или `rgba(...)` вне `tokens.css`
- `font-weight: 400` (только `var(--font-weight-regular)`)
- `transition: 0.15s` (только `var(--transition-fast)`)
- `z-index: 1` (только `var(--z-above)`)

## MCP

- Figma MCP (`mcp__figma__*`) — чтение и запись Figma.

## Credentials

- `figma.config.json` — публичные параметры (fileKey, team id).
- Личные токены — в `.env` (gitignored).

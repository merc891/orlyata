# Responsiveness Check — /about

**Date:** 2026-05-04
**URL:** `http://localhost:5173/about`
**Mode:** Standard (8 breakpoints)

## Summary

Страница `/about` имеет **критическую проблему горизонтального переполнения**, проявляющуюся на всех экранах ≤ 1487px. Корневая причина — стандартный баг flex-layout: `<main>` не получает `min-width: 0`, и слайдер педагогов (`Teachers`) с intrinsic content ~1249px заставляет main «распирать» страницу до этой ширины. Sidebar (239px) + main (1249) = 1488px минимально нужны для отсутствия скролла.

Дополнительно: `.splitEqual` строки (AgeGroups + Repertoire, Geography + competitions) не складываются в одну колонку до 768px, хотя по дизайну на tablet (≤ 1279px) они уже не помещаются по ширине → дополнительный вклад в overflow.

| Width   | Overflow X | Layout       | Severity   |
|---------|-----------:|--------------|------------|
| 320     |   +897 px  | broken       | Critical   |
| 375     |   +842 px  | broken       | Critical   |
| 768     |   +481 px  | broken       | Critical   |
| 1024    |   +225 px  | broken       | High       |
| 1280    |   +208 px  | broken       | High       |
| 1440    |    +48 px  | almost OK    | Medium     |
| 1920    |     0 px   | OK           | —          |
| 2560    |     0 px   | OK           | —          |

## Issues

### #1 — Critical · Horizontal overflow on all viewports < 1488px

`<main>` — flex item с `flex: 1 1 0%` и `min-width: auto`. Внутри `Teachers.tsx` слайдер `.grid` имеет `grid-auto-flow: column` и `overflow-x: auto`, но по правилам CSS Flexbox flex-item с дефолтным `min-width: auto` подтягивается к `min-content` своих потомков. Потомок-grid с `overflow-x: auto` **должен** обнулять собственный вклад, но в данном случае intrinsic-вычисление tracks (`grid-auto-columns: 70%/...`) даёт 776×6 = 4658px, и main растягивается до 1249px (минимально достижимая ширина).

**Где видно:** на всех вьюпортах ≤ 1487px справа появляется горизонтальный скролл. Скриншоты 320–1280 показывают, что весь page rendered как 1249px-wide, контент уезжает за viewport.

**Исправление:**
```css
/* About.module.css и Dashboard.module.css */
.main {
  min-width: 0;  /* критично для flex children, чтобы overflow внутри корректно клипался */
}
```
Также можно усилить: добавить `min-width: 0` на каждой плашке-контейнере (`.section` в `Teachers`, `Notes`, `PhotosVideos`, etc.) — помогает grid items, у которых внутри тоже есть слайдеры.

---

### #2 — High · `.splitEqual` не складывается на tablet (768–1279px)

`@media (max-width: 767px)` — единственный override, где `.splitEqual` становится одноколоночным. На tablet строки **AgeGroups + Repertoire** и **Geography + competitions slider** остаются 2-col, занимая ~1209px. На 768–1279 это априори шире viewport.

**Исправление:** перенести правило в tablet-брейкпоинт:
```css
@media (max-width: 1279px) {
  .splitEqual {
    grid-template-columns: 1fr;
  }
}
```
(или дублировать в обоих).

---

### #3 — High · Sidebar (239px) занимает место в flex-row на mobile/tablet

`<aside>` (Sidebar) шириной 239–300px остаётся flex-item в `.layout` даже когда визуально превращается в верхний бар с гамбургером (`<1280px`). Из-за этого main ужимается на эти 239px. На 320 viewport sidebar занимает 272/305 ≈ 90% ширины.

**Что происходит фактически:** Sidebar при `<1280` использует `position: fixed` (или transform/translate) для своего top-bar — но default-flow место в layout сохраняется, иначе main бы оказывался под top-bar. Нужно проверить Sidebar.module.css.

**Исправление:** на tablet/mobile Sidebar должен либо `position: fixed; width: 100%` (top-bar), а layout не должен резервировать ему flex-track место, либо лежать вне `.layout` flex-row.

---

### #4 — Medium · Achievements row (full-width) — слайдер в проигнывает контейнеру при overflow

После исправления #1 проверить, что full-width блок Achievements выглядит ОК на всех брейкпоинтах. Сейчас visually overlapping содержимое на узких вьюпортах из-за общего overflow.

---

### #5 — Medium · Relax/Competitions slider grid-auto-columns: 100%

Внутри `MediaSlider`, `.track { grid-auto-columns: 100% }` — каждый слайд = 100% контейнера. Если parent ужат на mobile, слайдер тоже ужмётся. Это OK при условии, что **#1 исправлен**.

## Layout transitions

| Transition | Where (in code) | Trigger width |
|---|---|---|
| Stats: 5-col → 3-col → 1-col | `Stats.module.css` | 1279px / 767px |
| Sidebar: full nav → hamburger | `Sidebar.module.css` | ~1279px |
| splitEqual: 2-col → 1-col | `About.module.css` | 767px (должен быть 1279) |
| AgeGroups: full → tablet stacking | внутри `AgeGroups` | 1279px / 767px |
| Teachers slider: 4 / 3 / peek | `Teachers.module.css` | 1279px / 767px |
| PageHero: image cover behaviour | `PageHero.module.css` | 1279px / 767px |

## Screenshots

- [320px](resp-320-fold.png) · [320 full](resp-320-full.png)
- [375px](resp-375-fold.png)
- [768px](resp-768-fold.png)
- [1024px](resp-1024-fold.png)
- [1280px](resp-1280-fold.png)
- [1440px](resp-1440-fold.png)
- [1920px](resp-1920-fold.png) — first OK width
- [2560px](resp-2560-fold.png)

## Рекомендованный порядок фиксов

1. **#1** (главное) — `.main { min-width: 0 }`. Скорее всего убирает 80% проблем сразу.
2. **#2** — поднять `splitEqual { 1fr }` в `@media (max-width: 1279px)`.
3. Прогнать responsiveness-check ещё раз — посмотреть, что осталось.
4. **#3** — Sidebar layout-impact на tablet (если ещё актуально после #1+#2).

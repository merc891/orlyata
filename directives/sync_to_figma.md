# Цель: зеркально воссоздать в Figma то, что есть в коде. Через mcp__figma__use_figma батчами.

## Предусловия
- figma_mcp_setup пройден
- artifacts/tokens.json есть и актуален
- figma.config.json содержит реальный fileKey
- React-компоненты в app/src/components/{atoms,molecules,organisms}/

## Части (порядок важен — id из предыдущего нужны для следующего)

Часть 0 — pages "01 — Tokens", "02 — Components", "03 — Demo". Переключиться на Tokens.
Часть 1 — Variable Collections: Colors (modes Light), Spacing (Default), Radius (Default).
Часть 2 — Base Color Variables: Brand/*, Neutral/*, Accent/* — hex из tokens.color.brand|neutral|accent.
Часть 3 — Semantic Color aliases: Semantic/Bg/Default и т.д. как VARIABLE_ALIAS на base.
Часть 4 — Spacing/* и Radius/* как FLOAT Variables.
Часть 5 — Text Styles из tokens.typography.style. Каждый создаётся, потом будет применяться через setTextStyleIdAsync. Если шрифт не зарегистрирован в файле — fallback на Inter, помечать в figma-mirror.json.
Часть 6 — Effect Styles: Shadow/Card, Shadow/Modal, Shadow/Focus.
Часть 7+ — Component Sets: atoms → molecules → organisms. Variant property names = React prop names 1:1. Все цвета/радиусы через Variables, тексты — через setTextStyleIdAsync, тени — через Effect Styles.
Финал — на 03 — Demo собрать demo-frame ТАЙЛОМ из инстансов.

## После каждого батча
Обновить artifacts/figma-mirror.json (id всего созданного), чтобы можно было продолжить с середины.

## Идемпотентность
Перед созданием искать по имени, совпало — update. Удалять — только с подтверждения студента.

## Грабли (не повторять)
1. node.resize(W, 0) на auto-layout — баг. Для HUG: primaryAxisSizingMode "AUTO" без resize по оси.
2. TEXT нода без setTextStyleIdAsync — теряет parity. Маппинг (size, weight) → style:
   - size 12 → Caption
   - Bold/SemiBold → ближайший Heading/* по size
   - Regular/Medium → ближайший Body/* по size
3. SVG-иконки — через figma.createNodeFromSvg(svg), не через vectorPaths (последний strict).
4. await внутри функции — функция должна быть async.
5. figma.combineAsVariants(arr, page) — только COMPONENT в массиве, не FRAME.

## Token Reference (опционально, но рекомендуется)
После Variables/Styles собрать на 01 — Tokens визуализацию: секции Colors (свотчи), Typography (samples), Spacing (шкала), Radius (квадраты), Shadows (карточки).

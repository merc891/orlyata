# Responsiveness Check — 2026-05-12

URL: `http://localhost:5173/` (Dashboard / index)
Mode: Standard (8 breakpoints: 320, 375, 768, 1024, 1280, 1440, 1920, 2560 @ 900h)
Build: current working tree (post-Footer changes)

## TL;DR

**Site is desktop-only.** It renders correctly from ~1280 upward (sidebar + 2-col grids). Below that, no mobile/tablet rules exist for the home-page organisms — every section forces a min-content width of ~530px, so the page horizontally scrolls until viewport reaches ~870px. From there layout is functional but cramped through 1024 → only at 1280+ is the design hit.

Two cross-cutting causes:

1. **No mobile breakpoints in Hero / Stats / PhotosVideos / History / Notes / EnrollCTA / Footer (right column).** Each one is a fixed 2-col or N-col grid with no `@media (max-width: 1023px)` fallback.
2. **Hero heading `--text-display-size` (96px) does not scale.** At <500px viewport "мальчиков" alone is wider than the tile, which pushes Hero's min-content past the viewport and triggers horizontal scroll on the whole page.

## Min-content drivers (measured at 375px)

| Section | Min-content width | Notes |
|---|---|---|
| Notes table | **532 px** | 5-column grid with fixed widths (40 / flex / 220 / 240 / 24) |
| History | 521 px | 2-col + 460h fixed height |
| heroBlock (Hero + Stats) | 493 px | 96px heading × `<br>`-broken Cyrillic |
| Photos&Videos | 436 px | outer 2-col + nested 2-col |
| Footer | 306 px | right col 190 + 1fr |
| EnrollCTA | 234 px | form 500w lays out fine |

Together these force `<main>` to render at 870px regardless of viewport down to ~870, producing horizontal scroll for every viewport below that.

## Per-breakpoint summary

### 320 px — Critical
- `documentElement.scrollWidth = 870`, viewport = 320 → **horizontal scroll, content cropped**
- Hero green tile spills off-screen; "ХОРОВАЯ" cut mid-word
- Stats overlap Hero visually (heroBlock 100svh constraint can't accommodate stacked content)
- Hamburger present and working; sidebar drawer translates from `-300px` (correct)

### 375 px — Critical
- Same 495px horizontal overflow
- Hero heading clips at right edge
- Notes table runs off-screen
- EnrollCTA form is 790px wide inside a 375 viewport
- Sidebar drawer correct (off-canvas)

### 768 px — High
- Still 102px of horizontal overflow (`<main>` 870)
- Hero squashed but readable; events cards at 1fr 1fr take ~360px each — workable
- Stats 5-col forced into ~165px cells, "5–17 лет" wraps
- Notes table fits but barely

### 1024 px — Medium
- **No more horizontal overflow** (doc 1009 ≤ vp 1024)
- Sidebar still hidden (rule is `max-width: 1279px`)
- Stats grid wraps into 3+2 visually because 5×170 = 850 + gaps but content forces wrap → looks broken
- Hamburger still visible at this width; sidebar absent — tablet experience

### 1280 px — Good
- Sidebar appears (`margin-left: 240px` kicks in)
- Hero 2-col, Stats 5-col both fit
- "5–17 лет" still wraps to two lines (value cell too tight); cosmetic
- Hamburger should disappear here, but stays visible — see Issue #8

### 1440 px — Good (design target)
- Everything aligned, columns balanced, sidebar present

### 1920 px — Good
- Sidebar 240px feels narrow against the 1680 content area; tolerable
- Hero/Stats stretch evenly

### 2560 px — Low
- Sidebar logo+nav feel undersized relative to the canvas
- No `max-width` on `.main`, so blocks scale to ~2300px wide; readable text columns disappear, content feels lost (Whitespace balance Low)

## Transitions

| Transition | Width | Clean? |
|---|---|---|
| Sidebar drawer → fixed sidebar | switches at 1280 | Yes (drawer translates; matches CSS @1279) |
| Hero 2-col → (none) | never collapses | **No — should stack at ≤768** |
| Stats 5-col → (none) | never collapses | **No — should drop to 2 / 3 / auto-fit ≤1024** |
| PhotosVideos featured/side → stacked | never collapses | **No — should stack ≤768** |
| History 2-col → stacked | never collapses | **No — should stack ≤768** |
| Footer right `190px 1fr` → `1fr 1fr` | 1279 | Works, but no nav-column rule for nav itself ≤767 |
| Notes table → mobile list | never | **No — needs cards or hidden cols ≤767** |

## Issues

### Critical (1)

**C-1. Horizontal scroll at every viewport below ~870px.**
Root: no mobile breakpoints on Hero/Stats/Photos/History/Notes; combined min-content of `<main>` children ≈ 870. Fix at the section level (below).

### High (4)

**H-1. Hero never stacks.**
`app/src/components/organisms/Hero/Hero.module.css` — `grid-template-columns: 1fr 1fr` is unconditional. At ≤1023 should be `grid-template-columns: 1fr` and video tile should drop its fixed aspect or shrink.

**H-2. Hero heading does not scale.**
`--text-display-size: 96px` (and the recent `--text-headline-size: 64px` used inside Hero) are fixed. The longest Cyrillic word "мальчиков" is ~440px at 96px Nagel Medium — wider than a ≤480 viewport. Wrap in a media query (e.g., 64px @ ≤768, 48px @ ≤480) or switch to `clamp(48px, 8vw, 96px)`.

**H-3. Stats grid has no mobile fallback.**
`app/src/components/organisms/Stats/Stats.module.css` — `grid-template-columns: repeat(5, 1fr)` is unconditional. Drop to `repeat(2, 1fr)` ≤767 and `repeat(auto-fit, minmax(160px, 1fr))` ≤1023 (keep the title cell spanning row 1 on mobile).

**H-4. Notes table overflows on mobile.**
The 5-col grid (40 / 1fr / 220 / 240 / 24) cannot compress meaningfully. Either hide the author + voice-part columns ≤767, or switch to a card layout, or wrap `.section` in `overflow-x: auto`.

### Medium (4)

**M-1. PhotosVideos doesn't stack.**
`grid-template-columns: 1fr 1fr` on outer grid plus nested `1fr 1fr` for side cards. At ≤767 both should become `1fr`.

**M-2. History doesn't stack and has fixed `height: 460px`.**
At ≤767, drop to `grid-template-columns: 1fr` and remove the fixed height (or convert to `min-height`).

**M-3. Stats at 1024 wraps awkwardly into 3+2.**
Visible at 1024 screenshot — cells reflow because content forces wrap inside the fixed 5-col grid. Tied to H-3; the same fix resolves this.

**M-4. heroBlock height `calc(100svh - 48px)` at mobile.**
The fixed first-screen height squeezes Hero + Stats together at narrow widths, causing visual overlap. The tablet `@media (max-width: 1279px)` rule in Dashboard.module.css already nukes `margin-left` but keeps the height. Reset `.heroBlock { height: auto }` at ≤1023.

### Low (3)

**L-1. Hamburger button visible at 1280.**
Should hide when sidebar appears (sidebar's `max-width: 1279px` rule). Check the topbar/hamburger trigger media query — it likely uses ≤1023 instead of ≤1279.

**L-2. EnrollCTA heading 64px (`--text-headline-size`) doesn't scale on mobile.**
Same family as H-2 — add a mobile size.

**L-3. Wide-viewport whitespace at 1920+ / 2560.**
No `max-width` on `.main`. Add `max-width: 1640px; margin-inline: auto;` or similar so content doesn't span 2300px on 4K monitors.

## Recommended fix order

1. **H-1 + H-2 + H-3 + H-4 + M-4** — one mobile pass on the home page organisms. This alone unbreaks viewports below 1280 and removes the horizontal scrollbar at all widths.
2. **M-1 + M-2** — stack PhotosVideos and History at ≤767.
3. **L-1** — fix hamburger media query so it stops appearing alongside the sidebar at 1280.
4. **L-3** — content max-width for ultra-wide.

## Screenshots

- [resp-320-top.jpeg](../resp-320-top.jpeg)
- [resp-375-top.jpeg](../resp-375-top.jpeg) / [resp-375-full.jpeg](../resp-375-full.jpeg)
- [resp-768-full.jpeg](../resp-768-full.jpeg)
- [resp-1024-top.jpeg](../resp-1024-top.jpeg)
- [resp-1280-top.jpeg](../resp-1280-top.jpeg)
- [resp-1440-top.jpeg](../resp-1440-top.jpeg)
- [resp-1920-top.jpeg](../resp-1920-top.jpeg)
- [resp-2560-top.jpeg](../resp-2560-top.jpeg)

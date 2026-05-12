# InputField

## Metadata
- **Category:** Atom
- **File:** `app/src/components/atoms/InputField/`
- **Status:** New

## Overview
Single-line text input with a stacked top label. Used inside forms (e.g. enrolment form) on light surfaces.

## Anatomy
```
<div class="field">
  <label class="label">{label}</label>
  <input class="input" />
</div>
```

## Tokens used
| Property | Token |
|---|---|
| `height` | `64px` (fixed) |
| `padding` | `--space-1` / `--space-4` |
| `background` | `--color-bg-default` |
| `border-radius` | `--radius-md` |
| `focus shadow` | `--shadow-focus` |
| label `font-size` | `--text-body-sm-size` |
| label `color` | `--color-text-tertiary` |
| input `font-size` | `--text-body-lg-size` |
| input `color` | `--color-text-primary` |
| placeholder `color` | `--color-text-placeholder` |
| `transition` | `--transition-fast` |

## Props/API
Forwards every standard `<input>` attribute, plus:

| Prop | Type | Values | Default |
|---|---|---|---|
| `label` | string | — | required |
| `id` | string | — | auto-generated |

## States
| State | Behaviour |
|---|---|
| Default | White surface, tertiary label |
| Focus-within | Adds focus ring (`--shadow-focus`) |
| Filled | No visual change beyond value |

## Code example
```tsx
<InputField label="ФИО родителя" name="parent" />
<InputField label="Дата рождения" type="date" />
```

## Cross-references
- [EnrollCTA](EnrollCTA.md) — uses InputField for the enrolment form

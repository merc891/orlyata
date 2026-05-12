# EnrollCTA

## Metadata
- **Category:** Organism
- **File:** `app/src/components/organisms/EnrollCTA/`
- **Status:** Stable

## Overview
Two-column enrolment section: a large Display heading on the left ("Хотите вырастить творческую личность — запишите мальчика в капеллу"), and a four-field application form on the right.

## Anatomy
```
.section (grid 1fr / 1fr, gap = --space-12, padding = --space-12, bg = --color-bg-muted)
  .heading
    h2 .title (with .titleAccent span for the green clause)
  form .form
    .fields (column, gap = --space-4)
      InputField × 4 (parent / child / birth / phone)
    Button "отправить заявку"
```

## Tokens used (key)
| Property | Token |
|---|---|
| `background` | `--color-bg-muted` |
| `border-radius` | `--radius-lg` |
| `padding` | `--space-12` |
| Section grid gap | `--space-12` |
| Form gap | `--space-6` |
| Fields gap | `--space-4` |
| Title `font-size` | `--text-display-size` |
| `.titleAccent color` | `--color-accent` |

## Cross-references
- [InputField](InputField.md)
- [Button](Button.md)

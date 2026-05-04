# Typography

## Font families
| Token | Value |
|---|---|
| `--font-heading` | `'Gramatika', sans-serif` |
| `--font-body` | `'Gramatika', sans-serif` |

## Weight
| Token | Value |
|---|---|
| `--font-weight-regular` | `400` |

All text in the project uses a single weight. Never hardcode `400` — always reference the token.

## Type scale

| Scale name | Size token | Line-height token | Tracking token | Use |
|---|---|---|---|---|
| Hero | `--text-hero-size` (96px) | `--text-hero-line` (1) | `--text-hero-track` (-1.92px) | Landing hero title |
| Display | `--text-display-size` (44px) | `--text-display-line` (40px) | `--text-display-track` (-1.32px) | Section headings |
| XL | `--text-xl-size` (36px) | `--text-xl-line` (32px) | `--text-xl-track` (-0.72px) | Card headings |
| LG | `--text-lg-size` (24px) | `--text-lg-line` (32px) | `--text-lg-track` (-0.48px) | Sub-headings, years |
| Body LG | `--text-body-lg-size` (18px) | `--text-body-lg-line` (27px) | `--text-body-lg-track` (-0.16px) | Lead text, descriptions |
| Body MD | `--text-body-md-size` (16px) | `--text-body-md-line` (20.8px) | `--text-body-md-track` (-0.16px) | Default body text |
| Body SM | `--text-body-sm-size` (14px) | `--text-body-sm-line` (21px) | `--text-body-sm-track` (-0.16px) | Labels, captions, badges |

## Utility classes (index.css)
`.typo-display`, `.typo-xl`, `.typo-lg`, `.typo-body-lg`, `.typo-body-md`, `.typo-body-sm`

Apply these classes to non-component text. Inside components, reference the tokens directly in module CSS.

## Rules
- Always set size, line-height, and letter-spacing together from the same scale step.
- Fluid type (clamp) is allowed only for hero/display in specific layout contexts (PageHero, Footer tagline).

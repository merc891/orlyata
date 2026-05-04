# Motion

## Duration
| Token | Value | Use |
|---|---|---|
| `--duration-fast` | 0.15s | Hover states: opacity, color, background |
| `--duration-base` | 0.3s | Slightly heavier transitions |
| `--duration-slow` | 0.4s | Image zoom on hover |

## Easing
| Token | Value |
|---|---|
| `--ease-default` | `ease` |

## Composed transitions
| Token | Value | Use |
|---|---|---|
| `--transition-fast` | `0.15s ease` | Default for interactive UI |
| `--transition-base` | `0.3s ease` | Medium interactions |
| `--transition-slow` | `0.4s ease` | Image scale transforms |

## Usage
```css
/* Correct */
transition: opacity var(--transition-fast);
transition: transform var(--transition-slow);

/* Wrong — never hardcode */
transition: opacity 0.15s ease;
```

## Rules
- All `transition:` declarations must use composed `--transition-*` tokens.
- Prefer `--transition-fast` as the default.
- No animation keyframes exist yet; when added, define `--animation-*` tokens for durations.
- Respect `prefers-reduced-motion` — wrap keyframe animations in a media query.

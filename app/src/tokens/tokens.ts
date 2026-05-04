export const tokens = {
  color: {
    brand: {
      black: 'var(--color-brand-black)',
      green: 'var(--color-brand-green)',
    },
    neutral: {
      white: 'var(--color-neutral-white)',
      50:    'var(--color-neutral-50)',
      400:   'var(--color-neutral-400)',
      950:   'var(--color-neutral-950)',
    },
    semantic: {
      bgDefault:     'var(--color-bg-default)',
      bgMuted:       'var(--color-bg-muted)',
      bgInverse:     'var(--color-bg-inverse)',
      textPrimary:   'var(--color-text-primary)',
      textSecondary: 'var(--color-text-secondary)',
      textInverse:   'var(--color-text-inverse)',
      accent:        'var(--color-accent)',
      border:        'var(--color-border)',
      borderSubtle:  'var(--color-border-subtle)',
    },
  },
  space: {
    0: 'var(--space-0)',
    1: 'var(--space-1)',
    2: 'var(--space-2)',
    3: 'var(--space-3)',
    4: 'var(--space-4)',
    5: 'var(--space-5)',
    6: 'var(--space-6)',
    7: 'var(--space-7)',
    8: 'var(--space-8)',
  },
  radius: {
    sm:   'var(--radius-sm)',
    md:   'var(--radius-md)',
    lg:   'var(--radius-lg)',
    full: 'var(--radius-full)',
  },
  shadow: {
    card:  'var(--shadow-card)',
    modal: 'var(--shadow-modal)',
    focus: 'var(--shadow-focus)',
  },
} as const;

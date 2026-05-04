export type TypographyStyle =
  | 'heading/display'
  | 'heading/xl'
  | 'heading/lg'
  | 'body/lg'
  | 'body/md'
  | 'body/sm';

const styleMap: Record<TypographyStyle, string> = {
  'heading/display': 'typo-display',
  'heading/xl':      'typo-xl',
  'heading/lg':      'typo-lg',
  'body/lg':         'typo-body-lg',
  'body/md':         'typo-body-md',
  'body/sm':         'typo-body-sm',
};

export function typo(style: TypographyStyle): string {
  return styleMap[style];
}

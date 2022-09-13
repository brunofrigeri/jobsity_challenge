export type ColorKeyType = keyof typeof colors;
export type MarginsKeyType = keyof typeof margins;
export type TextSizeKeyType = keyof typeof text;

export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  gray: '#dcdcdc',
  dark_gray: '#808080',
  background: '#1d1b1c',
};

export const margins = {
  xsss: 4,
  xss: 8,
  xssm: 12,
  xs: 16,
  sm: 24,
  base: 32,
  lg: 40,
};

export const text = {
  xs: 10,
  sm: 12,
  base: 14,
  lg: 16,
  xl: 18,
  '2xl': 20,
  '3xl': 22,
  '4xl': 24,
  '5xl': 26,
  '6xl': 28,
  '7xl': 30,
};

export type FontVariantKeyType =
  | 'Black'
  | 'BlackItalic'
  | 'Bold'
  | 'BoldItalic'
  | 'ExtraBold'
  | 'ExtraBoldItalic'
  | 'ExtraLight'
  | 'ExtraLightItalic'
  | 'Italic'
  | 'Light'
  | 'LightItalic'
  | 'Medium'
  | 'MediumItalic'
  | 'Regular'
  | 'SemiBold'
  | 'SemiBoldItalic'
  | 'Thin'
  | 'ThinItalic';

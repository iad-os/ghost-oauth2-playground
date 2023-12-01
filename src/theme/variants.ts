import { PaletteOptions } from '@mui/material';

export const THEMES = {
  DARK: 'DARK',
  LIGHT: 'LIGHT',
} as const;

const lightVariant: VariantType = {
  palette: {
    mode: 'light',
    primary: {
      main: '#0f2f96',
    },
    secondary: {
      main: '#d80012',
    },
  },
};

export const darkVariant: VariantType = {
  palette: {
    mode: 'dark',
  },
};

const variants: Record<keyof typeof THEMES, VariantType> = {
  DARK: darkVariant,
  LIGHT: lightVariant,
};

export default variants;

export type VariantType = {
  palette: PaletteOptions;
};

export type DialogStyleProps = {
  backgroundPaper: string;
};
export type ToolbarStyleProps = {
  deepModeBg: string;
};

export type CardStyleProps = {
  secondary: string;
  primary: string;
};

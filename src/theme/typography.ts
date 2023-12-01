import { TypographyOptions } from '@mui/material/styles/createTypography';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {}
}

interface MthTypographyOptions extends TypographyOptions {}

const typography: MthTypographyOptions = {
  fontFamily: ['Roboto'].join(','),
};

export default typography;

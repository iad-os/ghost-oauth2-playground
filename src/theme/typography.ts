import { TypographyVariantsOptions } from '@mui/material/styles';
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {}
}

interface MthTypographyOptions extends TypographyVariantsOptions {}

const typography: MthTypographyOptions = {
  fontFamily: ['Roboto', 'Arial'].join(','),
};

export default typography;

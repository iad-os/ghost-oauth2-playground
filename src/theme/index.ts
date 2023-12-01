import { createTheme as createMuiTheme } from '@mui/material/styles';
import breakpoints from './breakpoints';
import components from './components';
import typography from './typography';
import variants, { THEMES } from './variants';

const createTheme = (name: keyof typeof THEMES) => {
  const variant = variants[name];

  console.log(variant);

  return createMuiTheme({
    spacing: 4,
    breakpoints: breakpoints,
    components: components[name],
    typography: typography,
    palette: variant.palette,
  });
};

export default createTheme;

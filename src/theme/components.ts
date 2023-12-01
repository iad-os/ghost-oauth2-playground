import { Components } from '@mui/material';
import { THEMES } from './variants';
import merge from 'deepmerge';

const commonComponets: Components = {};

const components: Record<keyof typeof THEMES, Components> = {
  DARK: merge<Components>(commonComponets, {}),
  LIGHT: merge<Components>(commonComponets, {}),
};

export default components;

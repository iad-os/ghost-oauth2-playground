import CssBaseline from '@mui/material/CssBaseline';
import {
  createTheme,
  Theme,
  ThemeProvider as ThemeProviderMUI,
} from '@mui/material/styles';
import React, { useContext, useEffect, useMemo, useState } from 'react';

type AppThemeProps = { toggleColorMode: () => void };

const AppTheme = React.createContext({} as AppThemeProps);

export function useAppTheme() {
  return useContext(AppTheme);
}

const GHOST_THEME_MODE = 'ghost_theme_mode';

const AppThemeProvider: React.FC<{ children: React.ReactNode }> = props => {
  const [mode, setMode] = useState<Theme['palette']['mode']>(
    (localStorage.getItem(GHOST_THEME_MODE) as Theme['palette']['mode']) ||
      'light'
  );
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  useEffect(() => {
    mode && localStorage.setItem(GHOST_THEME_MODE, mode);
  }, [mode]);

  const theme = useMemo(
    () =>
      createTheme({
        ...(mode === 'light' && {}),
        ...(mode === 'dark' && {
          palette: {
            mode,
            // palette values for dark mode
            primary: {
              main: '#f8b133',
            },
            secondary: {
              main: '#ffefd6',
            },
            background: {
              default: '#282C34',
              paper: '#21252b',
            },
            text: {
              primary: '#f6f7f8',
              secondary: '#ffefd6',
            },
          },
        }),
      }),
    [mode]
  );

  return (
    <AppTheme.Provider value={colorMode}>
      <ThemeProviderMUI theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProviderMUI>
    </AppTheme.Provider>
  );
};

export default AppThemeProvider;

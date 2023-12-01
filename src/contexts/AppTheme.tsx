import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as ThemeProviderMUI } from '@mui/material/styles';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { THEMES } from '../theme/variants';
import createTheme from '../theme';

type AppThemeProps = { toggleColorMode: () => void };

const AppTheme = React.createContext({} as AppThemeProps);

export function useAppTheme() {
  return useContext(AppTheme);
}

const GHOST_THEME_MODE = 'ghost_theme_mode';

const AppThemeProvider = (props: React.PropsWithChildren) => {
  const [mode, setMode] = useState<keyof typeof THEMES>(
    (localStorage.getItem(GHOST_THEME_MODE) as keyof typeof THEMES) ?? 'LIGHT'
  );
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'LIGHT' ? 'DARK' : 'LIGHT'));
      },
    }),
    []
  );

  useEffect(() => {
    mode && localStorage.setItem(GHOST_THEME_MODE, mode);
  }, [mode]);

  return (
    <AppTheme.Provider value={colorMode}>
      <ThemeProviderMUI theme={createTheme(mode)}>
        <CssBaseline />
        {props.children}
      </ThemeProviderMUI>
    </AppTheme.Provider>
  );
};

export default AppThemeProvider;

import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';

type CtxProps = { toggleColorMode: () => void };

const ColorModeContext = React.createContext({} as CtxProps);

export function useColorMode() {
  return useContext(ColorModeContext);
}

const GHOST_THEME_MODE = 'ghost_theme_mode';

function ColorModeProvider(props: { children: React.ReactNode }) {
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
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ColorModeProvider;

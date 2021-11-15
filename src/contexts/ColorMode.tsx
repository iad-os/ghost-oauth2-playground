import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';

type CtxProps = { toggleColorMode: () => void };

const ColorModeContext = React.createContext({} as CtxProps);

export function useColorMode() {
  return useContext(ColorModeContext);
}

const GHOST_THEME_MODE = 'ghost_theme_mode';

type EMode = 'light' | 'dark';

function ColorModeProvider(props: { children: React.ReactNode }) {
  const [mode, setMode] = useState<EMode>(
    (localStorage.getItem(GHOST_THEME_MODE) as EMode) || 'light'
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
        palette: {
          mode,
          ...(mode === 'light'
            ? {}
            : {
                // palette values for dark mode
                primary: {
                  main: '#f8b133',
                },
                background: {
                  default: '#282C34',
                  paper: '#282C34',
                },
                text: {
                  primary: '#fff',
                  secondary: '#f8b133',
                },
              }),
        },
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

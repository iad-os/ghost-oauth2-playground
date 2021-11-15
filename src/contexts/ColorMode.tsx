import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';

type CtxProps = { toggleColorMode: () => void; mode: string };

const ColorModeContext = React.createContext({} as CtxProps);

export function useColorMode() {
  return useContext(ColorModeContext);
}

function ColorModeProvider(props: { children: React.ReactNode }) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode,
    }),
    []
  );

  const theme = React.useMemo(
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

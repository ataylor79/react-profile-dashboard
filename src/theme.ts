import { createContext, useState, useMemo } from 'react';
import { createTheme, Theme } from '@mui/material/styles';

// types
type ThemeMode = 'dark' | 'light';
type UseMode = () => [Partial<Theme>, { toggleColourMode: () => void }];
export type Colours = {
  [key: string]: {
    [key: number]: string;
  };
};

export const tokens = (mode: ThemeMode): Colours => ({
  ...(mode === 'dark' ? darkColours : lightColours),
});

const darkColours = {
  grey: {
    100: '#e0e0e0',
    200: '#c2c2c2',
    300: '#a3a3a3',
    400: '#858585',
    500: '#666666',
    600: '#525252',
    700: '#3d3d3d',
    800: '#292929',
    900: '#141414',
  },
  primary: {
    100: '#d0d1d5',
    200: '#a1a4aa',
    300: '#727680',
    400: '#1F2A40',
    500: '#141b2b',
    600: '#101622',
    700: '#0c101a',
    800: '#080b11',
    900: '#040509',
  },
  greenAccent: {
    100: '#dbf5ee',
    200: '#b7ebde',
    300: '#94e2cd',
    400: '#70d8bd',
    500: '#4cceac',
    600: '#3da58a',
    700: '#2e7c67',
    800: '#1e5245',
    900: '#0f2922',
  },
  redAccent: {
    100: '#f8dcdb',
    200: '#f1b9b7',
    300: '#e99592',
    400: '#e2726e',
    500: '#db4f4a',
    600: '#af3f3b',
    700: '#832f2c',
    800: '#58201e',
    900: '#2c100f',
  },
  blueAccent: {
    100: '#e1e2fe',
    200: '#c3c6fd',
    300: '#a4a9fc',
    400: '#868dfb',
    500: '#6870fa',
    600: '#535ac8',
    700: '#3e4396',
    800: '#2a2d64',
    900: '#151632',
  },
};

const lightColours = {
  grey: {
    100: '#141414',
    200: '#292929',
    300: '#3d3d3d',
    400: '#525252',
    500: '#666666',
    600: '#858585',
    700: '#a3a3a3',
    800: '#c2c2c2',
    900: '#e0e0e0',
  },
  primary: {
    100: '#ffffff',
    200: '#f7f7f7',
    300: '#efefef',
    400: '#e7e7e7',
    500: '#dfdfdf',
    600: '#d7d7d7',
    700: '#cfcfcf',
    800: '#c7c7c7',
    900: '#c0c0c0',
  },
  greenAccent: {
    100: '#2e7c67',
    200: '#34826d',
    300: '#3a8772',
    400: '#408d78',
    500: '#46937e',
    600: '#4b9983',
    700: '#519f89',
    800: '#57a58f',
    900: '#5dab95',
  },
  redAccent: {
    100: '#2c100f',
    200: '#58201e',
    300: '#832f2c',
    400: '#af3f3b',
    500: '#db4f4a',
    600: '#e2726e',
    700: '#e99592',
    800: '#f1b9b7',
    900: '#f8dcdb',
  },
  blueAccent: {
    100: '#2258a9',
    200: '#0263b1',
    300: '#006db8',
    400: '#0076bd',
    500: '#0080c2',
    600: '#0089c6',
    700: '#0093ca',
    800: '#009ccc',
    900: '#00a5ce',
  },
};

// theme settings
export const themeSettings = (mode: ThemeMode) => {
  const colours = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            primary: { main: colours.primary[500] },
            secondary: { main: colours.greenAccent[500] },
            neutral: {
              dark: colours.grey[700],
              main: colours.grey[500],
              light: colours.grey[100],
            },
            background: {
              default: colours.primary[500],
            },
          }
        : {
            primary: { main: colours.primary[100] },
            secondary: { main: colours.greenAccent[500] },
            neutral: {
              dark: colours.grey[700],
              main: colours.grey[500],
              light: colours.grey[100],
            },
            background: {
              default: colours.primary[200],
            },
          }),
    },
    typography: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 12,
      h1: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 40,
      },
      h2: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 32,
      },
      h3: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 24,
      },
      h4: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 20,
      },
      h5: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 16,
      },
      h6: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 14,
      },
    },
  };
};

// context for colour mode
export const ColourModeContext = createContext({
  toggleColourMode: () => {},
});

export const useMode: UseMode = () => {
  const [mode, setMode] = useState<ThemeMode>('dark');

  const colourMode = useMemo(
    () => ({
      toggleColourMode: () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
      },
    }),
    []
  );

  const theme: Partial<Theme> = useMemo(
    () => createTheme(themeSettings(mode)),
    [mode]
  );

  return [theme, colourMode];
};

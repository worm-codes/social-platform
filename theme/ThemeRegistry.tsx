'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

import { NextAppDirEmotionCacheProvider } from './EmotionCache';

const RobotoFont = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
});
const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: RobotoFont.style.fontFamily,
    fontSize: 12,
  },
  palette: {
    background: {
      default: '#770c0c',
    },
  },
};
const theme = createTheme(themeOptions);
export const ThemeRegistry = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
};

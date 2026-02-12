// ThemeWrapper.jsx
"use client";

import React, { useContext, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ColorModeContext, useColorMode, ColorModeContextProvider, getMuiTheme } from './context/themeContext';

// کامپوننتی که در لایه سرور (RootLayout) قرار می گیرد و Context را مصرف می کند
function MuiThemeWrapper({ children }) {
  // از useColorMode برای گرفتن mode استفاده می کنیم
  const { mode } = useColorMode();

  // ساخت تم بر اساس mode
  const theme = useMemo(() => getMuiTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

// کامپوننت اصلی که هم Context Provider و هم ThemeProvider را می‌پیچد
export function AppThemeWrapper({ children }) {
    return (
        // ابتدا Context Provider را اعمال می کنیم
        <ColorModeContextProvider>
            {/* سپس ThemeProvider را که وابسته به Context است، اعمال می کنیم */}
            <MuiThemeWrapper>
                {children}
            </MuiThemeWrapper>
        </ColorModeContextProvider>
    );
}

"use client"
import React from 'react';
import { createContext, useState , useContext,useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const ColorModeContext = createContext({ toggleColorMode: () => {}, mode: 'light' });  
export const useColorMode = () => useContext(ColorModeContext);

// این کامپوننت فقط Context و State را مدیریت می کند
export function ColorModeContextProvider({ children }) { // نام را به این تغییر دادم تا با ThemeProvider اشتباه نشود
  const [mode, setMode] = useState('light');
    const colorMode = useMemo( () => ({
        toggleColorMode: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
        mode
    }),[mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            {children}
        </ColorModeContext.Provider>
    );
}

// این تابع در layout.jsx برای ساخت تم استفاده می شود
export const getMuiTheme = (mode) => {
    return createTheme({
        palette: {
            mode,
            ...(mode === 'light'&&{
                background: {
                    default: '#f0f0f0',
                    paper: '#ffffff',
            }
        }),
        ...(mode === 'dark' && {
            background: {
                default: '#121212',
                paper: '#1e1e1e',
            },
        }),
        },
    });
}

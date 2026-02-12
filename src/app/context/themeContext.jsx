import React from 'react';
import { createContext, useState , useContext,useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
const ColorModeContext = createContext({ toggleColorMode: () => {} });  
export const useColorMode = () => useContext(ColorModeContext);

export function ThemeProvider  ({ children }) {
  const [mode, setMode] = useState('light');
    const colorMode = useMemo( () => ({
        toggleColorMode: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
        mode
    }),[mode]);

}
    const theme =useMemo(()=>{
        createTheme({
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
        }),
        [mode]
    });
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );

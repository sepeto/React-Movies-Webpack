import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from "./default.js";
import { GlobalStyles } from './globals.js';

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
    </ThemeProvider>    
);

export default Theme;
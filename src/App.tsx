import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './Styles/Global';
import { ThemeModeProvider, useThemeMode } from './Contexts/ThemeContext';
import { themes } from './Styles/theme';

import AppRoutes from './Routes';
import ScrollToTop from './Components/ScrollToTop';

const AppContent: React.FC = () => {
    const { themeMode } = useThemeMode();

    return (
        <ThemeProvider theme={themes[themeMode]}>
            <GlobalStyles />
            <ScrollToTop />
            <AppRoutes />
        </ThemeProvider>
    );
};

const App: React.FC = () => (
    <ThemeModeProvider>
        <AppContent />
    </ThemeModeProvider>
);

export default App;

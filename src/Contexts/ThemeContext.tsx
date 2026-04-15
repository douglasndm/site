import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';

type ThemeMode = 'light' | 'dark';

interface ThemeContextData {
    themeMode: ThemeMode;
    toggleTheme: () => void;
}

interface ThemeModeProviderProps {
    children: React.ReactNode;
}

const STORAGE_KEY = 'douglasndm:theme';

const ThemeModeContext = createContext<ThemeContextData>({
    themeMode: 'light',
    toggleTheme: () => undefined,
});

const getPreferredTheme = (): ThemeMode => {
    if (typeof window === 'undefined') {
        return 'light';
    }

    const savedTheme = window.localStorage.getItem(STORAGE_KEY) as ThemeMode;

    if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
};

export const ThemeModeProvider: React.FC<ThemeModeProviderProps> = ({
    children,
}: ThemeModeProviderProps) => {
    const [themeMode, setThemeMode] = useState<ThemeMode>(getPreferredTheme);

    useEffect(() => {
        window.localStorage.setItem(STORAGE_KEY, themeMode);
        document.documentElement.setAttribute('data-theme', themeMode);
    }, [themeMode]);

    const toggleTheme = useCallback(() => {
        setThemeMode((currentTheme) =>
            currentTheme === 'light' ? 'dark' : 'light'
        );
    }, []);

    const value = useMemo(
        () => ({
            themeMode,
            toggleTheme,
        }),
        [themeMode, toggleTheme]
    );

    return (
        <ThemeModeContext.Provider value={value}>
            {children}
        </ThemeModeContext.Provider>
    );
};

export const useThemeMode = (): ThemeContextData =>
    useContext(ThemeModeContext);

import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        name: 'light' | 'dark';
        colors: {
            background: string;
            backgroundAccent: string;
            backgroundElevated: string;
            backgroundStrong: string;
            text: string;
            textMuted: string;
            textOnAccent: string;
            border: string;
            borderStrong: string;
            primary: string;
            secondary: string;
            accent: string;
            overlay: string;
            shadow: string;
        };
        gradients: {
            page: string;
            hero: string;
            glow: string;
        };
    }
}

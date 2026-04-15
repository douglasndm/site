import { DefaultTheme } from 'styled-components';

export const themes: Record<'light' | 'dark', DefaultTheme> = {
    light: {
        name: 'light',
        colors: {
            background: '#f4f7fb',
            backgroundAccent: '#dbeafe',
            backgroundElevated: 'rgba(255, 255, 255, 0.88)',
            backgroundStrong: '#ffffff',
            text: '#10203a',
            textMuted: '#5f6f8a',
            textOnAccent: '#ffffff',
            border: 'rgba(130, 149, 181, 0.22)',
            borderStrong: 'rgba(130, 149, 181, 0.38)',
            primary: '#2563eb',
            secondary: '#0f766e',
            accent: '#f97316',
            overlay: 'rgba(9, 16, 28, 0.08)',
            shadow: 'rgba(15, 23, 42, 0.12)',
        },
        gradients: {
            page:
                'radial-gradient(circle at top left, rgba(37, 99, 235, 0.18), transparent 32%), radial-gradient(circle at top right, rgba(15, 118, 110, 0.16), transparent 30%), linear-gradient(180deg, #f8fbff 0%, #eef4fb 100%)',
            hero:
                'linear-gradient(135deg, rgba(37, 99, 235, 0.94) 0%, rgba(15, 118, 110, 0.88) 100%)',
            glow:
                'linear-gradient(135deg, rgba(249, 115, 22, 0.24), rgba(37, 99, 235, 0.2))',
        },
    },
    dark: {
        name: 'dark',
        colors: {
            background: '#06101f',
            backgroundAccent: '#10294f',
            backgroundElevated: 'rgba(10, 18, 34, 0.84)',
            backgroundStrong: '#0c172b',
            text: '#f3f8ff',
            textMuted: '#94a9c9',
            textOnAccent: '#f8fbff',
            border: 'rgba(148, 169, 201, 0.18)',
            borderStrong: 'rgba(148, 169, 201, 0.32)',
            primary: '#60a5fa',
            secondary: '#34d399',
            accent: '#fb923c',
            overlay: 'rgba(6, 16, 31, 0.48)',
            shadow: 'rgba(2, 6, 23, 0.42)',
        },
        gradients: {
            page:
                'radial-gradient(circle at top left, rgba(96, 165, 250, 0.22), transparent 32%), radial-gradient(circle at top right, rgba(52, 211, 153, 0.16), transparent 34%), linear-gradient(180deg, #081220 0%, #050b15 100%)',
            hero:
                'linear-gradient(135deg, rgba(16, 41, 79, 0.96) 0%, rgba(15, 118, 110, 0.92) 100%)',
            glow:
                'linear-gradient(135deg, rgba(251, 146, 60, 0.26), rgba(96, 165, 250, 0.2))',
        },
    },
};

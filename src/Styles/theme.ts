import { DefaultTheme } from 'styled-components';

export const themes: Record<'light' | 'dark', DefaultTheme> = {
    light: {
        name: 'light',
        colors: {
            background: '#f8fafc',
            backgroundAccent: '#f1f5f9',
            backgroundElevated: '#ffffff',
            backgroundStrong: '#ffffff',
            text: '#0f172a',
            textMuted: '#64748b',
            textOnAccent: '#ffffff',
            border: 'rgba(0, 0, 0, 0.08)',
            borderStrong: 'rgba(0, 0, 0, 0.16)',
            primary: '#0066ff',
            secondary: '#0d9488',
            accent: '#f97316',
            overlay: 'rgba(0, 0, 0, 0.4)',
            shadow: 'rgba(0, 0, 0, 0.06)',
        },
        gradients: {
            page: '#f8fafc',
            hero: 'linear-gradient(135deg, #0066ff 0%, #0d9488 100%)',
            glow: 'rgba(0, 102, 255, 0.15)',
        },
    },
    dark: {
        name: 'dark',
        colors: {
            background: '#0b0f17',
            backgroundAccent: '#131924',
            backgroundElevated: 'rgba(19, 25, 36, 0.75)',
            backgroundStrong: '#131924',
            text: '#f1f5f9',
            textMuted: '#94a3b8',
            textOnAccent: '#ffffff',
            border: 'rgba(255, 255, 255, 0.08)',
            borderStrong: 'rgba(255, 255, 255, 0.16)',
            primary: '#3882ff',
            secondary: '#14b8a6',
            accent: '#fb923c',
            overlay: 'rgba(0, 0, 0, 0.7)',
            shadow: 'rgba(0, 0, 0, 0.35)',
        },
        gradients: {
            page: '#0b0f17',
            hero: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            glow: 'rgba(56, 130, 255, 0.15)',
        },
    },
};

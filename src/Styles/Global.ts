import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Sora:wght@400;600;700&display=swap');

    :root {
        color-scheme: ${({ theme }) => theme.name};
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    html,
    body,
    #root {
        min-height: 100%;
    }

    body {
        font-family: 'Manrope', sans-serif;
        background: ${({ theme }) => theme.gradients.page};
        color: ${({ theme }) => theme.colors.text};
        overflow-x: hidden;
        transition:
            background 0.3s ease,
            color 0.3s ease;
    }

    body::before,
    body::after {
        content: '';
        position: fixed;
        inset: auto;
        width: 28rem;
        height: 28rem;
        border-radius: 999px;
        pointer-events: none;
        filter: blur(24px);
        z-index: -1;
        opacity: 0.6;
    }

    body::before {
        top: -8rem;
        left: -8rem;
        background: ${({ theme }) => theme.gradients.glow};
    }

    body::after {
        right: -10rem;
        bottom: -12rem;
        background: ${({ theme }) => theme.gradients.hero};
        opacity: 0.2;
    }

    a,
    button,
    input,
    textarea,
    select {
        font: inherit;
    }

    a {
        color: inherit;
    }

    button {
        border: 0;
        background: none;
        cursor: pointer;
    }

    img {
        max-width: 100%;
        display: block;
    }

    ul,
    ol {
        padding-left: 1.25rem;
    }

    ::selection {
        background: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.textOnAccent};
    }
`;

export default GlobalStyles;

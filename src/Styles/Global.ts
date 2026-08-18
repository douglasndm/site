import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');

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
        font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        overflow-x: hidden;
        transition: background 0.25s ease, color 0.25s ease;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
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
        text-decoration: none;
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
        list-style: none;
        padding: 0;
        margin: 0;
    }

    ::selection {
        background: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.textOnAccent};
    }
`;

export default GlobalStyles;

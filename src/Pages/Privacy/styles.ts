import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
`;

export const Content = styled.main`
    max-width: 980px;
    margin: 0 auto;
    padding: 1.25rem 1rem 3rem;
`;

export const LegalCard = styled.article`
    padding: clamp(1.35rem, 2.4vw, 2.4rem);
    border-radius: 32px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.backgroundElevated};
    box-shadow: 0 28px 70px -44px ${({ theme }) => theme.colors.shadow};
`;

export const IntroLabel = styled.span`
    display: inline-flex;
    align-items: center;
    min-height: 2rem;
    padding: 0.35rem 0.8rem;
    border-radius: 999px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.overlay};
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
`;

export const IntroTitle = styled.h1`
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Sora', sans-serif;
    font-size: clamp(2rem, 5vw, 3.4rem);
    line-height: 1.04;
    letter-spacing: -0.05em;
`;

export const IntroText = styled.p`
    max-width: 66ch;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 1rem;
    line-height: 1.8;
`;

export const Prose = styled.div`
    margin-top: 2rem;
    color: ${({ theme }) => theme.colors.textMuted};

    h1,
    h2,
    h3 {
        color: ${({ theme }) => theme.colors.text};
        font-family: 'Sora', sans-serif;
        letter-spacing: -0.04em;
        margin-top: 2rem;
    }

    h1 {
        font-size: clamp(1.7rem, 3vw, 2.5rem);
    }

    h2 {
        font-size: clamp(1.35rem, 2.8vw, 1.9rem);
    }

    h3 {
        font-size: clamp(1.1rem, 2vw, 1.35rem);
    }

    p,
    li {
        font-size: 1rem;
        line-height: 1.85;
    }

    p + p,
    p + ul,
    p + ol,
    ul + p,
    ol + p,
    h2 + p,
    h3 + p {
        margin-top: 1rem;
    }

    ul,
    ol {
        margin-top: 1rem;
    }

    li + li {
        margin-top: 0.75rem;
    }

    a {
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 700;
    }

    strong {
        color: ${({ theme }) => theme.colors.text};
    }
`;

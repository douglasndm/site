import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Content = styled.main`
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    padding: 1.5rem 1.25rem 4rem;
    flex: 1;
`;

export const LegalCard = styled.article`
    padding: clamp(1.5rem, 3.5vw, 3rem);
    border-radius: 24px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.backgroundElevated};
    box-shadow: 0 10px 30px -12px ${({ theme }) => theme.colors.shadow};
`;

export const IntroLabel = styled.span`
    display: inline-flex;
    align-items: center;
    padding: 0.3rem 0.75rem;
    border-radius: 999px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.backgroundAccent};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.82rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
`;

export const IntroTitle = styled.h1`
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.text};
    font-size: clamp(1.8rem, 4vw, 2.75rem);
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: -0.03em;
`;

export const IntroText = styled.p`
    max-width: 65ch;
    margin-top: 0.75rem;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 1.05rem;
    line-height: 1.7;
`;

export const Prose = styled.div`
    margin-top: 2rem;
    color: ${({ theme }) => theme.colors.textMuted};
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    padding-top: 2rem;

    h1,
    h2,
    h3 {
        color: ${({ theme }) => theme.colors.text};
        font-weight: 700;
        letter-spacing: -0.02em;
        margin-top: 2rem;
    }

    h1 {
        font-size: 1.8rem;
    }

    h2 {
        font-size: 1.4rem;
    }

    h3 {
        font-size: 1.15rem;
    }

    p,
    li {
        font-size: 1rem;
        line-height: 1.75;
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
        padding-left: 1.5rem;
        list-style: disc;
    }

    li + li {
        margin-top: 0.5rem;
    }

    a {
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 600;
        text-decoration: underline;
    }

    strong {
        color: ${({ theme }) => theme.colors.text};
    }
`;

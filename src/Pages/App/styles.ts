import styled from 'styled-components';

interface SupportCardProps {
    accentColor: string;
}

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Content = styled.main`
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    padding: 1.5rem 1.25rem 4rem;
    flex: 1;
`;

export const SupportCard = styled.section<SupportCardProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    margin-top: 2rem;
    padding: 1.5rem;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme, accentColor }) =>
        theme.name === 'dark'
            ? `radial-gradient(ellipse at top left, ${accentColor}18 0%, transparent 70%), #111723`
            : `radial-gradient(ellipse at top left, ${accentColor}10 0%, transparent 70%), #ffffff`};
    box-shadow: 0 10px 30px -12px ${({ theme }) => theme.colors.shadow};

    strong {
        display: block;
        color: ${({ theme }) => theme.colors.text};
        font-size: 1.1rem;
        font-weight: 700;
    }

    p {
        margin-top: 0.35rem;
        color: ${({ theme }) => theme.colors.textMuted};
        line-height: 1.6;
    }

    a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.65rem 1.2rem;
        border-radius: 999px;
        background: ${({ theme }) => theme.colors.text};
        color: ${({ theme }) => theme.colors.background};
        font-weight: 600;
        font-size: 0.92rem;
        text-decoration: none;
        white-space: nowrap;
        transition: transform 0.2s ease, opacity 0.2s ease;

        &:hover {
            transform: translateY(-2px);
            opacity: 0.9;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const RelatedSection = styled.section`
    margin-top: 3rem;
`;

export const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;

    h2 {
        font-size: 1.5rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.text};
        letter-spacing: -0.02em;
    }

    a {
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 600;
        font-size: 0.95rem;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const RelatedGrid = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 0;
    margin: 0;

    li {
        width: 100%;
    }
`;

export const EmptyState = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    margin-top: 2rem;
    padding: 2.5rem;
    border-radius: 24px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.backgroundElevated};

    h1 {
        color: ${({ theme }) => theme.colors.text};
        font-size: 2rem;
        font-weight: 700;
    }

    p {
        color: ${({ theme }) => theme.colors.textMuted};
        line-height: 1.6;
    }

    a {
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 600;
        text-decoration: none;
    }
`;

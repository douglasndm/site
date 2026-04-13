import styled from 'styled-components';

interface SupportCardProps {
    accentColor: string;
}

export const Container = styled.div`
    min-height: 100vh;
`;

export const Content = styled.main`
    max-width: 1180px;
    margin: 0 auto;
    padding: 1.25rem 1rem 3rem;
`;

export const SupportCard = styled.section<SupportCardProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-top: 1.3rem;
    padding: 1.2rem 1.3rem;
    border-radius: 26px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: linear-gradient(
            135deg,
            ${({ accentColor }) => `${accentColor}20`} 0%,
            transparent 55%
        ),
        ${({ theme }) => theme.colors.backgroundElevated};

    strong {
        display: block;
        color: ${({ theme }) => theme.colors.text};
        font-size: 1rem;
    }

    p {
        margin-top: 0.4rem;
        color: ${({ theme }) => theme.colors.textMuted};
        line-height: 1.7;
    }

    a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 3rem;
        padding: 0.85rem 1.2rem;
        border-radius: 999px;
        background: ${({ theme }) => theme.colors.backgroundStrong};
        border: 1px solid ${({ theme }) => theme.colors.borderStrong};
        color: ${({ theme }) => theme.colors.text};
        font-weight: 800;
        text-decoration: none;
        white-space: nowrap;
    }

    @media (max-width: 780px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const RelatedSection = styled.section`
    margin-top: 2rem;
`;

export const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: end;
    margin-bottom: 1.25rem;

    h2 {
        font-family: 'Sora', sans-serif;
        font-size: clamp(1.5rem, 2.8vw, 2.2rem);
        color: ${({ theme }) => theme.colors.text};
        letter-spacing: -0.04em;
    }

    a {
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 800;
        text-decoration: none;
    }

    @media (max-width: 720px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const RelatedGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.2rem;
    list-style: none;
    padding: 0;

    @media (max-width: 1040px) {
        grid-template-columns: 1fr;
    }
`;

export const EmptyState = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    margin-top: 2rem;
    padding: 2rem;
    border-radius: 30px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.backgroundElevated};

    h1 {
        font-family: 'Sora', sans-serif;
        color: ${({ theme }) => theme.colors.text};
        font-size: clamp(1.8rem, 4vw, 3rem);
        letter-spacing: -0.04em;
    }

    p {
        color: ${({ theme }) => theme.colors.textMuted};
        line-height: 1.8;
    }

    a {
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 800;
        text-decoration: none;
    }
`;

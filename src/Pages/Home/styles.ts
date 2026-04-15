import styled from 'styled-components';
import { Link } from 'react-router';

export const Container = styled.div`
    min-height: 100vh;
`;

export const MainContent = styled.main`
    max-width: 1180px;
    margin: 0 auto;
    padding: 1.25rem 1rem 3rem;
`;

export const Hero = styled.section`
    display: grid;
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
    gap: 1.5rem;
    align-items: stretch;
    margin-top: 1.2rem;

    @media (max-width: 1040px) {
        grid-template-columns: 1fr;
    }
`;

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(1.5rem, 2.5vw, 2.5rem);
    border-radius: 32px;
    background: ${({ theme }) => theme.gradients.hero};
    color: ${({ theme }) => theme.colors.textOnAccent};
    box-shadow: 0 28px 70px -40px ${({ theme }) => theme.colors.shadow};
`;

export const HeroEyebrow = styled.span`
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    opacity: 0.88;
`;

export const HeroTitle = styled.h1`
    margin-top: 1rem;
    font-family: 'Sora', sans-serif;
    font-size: clamp(2.2rem, 5vw, 4.3rem);
    line-height: 1.02;
    letter-spacing: -0.05em;
`;

export const HeroSubtitle = styled.p`
    max-width: 54ch;
    margin-top: 1.15rem;
    font-size: 1.03rem;
    line-height: 1.8;
    opacity: 0.92;
`;

export const HeroStats = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.85rem;
    margin-top: 1.6rem;

    @media (max-width: 560px) {
        grid-template-columns: 1fr;
    }
`;

export const HeroCard = styled.div`
    padding: 1rem;
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.12);

    strong {
        display: block;
        font-size: 1.1rem;
        font-weight: 800;
    }

    span {
        display: block;
        margin-top: 0.35rem;
        font-size: 0.92rem;
        opacity: 0.86;
    }
`;

export const HeroLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    min-height: 3rem;
    margin-top: 1.8rem;
    padding: 0.9rem 1.2rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.14);
    color: ${({ theme }) => theme.colors.textOnAccent};
    font-weight: 800;
    text-decoration: none;
    border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const Section = styled.section`
    margin-top: 2rem;
`;

export const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: end;
    margin-bottom: 1.25rem;

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

export const SectionTitle = styled.h2`
    font-family: 'Sora', sans-serif;
    font-size: clamp(1.6rem, 3vw, 2.3rem);
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: -0.04em;
`;

export const SectionText = styled.p`
    margin-top: 0.55rem;
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.7;
`;

export const AppGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.2rem;
    list-style: none;
    padding: 0;

    @media (max-width: 920px) {
        grid-template-columns: 1fr;
    }
`;

export const ListItem = styled.li`
    display: block;
`;

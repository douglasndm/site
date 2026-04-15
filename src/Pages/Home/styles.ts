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

export const Section = styled.section`
    margin-top: 1rem;
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

import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
`;

export const Content = styled.main`
    max-width: 1180px;
    min-height: calc(100vh - 8rem);
    margin: 0 auto;
    padding: 1.25rem 1rem 3rem;
    display: grid;
    place-items: center;
`;

export const TextContainer = styled.section`
    width: min(100%, 760px);
    padding: clamp(1.5rem, 3vw, 2.8rem);
    border-radius: 34px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.backgroundElevated};
    box-shadow: 0 30px 70px -44px ${({ theme }) => theme.colors.shadow};
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Sora', sans-serif;
    font-size: clamp(4rem, 14vw, 8rem);
    line-height: 0.95;
    letter-spacing: -0.08em;
`;

export const DescriptionContainer = styled.div`
    margin-top: 1.1rem;
`;

export const Description = styled.p`
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 1rem;
    line-height: 1.85;
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 800;
    text-decoration: none;
`;

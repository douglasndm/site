import styled, { css } from 'styled-components';

interface ContainerProps {
    accentColor: string;
    variant: 'card' | 'hero';
}

interface LogoProps {
    borderRadius?: boolean;
}

interface HaloProps {
    accentColor: string;
}

export const Container = styled.article<ContainerProps>`
    position: relative;
    overflow: hidden;
    border-radius: ${({ variant }) => (variant === 'hero' ? '32px' : '28px')};
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.04),
            rgba(255, 255, 255, 0)
        ),
        ${({ theme }) => theme.colors.backgroundElevated};
    box-shadow: 0 26px 70px -40px ${({ theme }) => theme.colors.shadow};

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        pointer-events: none;
        background: linear-gradient(
            135deg,
            ${({ accentColor }) => `${accentColor}22`} 0%,
            transparent 42%
        );
    }

    ${({ variant }) =>
        variant === 'hero'
            ? css`
                  padding: clamp(1.4rem, 3vw, 2.25rem);
              `
            : css`
                  padding: 1.4rem;
                  height: 100%;
              `}
`;

export const CardHeader = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const DetailHero = styled.div`
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: minmax(240px, 360px) minmax(0, 1fr);
    gap: clamp(1.5rem, 3vw, 3rem);
    align-items: center;

    @media (max-width: 920px) {
        grid-template-columns: 1fr;
    }
`;

export const DetailVisual = styled.div`
    position: relative;
    display: grid;
    place-items: center;
    min-height: 320px;
    padding: 2rem;
    border-radius: 28px;
    background: ${({ theme }) => theme.colors.overlay};
    border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const LogoHalo = styled.div<HaloProps>`
    position: absolute;
    width: 16rem;
    height: 16rem;
    border-radius: 999px;
    background: ${({ accentColor }) => accentColor};
    opacity: 0.2;
    filter: blur(30px);
`;

export const AppLogo = styled.img<LogoProps>`
    position: relative;
    z-index: 1;
    width: clamp(5.25rem, 12vw, 7rem);
    height: clamp(5.25rem, 12vw, 7rem);
    aspect-ratio: 1 / 1;
    border-radius: ${(props) => (props.borderRadius ? '32%' : '24px')};
    object-fit: contain;
    background: ${({ theme }) => theme.colors.backgroundElevated};
    box-shadow: 0 18px 38px -24px ${({ theme }) => theme.colors.shadow};
    flex-shrink: 0;
`;

export const MetaBadge = styled.span`
    position: relative;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    min-height: 2rem;
    margin-bottom: 0.9rem;
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

export const AppTitle = styled.h2`
    position: relative;
    z-index: 1;
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Sora', sans-serif;
    font-size: clamp(1.45rem, 3vw, 2.8rem);
    line-height: 1.1;
    letter-spacing: -0.04em;
`;

export const AppDescription = styled.p`
    position: relative;
    z-index: 1;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 1rem;
    line-height: 1.75;
`;

export const DetailDescription = styled(AppDescription)`
    max-width: 62ch;
    font-size: 1.05rem;
`;

export const AppHighlight = styled.p`
    position: relative;
    z-index: 1;
    margin-top: 1.15rem;
    padding-left: 1rem;
    border-left: 3px solid ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.98rem;
    line-height: 1.7;
`;

export const StoreButtons = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.85rem;
    margin-top: 1.3rem;
`;

export const StoreBadge = styled.img`
    height: 2.75rem;
    width: auto;
    object-fit: contain;
    transition: transform 0.2s ease;

    &:hover {
        transform: translateY(-2px);
    }
`;

export const DetailActions = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 0.85rem;
    margin-top: 1.4rem;
`;

export const CardAction = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 2.9rem;
    padding: 0.8rem 1rem;
    border-radius: 999px;
    border: 1px solid ${({ theme }) => theme.colors.borderStrong};
    background: ${({ theme }) => theme.colors.backgroundStrong};
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.95rem;
    font-weight: 800;
    text-decoration: none;
    transition: transform 0.2s ease, border-color 0.2s ease,
        background 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        border-color: ${({ theme }) => theme.colors.primary};
    }
`;

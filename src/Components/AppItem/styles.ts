import styled, { css } from 'styled-components';

interface ContainerProps {
    accentColor: string;
    variant?: 'card' | 'hero';
}

interface LogoProps {
    borderRadius?: boolean;
    logoIsWhite?: boolean;
    accentColor?: string;
}

export const AppLogo = styled.img<LogoProps>`
    position: relative;
    z-index: 2;
    width: clamp(100px, 15vw, 150px);
    height: clamp(100px, 15vw, 150px);
    aspect-ratio: 1 / 1;
    border-radius: ${(props) => (props.borderRadius ? '50%' : '24px')};
    object-fit: contain;
    background: ${({ theme, logoIsWhite, accentColor }) =>
        logoIsWhite ? accentColor || theme.colors.primary : theme.colors.backgroundElevated};
    padding: ${({ logoIsWhite }) => (logoIsWhite ? '1rem' : '0')};
    box-shadow: 0 10px 25px -8px ${({ theme }) => theme.colors.shadow};
    transition: transform 0.25s ease;

    &:hover {
        transform: scale(1.04);
    }
`;

interface GlowProps {
    accentColor: string;
}

export const Container = styled.article<ContainerProps>`
    position: relative;
    width: 100%;
    border-radius: 24px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme, accentColor }) =>
        theme.name === 'dark'
            ? `radial-gradient(ellipse at top left, ${accentColor}1c 0%, transparent 65%), #111723`
            : `radial-gradient(ellipse at top left, ${accentColor}12 0%, transparent 65%), #ffffff`};
    box-shadow: 0 12px 36px -16px ${({ theme }) => theme.colors.shadow};
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
    overflow: hidden;

    &:hover {
        transform: translateY(-3px);
        border-color: ${({ accentColor }) => `${accentColor}55`};
        box-shadow: 0 20px 45px -18px ${({ accentColor }) => `${accentColor}33`};
    }
`;

export const AppShowcaseContent = styled.div<{ variant?: 'card' | 'hero' }>`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: clamp(1.5rem, 4vw, 3rem);
    align-items: center;
    padding: clamp(1.75rem, 3.5vw, 2.75rem);

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        justify-items: center;
        text-align: center;
        padding: 1.5rem;
    }
`;

export const LogoContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`;

export const LogoGlow = styled.div<GlowProps>`
    position: absolute;
    width: 110%;
    height: 110%;
    border-radius: 50%;
    background: ${({ accentColor }) => accentColor};
    opacity: 0.22;
    filter: blur(22px);
    pointer-events: none;
`;



export const AppInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    min-width: 0;

    @media (max-width: 768px) {
        align-items: center;
    }
`;

export const AppTitle = styled.h2`
    font-size: clamp(1.5rem, 3vw, 2.25rem);
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: -0.02em;
    line-height: 1.2;
    transition: color 0.2s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const AppDescription = styled.p`
    font-size: 1.05rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textMuted};
    max-width: 60ch;
`;

export const StoreButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem;
    margin-top: 0.5rem;

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

export const StoreBadge = styled.img`
    height: 44px;
    width: auto;
    object-fit: contain;
    border-radius: 8px;
    transition: transform 0.2s ease, opacity 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        opacity: 0.9;
    }
`;

export const ActionButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem;
    margin-top: 0.5rem;

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

const buttonBase = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.6rem 1.1rem;
    font-size: 0.92rem;
    font-weight: 600;
    border-radius: 999px;
    transition: transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
`;

export const ActionButton = styled.button`
    ${buttonBase}
    background: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.text};

    &:hover {
        transform: translateY(-2px);
        opacity: 0.9;
    }
`;

export const SecondaryButton = styled.a`
    ${buttonBase}
    background: ${({ theme }) => theme.colors.backgroundAccent};
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.border};

    &:hover {
        transform: translateY(-2px);
        background: ${({ theme }) => theme.colors.border};
    }
`;

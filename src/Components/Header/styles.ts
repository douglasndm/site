import styled, { css } from 'styled-components';
import { Link, NavLink } from 'react-router';

interface HeaderProps {
    fixed?: boolean;
}

interface NavMenuProps {
    open: boolean;
}

export const Container = styled.div<HeaderProps>`
    position: ${(props) => (props.fixed === false ? 'relative' : 'sticky')};
    top: 0;
    z-index: 100;
    width: 100%;
    padding: 0.75rem 1.25rem;
`;

export const HeaderInner = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0.6rem 1.2rem;
    border-radius: 999px;
    background: ${({ theme }) =>
        theme.name === 'dark' ? 'rgba(11, 15, 23, 0.85)' : 'rgba(255, 255, 255, 0.88)'};
    backdrop-filter: saturate(180%) blur(16px);
    -webkit-backdrop-filter: saturate(180%) blur(16px);
    border: 1px solid ${({ theme }) => theme.colors.border};
    box-shadow: 0 10px 30px -10px ${({ theme }) => theme.colors.shadow};
    position: relative;
`;

export const BrandLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 0.6rem;

    &:hover img {
        opacity: 0.85;
    }
`;

export const Logo = styled.img`
    height: 38px;
    width: auto;
    display: block;
    transition: opacity 0.2s ease;

    @media (max-width: 600px) {
        height: 32px;
    }
`;

export const NavMenu = styled.nav<NavMenuProps>`
    display: flex;
    align-items: center;
    gap: 0.35rem;

    @media (max-width: 768px) {
        display: ${({ open }) => (open ? 'flex' : 'none')};
        position: absolute;
        top: calc(100% + 0.5rem);
        left: 0;
        right: 0;
        flex-direction: column;
        align-items: stretch;
        background: ${({ theme }) =>
            theme.name === 'dark' ? 'rgba(11, 15, 23, 0.95)' : 'rgba(255, 255, 255, 0.96)'};
        backdrop-filter: blur(20px);
        padding: 0.75rem;
        border-radius: 20px;
        border: 1px solid ${({ theme }) => theme.colors.border};
        box-shadow: 0 16px 32px ${({ theme }) => theme.colors.shadow};
    }
`;

const linkBase = css`
    font-size: 0.92rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textMuted};
    padding: 0.5rem 0.9rem;
    border-radius: 999px;
    transition: color 0.2s ease, background-color 0.2s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.text};
        background: ${({ theme }) => theme.colors.backgroundAccent};
    }

    &.active {
        color: ${({ theme }) => theme.colors.text};
        font-weight: 700;
        background: ${({ theme }) => theme.colors.backgroundAccent};
    }

    @media (max-width: 768px) {
        border-radius: 12px;
        padding: 0.65rem 1rem;
    }
`;

export const NavItemLink = styled(NavLink)`
    ${linkBase}
`;

export const NavItemExternal = styled.a`
    ${linkBase}
`;

export const NavActions = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .mobile-toggle {
        display: none;

        @media (max-width: 768px) {
            display: flex;
        }
    }
`;

export const IconButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.backgroundAccent};
    border: 1px solid ${({ theme }) => theme.colors.border};
    transition: transform 0.2s ease, background-color 0.2s ease;

    &:hover {
        transform: scale(1.05);
        background: ${({ theme }) => theme.colors.border};
    }
`;

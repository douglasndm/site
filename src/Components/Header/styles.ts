import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
    fixed?: boolean;
}

interface MenuProps {
    open: boolean;
}

export const Container = styled.div<HeaderProps>`
    position: ${(props) => (props.fixed === false ? 'relative' : 'sticky')};
    top: 0;
    z-index: 20;
    width: 100%;
    padding: 1rem clamp(1rem, 2vw, 2rem) 0;

    a {
        text-decoration: none;
    }
`;

export const HeaderBar = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    max-width: 1180px;
    margin: 0 auto;
    padding: 1rem 1.25rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.backgroundElevated};
    backdrop-filter: blur(18px);
    box-shadow: 0 22px 50px -30px ${({ theme }) => theme.colors.shadow};
    border-radius: 24px;

    @media (max-width: 720px) {
        align-items: flex-start;
    }
`;

export const Logo = styled.img.attrs(() => ({
    src: `${process.env.PUBLIC_URL}/Assets/Images/logo-horizontal-stroke.png`,
}))`
    width: 3.25rem;
    height: 3.25rem;
    object-fit: contain;
    border-radius: 1rem;
    box-shadow: 0 14px 24px -18px ${({ theme }) => theme.colors.shadow};
`;

export const BrandLockup = styled.div`
    display: flex;
    align-items: center;
    gap: 0.95rem;
    min-width: 0;
`;

export const BrandTitle = styled.span`
    display: block;
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Sora', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: -0.03em;
`;

export const BrandSubtitle = styled.span`
    display: block;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 0.92rem;
    margin-top: 0.2rem;

    @media (max-width: 540px) {
        display: none;
    }
`;

export const NavActions = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-left: auto;
`;

const actionButton = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 2.75rem;
    padding: 0.75rem 1rem;
    border-radius: 999px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.backgroundStrong};
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.92rem;
    font-weight: 700;
    transition: transform 0.2s ease, border-color 0.2s ease,
        background 0.2s ease;

    &:hover {
        transform: translateY(-1px);
        border-color: ${({ theme }) => theme.colors.borderStrong};
    }
`;

export const ThemeToggle = styled.button`
    ${actionButton}
`;

export const MenuButton = styled.button`
    ${actionButton}
    display: none;

    @media (max-width: 900px) {
        display: inline-flex;
    }
`;

export const MenuContainer = styled.menu<MenuProps>`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    max-width: 1180px;
    margin: 0.85rem auto 0;
    padding: 0.95rem 1.1rem;
    border-radius: 22px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.backgroundElevated};
    backdrop-filter: blur(18px);

    @media (max-width: 900px) {
        display: ${({ open }) => (open ? 'flex' : 'none')};
        flex-direction: column;
        align-items: stretch;
    }
`;

export const MenuItem = styled.span`
    display: inline-flex;
`;

const menuLinkStyles = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 2.75rem;
    padding: 0.75rem 1rem;
    border-radius: 999px;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 0.95rem;
    font-weight: 700;
    transition: color 0.2s ease, background 0.2s ease, transform 0.2s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.text};
        background: ${({ theme }) => theme.colors.overlay};
        transform: translateY(-1px);
    }

    &.active {
        background: ${({ theme }) => theme.gradients.hero};
        color: ${({ theme }) => theme.colors.textOnAccent};
        box-shadow: 0 20px 30px -24px ${({ theme }) => theme.colors.shadow};
    }

    @media (max-width: 900px) {
        width: 100%;
        justify-content: flex-start;
    }
`;

export const MenuItemLink = styled(NavLink)`
    ${menuLinkStyles}
`;

export const MenuItemLinkExternal = styled.a.attrs(() => ({
    target: '_blank',
    rel: 'noreferrer',
}))`
    ${menuLinkStyles}
`;

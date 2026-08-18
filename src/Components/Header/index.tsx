import React, { useMemo, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { HiMoon, HiSun, HiBars3, HiXMark } from 'react-icons/hi2';

import { useThemeMode } from '../../Contexts/ThemeContext';

import {
    Container,
    HeaderInner,
    BrandLink,
    Logo,
    NavMenu,
    NavItemLink,
    NavItemExternal,
    NavActions,
    IconButton,
} from './styles';

interface HeaderProps {
    fixed?: boolean;
}

const Header: React.FC<HeaderProps> = ({ fixed }: HeaderProps) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { themeMode, toggleTheme } = useThemeMode();

    const externalLinks = useMemo(
        () => [
            {
                href: 'https://www.linkedin.com/in/douglasndm/',
                label: 'LinkedIn',
            },
            {
                href: 'https://github.com/douglasndm',
                label: 'GitHub',
            },
            {
                href: 'https://bsky.app/profile/douglasndm.dev',
                label: 'Bluesky',
            },
        ],
        []
    );

    return (
        <Container fixed={fixed}>
            <HeaderInner>
                <BrandLink to="/" onClick={() => setMobileOpen(false)}>
                    <Logo src="/Assets/Images/logo-horizontal.png" alt="douglasndm logo" />
                </BrandLink>

                <NavMenu open={mobileOpen}>
                    <NavItemLink to="/" end onClick={() => setMobileOpen(false)}>
                        Apps
                    </NavItemLink>
                    <NavItemLink to="/privacy" onClick={() => setMobileOpen(false)}>
                        Privacidade
                    </NavItemLink>
                    <NavItemLink to="/terms" onClick={() => setMobileOpen(false)}>
                        Termos
                    </NavItemLink>
                    {externalLinks.map((link) => (
                        <NavItemExternal
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {link.label}
                        </NavItemExternal>
                    ))}
                </NavMenu>

                <NavActions>
                    <IconButton
                        type="button"
                        onClick={toggleTheme}
                        aria-label={`Ativar tema ${
                            themeMode === 'light' ? 'escuro' : 'claro'
                        }`}
                        title={`Alternar para tema ${
                            themeMode === 'light' ? 'escuro' : 'claro'
                        }`}
                    >
                        {themeMode === 'light' ? (
                            <HiMoon size={19} />
                        ) : (
                            <HiSun size={19} />
                        )}
                    </IconButton>

                    <IconButton
                        type="button"
                        className="mobile-toggle"
                        onClick={() => setMobileOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <HiXMark size={22} /> : <HiBars3 size={22} />}
                    </IconButton>
                </NavActions>
            </HeaderInner>
        </Container>
    );
};

export default Header;

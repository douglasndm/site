import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { useThemeMode } from '../../Contexts/ThemeContext';

import {
    BrandLockup,
    BrandSubtitle,
    BrandTitle,
    Container,
    HeaderBar,
    Logo,
    MenuButton,
    MenuContainer,
    MenuItem,
    MenuItemLink,
    MenuItemLinkExternal,
    NavActions,
    ThemeToggle,
} from './styles';

interface HeaderProps {
    fixed?: boolean;
}

const Header: React.FC<HeaderProps> = ({ fixed }: HeaderProps) => {
    const [menuOpen, setMenuOpen] = useState(false);
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
            <HeaderBar>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                    <BrandLockup>
                        <Logo alt="douglasndm logo" />
                        <div>
                            <BrandTitle>douglasndm.dev</BrandTitle>
                            <BrandSubtitle>
                                apps independentes, úteis e com personalidade
                            </BrandSubtitle>
                        </div>
                    </BrandLockup>
                </Link>

                <NavActions>
                    <ThemeToggle
                        type="button"
                        onClick={toggleTheme}
                        aria-label={`Ativar tema ${
                            themeMode === 'light' ? 'escuro' : 'claro'
                        }`}
                    >
                        <span>{themeMode === 'light' ? 'Dark' : 'Light'}</span>
                    </ThemeToggle>

                    <MenuButton
                        type="button"
                        aria-label="Abrir menu"
                        onClick={() =>
                            setMenuOpen((currentState) => !currentState)
                        }
                    >
                        Menu
                    </MenuButton>
                </NavActions>
            </HeaderBar>

            <MenuContainer open={menuOpen}>
                <MenuItem>
                    <MenuItemLink
                        exact
                        to="/"
                        onClick={() => setMenuOpen(false)}
                    >
                        Apps
                    </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink
                        to="/privacy"
                        onClick={() => setMenuOpen(false)}
                    >
                        Privacidade
                    </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink
                        exact
                        to="/terms"
                        onClick={() => setMenuOpen(false)}
                    >
                        Termos
                    </MenuItemLink>
                </MenuItem>
                {externalLinks.map((link) => (
                    <MenuItem key={link.href}>
                        <MenuItemLinkExternal href={link.href}>
                            {link.label}
                        </MenuItemLinkExternal>
                    </MenuItem>
                ))}
            </MenuContainer>
        </Container>
    );
};

export default Header;

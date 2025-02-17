import React from 'react';
import { Link } from 'react-router-dom';

import {
    Container,
    HeaderContainer,
    Logo,
    MenuContainer,
    MenuItem,
    MenuItemLink,
    MenuItemLinkExternal,
} from './styles';

interface HeaderProps {
    fixed?: boolean;
}

const Header: React.FC<HeaderProps> = ({ fixed }: HeaderProps) => (
    <Container fixed={fixed}>
        <HeaderContainer>
            <Link to="/">
                <Logo alt="douglasndm logo" />
            </Link>

            <MenuContainer>
                <MenuItem>
                    <MenuItemLink to="/">apps</MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink to="/privacy">privacidade</MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink to="/terms">termos</MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLinkExternal href="https://www.linkedin.com/in/douglasndm/">
                        linkedin
                    </MenuItemLinkExternal>
                </MenuItem>
                <MenuItem className="canCollapse">
                    <MenuItemLinkExternal href="https://github.com/douglasndm">
                        github
                    </MenuItemLinkExternal>
                </MenuItem>

                <MenuItem className="canCollapse">
                    <MenuItemLinkExternal href="https://bsky.app/profile/douglasndm.dev">
                        bluesky
                    </MenuItemLinkExternal>
                </MenuItem>
            </MenuContainer>
        </HeaderContainer>
    </Container>
);

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

import {
    Container,
    HeaderContainer,
    LogoText,
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
                <LogoText>douglasndm apps</LogoText>
            </Link>

            <MenuContainer>
                <MenuItem>
                    <MenuItemLink to="/">apps</MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLinkExternal href="https://docs.douglasndm.dev">
                        blog
                    </MenuItemLinkExternal>
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
                    <MenuItemLinkExternal href="https://twitter.com/douglasndmdev">
                        twitter
                    </MenuItemLinkExternal>
                </MenuItem>
            </MenuContainer>
        </HeaderContainer>
    </Container>
);

export default Header;

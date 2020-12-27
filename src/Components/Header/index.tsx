import React from 'react';

import {
    Container,
    HeaderContainer,
    LogoText,
    MenuContainer,
    MenuItem,
    MenuItemLink,
    MenuItemLinkExternal,
} from './styles';

const Header: React.FC = () => (
    <Container>
        <HeaderContainer>
            <LogoText>douglasndm apps</LogoText>

            <MenuContainer>
                <MenuItem>
                    <MenuItemLink to="/">apps</MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink to="/privacy">privacidade</MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLinkExternal href="https://www.linkedin.com/in/douglasndm/">
                        linkedin
                    </MenuItemLinkExternal>
                </MenuItem>
                <MenuItem>
                    <MenuItemLinkExternal href="https://github.com/douglasndm">
                        github
                    </MenuItemLinkExternal>
                </MenuItem>
            </MenuContainer>
        </HeaderContainer>
    </Container>
);

export default Header;

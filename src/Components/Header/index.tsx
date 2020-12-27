import React from 'react';

import {
    Container,
    HeaderContainer,
    LogoText,
    MenuContainer,
    MenuItem,
    MenuItemLink,
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
                    <MenuItemLink to="/privacy">privacy</MenuItemLink>
                </MenuItem>
            </MenuContainer>
        </HeaderContainer>
    </Container>
);

export default Header;

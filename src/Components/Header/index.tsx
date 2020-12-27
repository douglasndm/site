import React from 'react';

import {
  Container, LogoText, MenuContainer, MenuItem, MenuItemLink,
} from './styles';

const Header: React.FC = () => (
    <Container>
        <LogoText>douglasndm apps</LogoText>

        <MenuContainer>
            <MenuItem>
                <MenuItemLink to="/">apps</MenuItemLink>
            </MenuItem>
            <MenuItem>
                <MenuItemLink to="/privacy">privacy</MenuItemLink>
            </MenuItem>
        </MenuContainer>
    </Container>
);

export default Header;

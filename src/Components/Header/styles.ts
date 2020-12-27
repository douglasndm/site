import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    position: fixed;
    width: 100vw;
`;

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;

    padding: 4% 6%;
`;

export const LogoText = styled.h1`
    font-family: 'Roboto', sans-serif;
    color: white;
`;

export const MenuContainer = styled.menu``;

export const MenuItem = styled.span``;

export const MenuItemLink = styled(Link)`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;

    text-decoration: none;
    font-size: 23px;
    color: white;

    :first-child {
        margin-left: 30px;
    }
`;

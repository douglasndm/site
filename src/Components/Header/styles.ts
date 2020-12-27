import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface HeaderProps {
    fixed?: boolean;
}

export const Container = styled.div<HeaderProps>`
    position: ${(props) => (props.fixed === false ? 'absolute' : 'fixed')};
    width: 100vw;
`;

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;

    padding: 4% 6%;

    @media (max-width: 800px) {
        padding: 10px;
        justify-content: center;
    }
`;

export const LogoText = styled.h1`
    font-family: 'Roboto', sans-serif;
    color: white;

    @media (max-width: 800px) {
        display: none;
    }
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

export const MenuItemLinkExternal = styled.a.attrs(() => ({
    target: '_blank',
}))`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;

    text-decoration: none;
    font-size: 23px;
    color: white;

    :first-child {
        margin-left: 30px;
    }
`;

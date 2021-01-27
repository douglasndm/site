import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface HeaderProps {
    fixed?: boolean;
}

export const Container = styled.div<HeaderProps>`
    position: ${(props) => (props.fixed === false ? 'absolute' : 'fixed')};
    width: 100vw;

    padding: 4% 6%;

    @media (max-width: 800px) {
        padding: 20px 0;
        justify-content: center;
    }
    @media (max-width: 1000px) and (max-height: 600px) {
        justify-content: center;
        padding: 2% 0 0 0;
    }
`;

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
`;

export const LogoText = styled.h1`
    font-family: 'Roboto', sans-serif;
    color: white;

    @media (max-width: 800px) {
        display: none;
    }
    @media (max-width: 1000px) and (max-height: 600px) {
        display: none;
    }
`;

export const MenuContainer = styled.menu`
    @media (max-width: 1000px) {
        flex: 1;
        text-align: center;
    }
`;

export const MenuItem = styled.span`
    :first-child {
        margin-right: 30px;
    }

    & + & {
        margin-right: 30px;
    }

    @media (max-width: 600px) {
        :first-child {
            margin-right: 10px;
        }
        & + & {
            margin-right: 10px;
        }
    }

    @media (max-width: 900px) {
        margin-right: 25px;
    }
`;

export const MenuItemLink = styled(Link)`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;

    text-decoration: none;
    font-size: 23px;
    color: white;
`;

export const MenuItemLinkExternal = styled.a.attrs(() => ({
    target: '_blank',
}))`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;

    text-decoration: none;
    font-size: 23px;
    color: white;
`;

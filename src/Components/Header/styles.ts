import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface HeaderProps {
    fixed?: boolean;
}

export const Container = styled.div<HeaderProps>`
    position: ${(props) => (props.fixed === false ? 'absolute' : 'fixed')};
    width: 100vw;

    padding: 2% 6%;

    a {
        text-decoration: none;
    }

    @media (max-width: 1150px) {
        padding: 2% 3% 0 3%;
    }

    @media (max-width: 1000px) and (max-height: 600px) {
        justify-content: center;
        padding: 2% 0 0 0;
    }
    @media (max-width: 800px) {
        padding: 20px 0;
        justify-content: center;
    }

    @media (max-width: 900px) {
        justify-content: center;
        padding: 2% 3%;
    }

    @media (max-width: 290px) {
        display: none;
    }
`;

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;

    @media (max-width: 450px) {
        .canCollapse {
            display: none;
        }
    }

    @media (max-width: 1160px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Logo = styled.img.attrs(() => ({
    src: `${process.env.PUBLIC_URL}/Assets/Images/logo-horizontal.png`,
}))`
    width: 468px;
    height: 86px;

    @media (max-width: 1000px) {
        width: 300px;
        height: 55px;
    }

    @media (max-width: 800px) {
        width: 250px;
        height: 46px;
    }
`;

export const MenuContainer = styled.menu`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 15px;
    border-radius: 12px;
    backdrop-filter: saturate(180%) blur(20px);
    max-height: 60px;
    align-items: center;
    display: flex;

    @-moz-document url-prefix() {
        background-color: rgba(0, 0, 0, 0.85);
    }

    @media (max-width: 1000px) {
        flex: 1;
        text-align: center;
    }

    @media (max-height: 500px) {
        margin-top: 2%;
    }
`;

export const MenuItem = styled.span`
    :first-child {
        margin-right: 20px;
    }

    & + & {
        margin-right: 20px;
    }
    :last-child {
        margin-right: 0;
    }

    @media (max-width: 900px) {
        margin-right: 25px;
    }

    @media (max-width: 600px) {
        :first-child {
            margin-right: 10px;
        }
        & + & {
            margin-right: 10px;
        }
    }
`;

export const MenuItemLink = styled(Link)`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;

    text-decoration: none;
    font-size: 20px;
    color: white;

    @media (max-width: 800px) {
        font-size: 18px;
    }
`;

export const MenuItemLinkExternal = styled.a.attrs(() => ({
    target: '_blank',
}))`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;

    text-decoration: none;
    font-size: 20px;
    color: white;

    @media (max-width: 800px) {
        font-size: 20px;
    }

    @media (max-width: 600px) {
        font-size: 18px;
    }
`;

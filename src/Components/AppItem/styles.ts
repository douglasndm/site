import styled from 'styled-components';

import MSStoreButton from '../../Assets/Images/Stores/MicrosoftStore/Portuguese-Brazilian_get it from MS_864X312.svg';
import AppStoreButton from '../../Assets/Images/Stores/AppStore/PT-BR/Dark.svg';
import GooglePlayButton from '../../Assets/Images/Stores/GooglePlay/google-play-badge.png';

interface ContainerProps {
    background: string;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex: 1;
    background-color: ${(props) => props.background};

    height: 100vh;

    align-items: center;
    justify-content: center;
`;

export const AppContainer = styled.div`
    display: flex;
    width: 95vw;

    @media (max-width: 1250px) {
        width: 95vw;
    }

    @media (max-width: 800px) {
        width: 100vw;
        padding-top: 5%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 800px) and (max-height: 500px) {
        flex-direction: row;
    }

    @media (max-width: 400px) {
        flex-direction: column;
    }
`;

interface LogoProps {
    borderRadius?: boolean;
}

export const AppLogo = styled.img<LogoProps>`
    width: 350px;
    height: 350px;
    border-radius: ${(props) => (props.borderRadius ? '50%' : 0)};
    margin-right: 5%;

    @media (max-width: 1300px) {
        margin-right: 2%;
    }
    @media (max-width: 1000px) and (max-height: 600px) {
        width: 240px;
        height: 240px;
        margin-right: 0;
    }

    @media (max-width: 800px) {
        width: 215px;
        height: 215px;
    }

    @media (max-width: 700px) {
        width: 175px;
        height: 175px;
    }

    @media (max-width: 400px) {
        width: 150px;
        height: 150px;
    }
`;

export const TextContainer = styled.div`
    width: 100%;
    align-self: left;

    @media (max-width: 1000px) {
        width: 90%;

        align-self: center;
    }

    @media (max-width: 700px) and (max-height: 400px) {
        margin-top: 5%;
    }
`;

export const DescriptionContainer = styled.div`
    color: white;
    font-size: 18px;

    display: flex;
    flex: 1;

    flex-direction: column;

    justify-content: center;
    align-items: left;

    margin-left: 2%;

    @media (max-width: 900px) {
        margin-left: 0;
    }
`;

interface TextProps {
    color: string;
}

export const AppTitle = styled.h1<TextProps>`
    font-size: 42px;
    color: white;
    font-weight: normal;
    margin-bottom: 1%;

    font-family: 'Roboto Condensed', sans-serif;

    color: ${(props) => props.color};

    @media (max-width: 1200px) {
        text-align: center;
    }

    @media (max-width: 900px) {
        font-size: 30px;
        margin-bottom: 4%;
    }

    @media (max-width: 600px) {
        font-size: 26px;
    }

    @media (max-width: 700px) and (max-height: 400px) {
        font-size: 30px;
        margin-bottom: 4%;
    }
`;

export const AppDescription = styled.p<TextProps>`
    color: ${(props) => props.color};
    font-family: 'Open Sans', sans-serif;

    @media (max-width: 1200px) {
        text-align: center;
    }

    @media (max-width: 600px) {
        font-size: 16px;
    }
`;

export const StoreButtonsContainer = styled.div`
    margin-top: 2%;
    align-items: center;
    flex-direction: row;
    display: flex;

    @media (max-width: 1300px) {
        justify-content: center;
        align-content: center;
    }

    @media (max-width: 1100px) {
        flex-direction: column;
        margin-top: 5%;
    }
`;

export const ButtonDownload_MicrosoftStore = styled.img.attrs(() => ({
    src: MSStoreButton,
}))`
    width: 200px;
    height: 67px;
    margin-right: 20px;
    border-radius: 22px;

    @media (max-width: 1200px) {
        width: 190px;
        height: 60px;
        margin-right: 0;
    }
`;

export const ButtonDownload_AppStore = styled.img.attrs(() => ({
    src: AppStoreButton,
}))`
    width: 200px;
    height: 75px;
    margin-right: 20px;

    @media (max-width: 1200px) {
        width: 175px;
        height: 55px;
        margin-right: 0;
    }

    @media (max-width: 600px) {
        width: 150px;
        height: 50px;
    }
`;

export const ButtonDownload_GooglePlay = styled.img.attrs(() => ({
    src: GooglePlayButton,
}))`
    width: 220px;
    height: 95px;

    @media (max-width: 1200px) {
        width: 190px;
        height: 80px;
        margin-right: 0;
    }

    @media (max-width: 600px) {
        width: 173px;
        height: 70px;
    }
`;

export const MoreInfoButton = styled.a`
    background-color: rgba(0, 0, 0, 1);
    padding: 21px 20px;
    border-radius: 10px;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    color: rgba(255, 255, 255, 1);
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.2s;
    margin-left: 20px;

    &:hover {
        background-color: rgba(100, 100, 100, 1);
    }

    @media (max-width: 1300px) {
        margin-top: -5px;
        padding: 18px 20px;
        margin-left: 2px;
        font-size: 14px;
    }

    @media (max-width: 1100px) {
        padding: 20px;
        margin-left: 0;
    }
`;

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
    width: 80vw;

    @media (max-width: 800px) {
        width: 100vw;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 1250px) {
        width: 95vw;
    }

    @media (max-width: 800px) and (max-height: 600px) {
        width: 100vw;
        padding-top: 5%;
        flex-direction: row;
        justify-content: center;
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
    }

    @media (max-width: 800px) {
        width: 215px;
        height: 215px;
    }

    @media (max-width: 600px) {
        width: 200px;
        height: 200px;
    }
`;

export const TextContainer = styled.div`
    width: 100%;

    @media (max-width: 1000px) {
        width: 90%;
    }
`;

export const DescriptionContainer = styled.div`
    color: white;
    font-size: 18px;

    display: flex;

    flex-direction: column;

    justify-content: center;
    align-items: center;
`;

interface TextProps {
    color: string;
}

export const AppTitle = styled.h2<TextProps>`
    font-size: 42px;
    color: white;
    font-weight: normal;

    color: ${(props) => props.color};

    @media (max-width: 1000px) {
        text-align: center;
    }
`;

export const AppDescription = styled.p<TextProps>`
    color: ${(props) => props.color};

    @media (max-width: 1000px) {
        text-align: center;
    }
`;

export const StoreButtonsContainer = styled.div`
    margin-top: 2%;
    align-items: center;
    display: flex;

    @media (max-width: 1000px) {
        flex-direction: column;
        margin-top: 5%;
    }

    @media (max-width: 1000px) and (max-height: 600px) {
        flex-direction: row;
    }
`;

export const ButtonDownload_MicrosoftStore = styled.img.attrs(() => ({
    src: MSStoreButton,
}))`
    width: 200px;
    height: 75px;
    margin-right: 20px;

    @media (max-width: 1000px) {
        margin-right: 0;
    }

    @media (max-width: 600px) {
        width: 150px;
        height: 50px;
    }
`;

export const ButtonDownload_AppStore = styled.img.attrs(() => ({
    src: AppStoreButton,
}))`
    width: 200px;
    height: 75px;
    margin-right: 20px;

    @media (max-width: 1000px) {
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
    width: 200px;
    height: 90px;

    @media (max-width: 600px) {
        width: 150px;
        height: 75px;
    }
`;

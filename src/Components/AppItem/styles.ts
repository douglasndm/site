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
`;

interface LogoProps {
    borderRadius?: boolean;
}

export const AppLogo = styled.img<LogoProps>`
    width: 350px;
    height: 350px;
    border-radius: ${(props) => (props.borderRadius ? '50%' : 0)};
    margin-right: 5%;
`;

export const TextContainer = styled.div`
    width: 100%;
`;

export const DescriptionContainer = styled.div`
    color: white;
    font-size: 18px;
    flex: 1;
    display: flex;

    flex-direction: column;

    justify-content: center;
`;

interface TextProps {
    color: string;
}

export const AppTitle = styled.h2<TextProps>`
    font-size: 42px;
    color: white;
    font-weight: normal;

    color: ${(props) => props.color};
`;

export const AppDescription = styled.p<TextProps>`
    color: ${(props) => props.color};
`;

export const StoreButtonsContainer = styled.div`
    margin-top: 2%;
    align-items: center;
    display: flex;
`;

export const ButtonDownload_MicrosoftStore = styled.img.attrs(() => ({
    src: MSStoreButton,
}))`
    width: 200px;
    height: 75px;
    margin-right: 20px;
`;

export const ButtonDownload_AppStore = styled.img.attrs(() => ({
    src: AppStoreButton,
}))`
    width: 200px;
    height: 75px;
    margin-right: 20px;
`;

export const ButtonDownload_GooglePlay = styled.img.attrs(() => ({
    src: GooglePlayButton,
}))`
    width: 200px;
    height: 90px;
`;

import styled from 'styled-components';

import MSStoreButton from '../../Assets/Images/Stores/MicrosoftStore/Portuguese-Brazilian_get it from MS_864X312.svg';
import AppStoreButton from '../../Assets/Images/Stores/AppStore/PT-BR/Dark.svg';
import GooglePlayButton from '../../Assets/Images/Stores/GooglePlay/google-play-badge.png';

export const Container = styled.div`
    display: flex;
    flex: 1;
    background-color: #7159c1;

    height: 100vh;

    align-items: center;
    justify-content: center;
`;

export const AppContainer = styled.div`
    display: flex;
    width: 80vw;
`;

export const AppLogo = styled.img`
    width: 350px;
    height: 350px;
    border-radius: 50%;
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

export const AppTitle = styled.h2`
    font-size: 42px;
    color: white;
    font-weight: normal;
`;

export const AppDescription = styled.p``;

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

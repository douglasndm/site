import styled from 'styled-components';

import MSStoreButton from '../../Assets/Images/Stores/MicrosoftStore/Portuguese-Brazilian_get it from MS_864X312.svg';
import AppStoreButton from '../../Assets/Images/Stores/AppStore/PT-BR/Dark.svg';
import GooglePlayButton from '../../Assets/Images/Stores/GooglePlay/google-play-badge.png';

export const Container = styled.div`
    display: flex;
    flex: 1;
    background-color: #7159c1;
`;

export const AppLogo = styled.img`
    width: 350px;
`;

export const DescriptionContainer = styled.div``;

export const AppTitle = styled.h2`
    font-size: 42px;
    color: white;
    font-weight: normal;
`;

export const AppDescription = styled.p``;

export const StoreButtonsContainer = styled.div``;

export const ButtonDownload_MicrosoftStore = styled.img.attrs(() => ({
    src: MSStoreButton,
}))``;

export const ButtonDownload_AppStore = styled.img.attrs(() => ({
    src: AppStoreButton,
}))``;

export const ButtonDownload_GooglePlay = styled.img.attrs(() => ({
    src: GooglePlayButton,
}))``;

import React from 'react';

import logo from '../../Assets/Images/Apps/controledevalidade.png';

import {
    Container,
    AppLogo,
    DescriptionContainer,
    AppTitle,
    AppDescription,
    StoreButtonsContainer,
    ButtonDownload_MicrosoftStore,
    ButtonDownload_AppStore,
    ButtonDownload_GooglePlay,
} from './styles';

const AppItem: React.FC = () => (
    <Container>
        <AppLogo src={logo} />

        <DescriptionContainer>
            <AppTitle>Controle de Validade</AppTitle>
            <AppDescription>the best app</AppDescription>

            <StoreButtonsContainer>
                <ButtonDownload_AppStore />
                <ButtonDownload_GooglePlay />
                <ButtonDownload_MicrosoftStore />
            </StoreButtonsContainer>
        </DescriptionContainer>
    </Container>
);

export default AppItem;

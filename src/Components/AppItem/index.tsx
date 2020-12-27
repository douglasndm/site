import React from 'react';
import { Link } from 'react-router-dom';

import {
    Container,
    AppContainer,
    AppLogo,
    DescriptionContainer,
    TextContainer,
    AppTitle,
    AppDescription,
    StoreButtonsContainer,
    ButtonDownload_MicrosoftStore,
    ButtonDownload_AppStore,
    ButtonDownload_GooglePlay,
} from './styles';

interface Props {
    App: IApp;
}

const AppItem: React.FC<Props> = ({ App }: Props) => {
    const { name, logo, description, MSStore, AppStore, GooglePlay } = App;

    return (
        <Container>
            <AppContainer>
                <AppLogo src={logo} />

                <DescriptionContainer>
                    <TextContainer>
                        <AppTitle>{name}</AppTitle>
                        <AppDescription>{description}</AppDescription>
                    </TextContainer>

                    <StoreButtonsContainer>
                        <Link to={MSStore}>
                            <ButtonDownload_MicrosoftStore />
                        </Link>
                        <Link to={AppStore}>
                            <ButtonDownload_AppStore />
                        </Link>
                        <Link to={GooglePlay}>
                            <ButtonDownload_GooglePlay />
                        </Link>
                    </StoreButtonsContainer>
                </DescriptionContainer>
            </AppContainer>
        </Container>
    );
};

export default AppItem;

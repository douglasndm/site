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
    borderRadius?: boolean;
}

const AppItem: React.FC<Props> = ({ App, borderRadius }: Props) => {
    const { name, logo, description, MSStore, AppStore, GooglePlay } = App;

    return (
        <Container background={App.backgroundColor}>
            <AppContainer>
                <AppLogo src={logo} borderRadius={borderRadius} />

                <DescriptionContainer>
                    <TextContainer>
                        <AppTitle color={App.textColor}>{name}</AppTitle>
                        <AppDescription color={App.textColor}>
                            {description}
                        </AppDescription>
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

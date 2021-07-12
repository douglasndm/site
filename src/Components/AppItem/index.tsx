import React from 'react';

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
                <AppLogo
                    src={`${process.env.PUBLIC_URL}/${logo}`}
                    borderRadius={borderRadius}
                />

                <DescriptionContainer>
                    <TextContainer>
                        <AppTitle color={App.textColor}>{name}</AppTitle>
                        <AppDescription color={App.textColor}>
                            {description}
                        </AppDescription>
                    </TextContainer>

                    <StoreButtonsContainer>
                        {!!MSStore && (
                            <a href={MSStore}>
                                <ButtonDownload_MicrosoftStore />
                            </a>
                        )}

                        {!!AppStore && (
                            <a href={AppStore}>
                                <ButtonDownload_AppStore />
                            </a>
                        )}
                        {!!GooglePlay && (
                            <a href={GooglePlay}>
                                <ButtonDownload_GooglePlay />
                            </a>
                        )}
                    </StoreButtonsContainer>
                </DescriptionContainer>
            </AppContainer>
        </Container>
    );
};

export default AppItem;

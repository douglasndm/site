import React from 'react';
import { Link } from 'react-router-dom';

import WebButton from '../WebButton';

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
    const { id, name, logo, description, MSStore, AppStore, GooglePlay } = App;

    return (
        <Container background={App.backgroundColor}>
            <AppContainer>
                <Link to={`/app/${id}`}>
                    <AppLogo
                        src={`${process.env.PUBLIC_URL}/${logo}`}
                        borderRadius={borderRadius}
                    />
                </Link>

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

                        {!!App.web && <WebButton url={App.web} />}
                    </StoreButtonsContainer>
                </DescriptionContainer>
            </AppContainer>
        </Container>
    );
};

export default AppItem;

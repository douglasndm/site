import React from 'react';
import { Link } from 'react-router';

import { useThemeMode } from '../../Contexts/ThemeContext';
import appStoreLight from '../../Assets/Images/Stores/AppStore/PT-BR/Light.svg';
import appStoreDark from '../../Assets/Images/Stores/AppStore/PT-BR/Dark.svg';
import googlePlayBadge from '../../Assets/Images/Stores/GooglePlay/GetItOnGooglePlay_Badge_Web_color_Portuguese-Brazil.svg';
import msStoreBadge from '../../Assets/Images/Stores/MicrosoftStore/Portuguese-Brazilian_get it from MS_864X312.svg';

import {
    Container,
    AppShowcaseContent,
    LogoContainer,
    AppLogo,
    LogoGlow,
    AppInfo,
    AppTitle,
    AppDescription,
    StoreButtons,
    StoreBadge,
    ActionButtons,
    SecondaryButton,
} from './styles';

interface Props {
    App: IApp;
    borderRadius?: boolean;
    variant?: 'card' | 'hero';
}

const AppItem: React.FC<Props> = ({
    App,
    borderRadius,
    variant = 'card',
}: Props) => {
    const {
        friendlyPackageName,
        name,
        logo,
        description,
        MSStoreID,
        AppStore,
        GooglePlay,
    } = App;
    const { themeMode } = useThemeMode();

    const getMSStoreId = (url: string) => {
        if (!url) return '';
        const parts = url.split('/');
        return parts[parts.length - 1];
    };

    const msStoreId = getMSStoreId(MSStoreID);

    const storeLinks = [
        {
            href: GooglePlay,
            src: googlePlayBadge,
            alt: `Baixar ${name} no Google Play`,
        },
        {
            href: AppStore,
            src: themeMode === 'dark' ? appStoreLight : appStoreDark,
            alt: `Baixar ${name} na App Store`,
        },
        {
            href: msStoreId
                ? `https://get.microsoft.com/installer/download/${msStoreId}?referrer=appbadge`
                : MSStoreID
                ? msStoreBadge
                : '',
            src: msStoreBadge,
            alt: `Baixar ${name} na Microsoft Store`,
            isMS: true,
        },
    ].filter((store) => !!store.href);

    const logoUrl = logo.replace('./', '/');

    return (
        <Container accentColor={App.backgroundColor} variant={variant}>
            <AppShowcaseContent variant={variant}>
                <LogoContainer>
                    <LogoGlow accentColor={App.backgroundColor} />
                    <Link to={`/app/${friendlyPackageName}`}>
                        <AppLogo
                            src={logoUrl}
                            borderRadius={borderRadius}
                            logoIsWhite={App.logoIsWhite}
                            accentColor={App.backgroundColor}
                            alt={`Logo do app ${name}`}
                        />
                    </Link>
                </LogoContainer>

                <AppInfo>
                    <Link to={`/app/${friendlyPackageName}`}>
                        <AppTitle>{name}</AppTitle>
                    </Link>

                    <AppDescription>{description}</AppDescription>

                    <StoreButtons>
                        {storeLinks.map((store) => (
                            <a
                                key={store.alt}
                                href={store.href}
                                target={store.isMS ? '_self' : '_blank'}
                                rel={store.isMS ? undefined : 'noreferrer'}
                            >
                                <StoreBadge src={store.src} alt={store.alt} />
                            </a>
                        ))}
                    </StoreButtons>

                    {!!App.MoreInfoURL && (
                        <ActionButtons>
                            <SecondaryButton
                                href={App.MoreInfoURL}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Mais informações
                            </SecondaryButton>
                        </ActionButtons>
                    )}
                </AppInfo>
            </AppShowcaseContent>
        </Container>
    );
};

export default AppItem;

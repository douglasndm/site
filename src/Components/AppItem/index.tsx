import React from 'react';
import { Link } from 'react-router';

import { useThemeMode } from '../../Contexts/ThemeContext';
import appStoreLight from '../../Assets/Images/Stores/AppStore/PT-BR/Light.svg';
import appStoreDark from '../../Assets/Images/Stores/AppStore/PT-BR/Dark.svg';
import googlePlayBadge from '../../Assets/Images/Stores/GooglePlay/GetItOnGooglePlay_Badge_Web_color_Portuguese-Brazil.svg';

import {
    AppDescription,
    AppHighlight,
    AppLogo,
    AppTitle,
    CardAction,
    CardHeader,
    Container,
    DetailActions,
    DetailDescription,
    DetailHero,
    DetailVisual,
    LogoHalo,
    MetaBadge,
    StoreBadge,
    StoreButtons,
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
                : '',
            src: 'https://get.microsoft.com/images/pt-br%20dark.svg',
            alt: `Baixar ${name} na Microsoft Store`,
            isMS: true,
        },
    ].filter((store) => !!store.href);

    if (variant === 'hero') {
        return (
            <Container accentColor={App.backgroundColor} variant={variant}>
                <DetailHero>
                    <DetailVisual>
                        <LogoHalo accentColor={App.backgroundColor} />
                        <AppLogo
                            src={logo.replace('./', '/')}
                            borderRadius={borderRadius}
                            alt={`Logo do app ${name}`}
                        />
                    </DetailVisual>

                    <div>
                        <MetaBadge>{friendlyPackageName}</MetaBadge>
                        <AppTitle>{name}</AppTitle>
                        <DetailDescription>{description}</DetailDescription>
                        <AppHighlight>
                            Disponível nas principais lojas e com experiência
                            pensada para uso rápido, direto e responsivo.
                        </AppHighlight>

                        <DetailActions>
                            <StoreButtons>
                                {storeLinks.map((store: any) => (
                                    <a
                                        key={store.alt}
                                        href={store.href}
                                        target={store.isMS ? '_self' : '_blank'}
                                        rel={
                                            store.isMS
                                                ? undefined
                                                : 'noreferrer'
                                        }
                                    >
                                        <StoreBadge
                                            src={store.src}
                                            alt={store.alt}
                                        />
                                    </a>
                                ))}
                            </StoreButtons>

                            {!!App.MoreInfoURL && (
                                <CardAction
                                    href={App.MoreInfoURL}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Ver mais informações
                                </CardAction>
                            )}
                        </DetailActions>
                    </div>
                </DetailHero>
            </Container>
        );
    }

    return (
        <Container accentColor={App.backgroundColor} variant={variant}>
            <CardHeader>
                <Link to={`/app/${friendlyPackageName}`}>
                    <AppLogo
                        src={logo.replace('./', '/')}
                        borderRadius={borderRadius}
                        alt={`Logo do app ${name}`}
                    />
                </Link>

                <div>
                    <MetaBadge>{friendlyPackageName}</MetaBadge>
                    <AppTitle>{name}</AppTitle>
                </div>
            </CardHeader>

            <AppDescription>{description}</AppDescription>

            <StoreButtons>
                {storeLinks.map((store: any) => (
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

            <DetailActions>
                <Link to={`/app/${friendlyPackageName}`}>
                    <CardAction as="span">Abrir detalhes</CardAction>
                </Link>
                {!!App.MoreInfoURL && (
                    <CardAction
                        href={App.MoreInfoURL}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Site do app
                    </CardAction>
                )}
            </DetailActions>
        </Container>
    );
};

export default AppItem;

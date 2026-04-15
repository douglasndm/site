import React from 'react';
import { Link } from 'react-router';

import { useThemeMode } from '../../Contexts/ThemeContext';
import appStoreLight from '../../Assets/Images/Stores/AppStore/PT-BR/Light.svg';
import appStoreDark from '../../Assets/Images/Stores/AppStore/PT-BR/Dark.svg';
import microsoftStoreBadge from '../../Assets/Images/Stores/MicrosoftStore/Portuguese-Brazilian_get it from MS_864X312.svg';
import googlePlayBadge from '../../Assets/Images/Stores/GooglePlay/google-play-badge.png';

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
        MSStore,
        AppStore,
        GooglePlay,
    } = App;
    const { themeMode } = useThemeMode();

    const storeLinks = [
        {
            href: AppStore,
            src: themeMode === 'dark' ? appStoreLight : appStoreDark,
            alt: `Baixar ${name} na App Store`,
        },
        {
            href: GooglePlay,
            src: googlePlayBadge,
            alt: `Baixar ${name} no Google Play`,
        },
        {
            href: MSStore,
            src: microsoftStoreBadge,
            alt: `Baixar ${name} na Microsoft Store`,
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
                                {storeLinks.map((store) => (
                                    <a key={store.alt} href={store.href}>
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
                {storeLinks.map((store) => (
                    <a key={store.alt} href={store.href}>
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

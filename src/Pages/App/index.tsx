import React, { useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router';
import { Helmet } from 'react-helmet';

import apps from '../../Data/Applications.json';

import Header from '../../Components/Header';
import AppItem from '../../Components/AppItem';
import Footer from '../../Components/Footer';

import {
    Container,
    Content,
    EmptyState,
    RelatedGrid,
    RelatedSection,
    SectionHeader,
    SupportCard,
} from './styles';

interface Props {
    app_id: string;
}

const App: React.FC = () => {
    const { app_id } = useParams<{ app_id: string }>();

    const app = useMemo(() => {
        if (!app_id) return undefined;

        const findedApp = apps.find((a) => {
            if (
                a.id === app_id.toLowerCase() ||
                a.friendlyPackageName === app_id.toLowerCase()
            ) {
                return true;
            }
            return false;
        });

        return findedApp;
    }, [app_id]);

    useEffect(() => {
        document.title = `${app?.name} | douglasndm.dev`;
    }, [app]);

    const relatedApps = useMemo(
        () =>
            apps.filter((currentApp) => currentApp.id !== app?.id).slice(0, 3),
        [app]
    );

    return (
        <Container>
            {app && (
                <Helmet>
                    <title>{app.name} | douglasndm.dev</title>
                    <meta name="description" content={app.description} />
                    <meta name="keywords" content={app.tags} />

                    {app.friendlyPackageName === 'expirychecker' && (
                        <link
                            rel="canonical"
                            href="https://controledevalidades.com/aplicativo/"
                        />
                    )}
                </Helmet>
            )}

            <Header />

            <Content>
                {app ? (
                    <>
                        <AppItem App={app} variant="hero" />

                        <SupportCard accentColor={app.backgroundColor}>
                            <div>
                                <strong>Quer saber mais sobre este app?</strong>
                                <p>
                                    Use os links oficiais para download ou
                                    visite a página completa do produto para ver
                                    detalhes extras.
                                </p>
                            </div>

                            {app.MoreInfoURL ? (
                                <a
                                    href={app.MoreInfoURL}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Abrir site oficial
                                </a>
                            ) : (
                                <Link to="/">Voltar para todos os apps</Link>
                            )}
                        </SupportCard>

                        <RelatedSection>
                            <SectionHeader>
                                <h2>Outros apps</h2>
                                <Link to="/">Ver catálogo completo</Link>
                            </SectionHeader>

                            <RelatedGrid>
                                {relatedApps.map((relatedApp) => (
                                    <li key={relatedApp.id}>
                                        <AppItem App={relatedApp} />
                                    </li>
                                ))}
                            </RelatedGrid>
                        </RelatedSection>
                    </>
                ) : (
                    <EmptyState>
                        <h1>App não encontrado</h1>
                        <p>
                            O item que você tentou abrir não está disponível ou
                            mudou de endereço.
                        </p>
                        <Link to="/">Voltar para a home</Link>
                    </EmptyState>
                )}
            </Content>

            <Footer />
        </Container>
    );
};

export default App;

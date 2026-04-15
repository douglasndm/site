import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router';

import apps from '../../Data/Applications.json';

import Header from '../../Components/Header';
import AppItem from '../../Components/AppItem';
import Footer from '../../Components/Footer';

import {
    AppGrid,
    Container,
    Hero,
    HeroCard,
    HeroContent,
    HeroEyebrow,
    HeroLink,
    HeroStats,
    HeroSubtitle,
    HeroTitle,
    ListItem,
    MainContent,
    Section,
    SectionHeader,
    SectionText,
    SectionTitle,
} from './styles';

const Home: React.FC = () => {
    const highlightedApp = apps[0];

    return (
        <Container>
            <Helmet>
                <title>Apps | douglasndm.dev</title>
                <meta
                    name="description"
                    content="Conheça aplicativos úteis, modernos e independentes feitos para facilitar sua vida."
                />
            </Helmet>

            <Header />

            <MainContent>
                <Hero>
                    <HeroContent>
                        <HeroEyebrow>Showcase de aplicativos</HeroEyebrow>
                        <HeroTitle>
                            Uma coleção de apps simples, úteis e pensados para
                            funcionar bem em qualquer tela.
                        </HeroTitle>
                        <HeroSubtitle>
                            O site agora destaca cada produto com uma linguagem
                            mais moderna, foco em leitura rápida e acesso direto
                            às lojas.
                        </HeroSubtitle>

                        <HeroStats>
                            <HeroCard>
                                <strong>{apps.length}+</strong>
                                <span>apps publicados</span>
                            </HeroCard>
                            <HeroCard>
                                <strong>light/dark</strong>
                                <span>tema persistente</span>
                            </HeroCard>
                            <HeroCard>
                                <strong>100%</strong>
                                <span>layout responsivo</span>
                            </HeroCard>
                        </HeroStats>

                        <HeroLink
                            to={`/app/${highlightedApp.friendlyPackageName}`}
                        >
                            Ver app em destaque
                        </HeroLink>
                    </HeroContent>

                    <AppItem App={highlightedApp} variant="hero" />
                </Hero>

                <Section>
                    <SectionHeader>
                        <div>
                            <SectionTitle>Todos os aplicativos</SectionTitle>
                            <SectionText>
                                Explore utilitários, jogos casuais e apps de
                                nicho publicados neste portfólio.
                            </SectionText>
                        </div>

                        <Link to="/terms">Termos de uso</Link>
                    </SectionHeader>

                    <AppGrid>
                        {apps.map((app: IApp) => (
                            <ListItem key={app.name}>
                                <AppItem App={app} />
                            </ListItem>
                        ))}
                    </AppGrid>
                </Section>
            </MainContent>

            <Footer />
        </Container>
    );
};

export default Home;

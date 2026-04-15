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
    ListItem,
    MainContent,
    Section,
    SectionHeader,
    SectionText,
    SectionTitle,
} from './styles';

const Home: React.FC = () => {
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

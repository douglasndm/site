import React from 'react';
import { Helmet } from 'react-helmet';

import apps from '../../Data/Applications.json';

import Header from '../../Components/Header';
import AppItem from '../../Components/AppItem';
import Footer from '../../Components/Footer';

import {
    Container,
    MainContent,
    AppSectionList,
    AppSectionItem,
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
                <AppSectionList>
                    {apps.map((app: IApp) => (
                        <AppSectionItem key={app.id}>
                            <AppItem App={app} />
                        </AppSectionItem>
                    ))}
                </AppSectionList>
            </MainContent>

            <Footer />
        </Container>
    );
};

export default Home;

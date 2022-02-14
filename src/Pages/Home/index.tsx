import React from 'react';
import { Helmet } from 'react-helmet';

import apps from '../../Data/Applications.json';

import Header from '../../Components/Header';
import AppItem from '../../Components/AppItem';
import Footer from '../../Components/Footer';
import BottomButton from '../../Components/BottomButton';

import { Container, ListItem } from './styles';

const Home: React.FC = () => (
    <Container>
        <Helmet>
            <meta
                name="description"
                content="Conheça aplicativos incríveis feitos para facilitar sua vida."
            />
        </Helmet>

        <Header />

        <BottomButton />

        <ul>
            {apps.map((app: IApp) => (
                <ListItem key={app.name}>
                    <AppItem App={app} />
                </ListItem>
            ))}
        </ul>
        <Footer />
    </Container>
);

export default Home;

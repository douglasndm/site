import React from 'react';

import apps from '../../Data/Applications.json';

import Header from '../../Components/Header';
import AppItem from '../../Components/AppItem';
import Footer from '../../Components/Footer';

import { Container, ListItem } from './styles';

const Home: React.FC = () => (
    <Container>
        <Header />

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

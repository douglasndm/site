import React from 'react';

import apps from '../../Data/Applications.json';

import Header from '../../Components/Header';
import AppItem from '../../Components/AppItem';

import { Container } from './styles';

const Home: React.FC = () => (
    <Container>
        <Header />

        <ul>
            {apps.map((app: IApp) => (
                <li key={app.name}>
                    <AppItem App={app} />
                </li>
            ))}
        </ul>
    </Container>
);

export default Home;

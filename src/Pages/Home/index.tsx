import React from 'react';

import Header from '../../Components/Header';
import AppItem from '../../Components/AppItem';

import { Container } from './styles';

const Home: React.FC = () => (
    <Container>
        <Header />

        <AppItem />
    </Container>
);

export default Home;

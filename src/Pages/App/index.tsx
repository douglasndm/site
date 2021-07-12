import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import apps from '../../Data/Applications.json';

import Header from '../../Components/Header';
import AppItem from '../../Components/AppItem';

import { Container } from './styles';

interface Props {
    app_id: string;
}

const App: React.FC = () => {
    const { app_id } = useParams<Props>();

    const app = useMemo(() => apps.find((a) => a.id === app_id), [app_id]);

    return (
        <Container backgroundColor={app?.backgroundColor}>
            <Header />

            {app && <AppItem App={app} />}
        </Container>
    );
};

export default App;

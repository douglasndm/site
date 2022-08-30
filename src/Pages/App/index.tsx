import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import apps from '../../Data/Applications.json';

import Header from '../../Components/Header';
import AppItem from '../../Components/AppItem';

import { Container } from './styles';

interface Props {
    app_id: string;
}

const App: React.FC = () => {
    const { app_id } = useParams<Props>();

    const app = useMemo(() => {
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

    return (
        <Container backgroundColor={app?.backgroundColor}>
            {app && (
                <Helmet>
                    <title>{app.name} | douglasndm</title>
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

            {app && <AppItem App={app} />}
        </Container>
    );
};

export default App;

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import Header from '../../../Components/Header';

import {
    Container,
    Content,
    Description,
    DescriptionContainer,
    Link,
    TextContainer,
    Title,
    TitleContainer,
} from './styles';

const Error_404: React.FC = () => {
    useEffect(() => {
        setTimeout(() => {
            window.location.href = 'https://douglasndm.dev';
        }, 5000);
    }, []);
    return (
        <Container>
            <Helmet>
                <title>Oops... | douglasndm</title>
                <meta name="robots" content="noindex" />
            </Helmet>

            <Header />

            <Content>
                <TextContainer>
                    <TitleContainer>
                        <Title>404</Title>
                    </TitleContainer>

                    <DescriptionContainer>
                        <Description>
                            Aparamente você chegou em um link que não existe,
                            voltando a página inicial em alguns segundos...
                            <br />
                            Caso isso não aconteça,
                            <Link href="https://douglasndm.dev">
                                {`  clique aqui`}
                            </Link>
                        </Description>
                    </DescriptionContainer>
                </TextContainer>
            </Content>
        </Container>
    );
};

export default Error_404;

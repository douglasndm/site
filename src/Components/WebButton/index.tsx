import React from 'react';

import { Container, Text } from './styles';

interface Props {
    url: string;
}

const WebButton: React.FC<Props> = ({ url }: Props) => (
    <Container to={url}>
        <Text>Jogar no navegador</Text>
    </Container>
);

export default WebButton;

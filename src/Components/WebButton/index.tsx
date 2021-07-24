import React from 'react';

import { Container, Text } from './styles';

interface Props {
    url: string;
}

const WebButton: React.FC<Props> = ({ url }: Props) => (
    <Container href={url} target="_blank">
        <Text>Jogar no navegador</Text>
    </Container>
);

export default WebButton;

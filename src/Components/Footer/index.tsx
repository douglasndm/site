import React from 'react';
import { Link } from 'react-router-dom';

import { Container, FooterLinks, FooterText, Text } from './styles';

const Footer: React.FC = () => (
    <Container>
        <FooterText>
            <Text>
                Portfólio de apps com foco em utilidade, simplicidade e boa
                experiência.
            </Text>
            <Text>Douglas Nunes de Mattos</Text>
        </FooterText>

        <FooterLinks>
            <Link to="/">Apps</Link>
            <Link to="/privacy">Privacidade</Link>
            <Link to="/terms">Termos</Link>
        </FooterLinks>
    </Container>
);

export default Footer;

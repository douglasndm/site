import React from 'react';

import { Container, Text, Link } from './styles';

const Footer: React.FC = () => (
    <Container>
        <Text>Made with 💜 in ReactJS.</Text>

        <Text>
            <Link
                href="https://forms.office.com/r/F0dJ0XVTVG"
                target="_blank"
                rel="noreferrer"
            >
                LGPD.
            </Link>
        </Text>
    </Container>
);

export default Footer;

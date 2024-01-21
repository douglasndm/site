import React from 'react';

import Header from '../../../../../Components/Header';

import { Container, PrivacyContainer } from '../../../../Privacy/styles';

const ExpiryTracker: React.FC = () => (
    <Container>
        <Header fixed={false} />
        <PrivacyContainer>
            <h1>TERMOS DE USO DO APLICATIVO CONTROLE DE VALIDADE</h1>
            <br />
            <br />
            <p>
                <strong>Última atualização:</strong> 21 de janeiro de 2024
            </p>
            <br />
            <br />
            <h3>
                Bem-vindo ao <strong>Controle de Validade</strong>!
            </h3>
            <br />

            <ol>
                <li>
                    <h2>
                        <strong>Aceitação dos Termos de Uso</strong>
                    </h2>
                    Ao baixar, instalar ou utilizar o{' '}
                    <strong>Controle de Validade</strong>, você concorda em
                    cumprir e estar vinculado a estes Termos de Uso.
                </li>
                <br />
                <br />

                <li>
                    <h2>
                        <strong>Descrição do Serviço</strong>
                    </h2>
                    O <strong>Controle de Validade</strong> oferece serviços
                    relacionados a validades, proporcionando uma experiência
                    única e personalizada aos usuários.
                </li>
                <br />
                <br />

                <li>
                    <h2>
                        <strong>Funcionalidades Pagas e Assinaturas</strong>
                    </h2>
                    <ol type="a">
                        <li>
                            O <strong>Controle de Validade</strong> oferece
                            funcionalidades pagas que podem ser desbloqueadas
                            por meio de assinaturas.
                        </li>
                        <li>
                            As assinaturas podem incluir períodos de teste
                            grátis, conforme determinado pelo{' '}
                            <strong>Controle de Validade</strong>.
                        </li>
                        <li>
                            Após o término do período de teste grátis, a
                            cobrança será efetuada automaticamente na forma de
                            pagamento escolhida pelo usuário.
                        </li>
                        <li>
                            As assinaturas podem ser mensais, trimestrais,
                            anuais ou em outros períodos determinados pelo{' '}
                            <strong>Controle de Validade</strong>.
                        </li>
                        <li>
                            O usuário pode cancelar a assinatura a qualquer
                            momento através da loja de aplicativos do seu
                            dispositivo.
                        </li>
                    </ol>
                </li>
                <br />
                <br />

                <li>
                    <h2>
                        <strong>Modificações nos Termos</strong>
                    </h2>
                    Reservamo-nos o direito de modificar estes Termos de Uso a
                    qualquer momento. Alterações significativas serão
                    comunicadas aos usuários.
                </li>
                <br />
                <br />

                <li>
                    <h2>
                        <strong>Privacidade</strong>
                    </h2>
                    Para informações sobre como coletamos, usamos e
                    compartilhamos dados, consulte nossa Política de
                    Privacidade.
                </li>
                <br />
                <br />

                <li>
                    <h2>
                        <strong>Contato</strong>
                    </h2>
                    Para dúvidas ou informações adicionais, entre em contato
                    conosco em suporte@douglasndm.dev.
                </li>
                <br />
                <br />

                <li>
                    Ao utilizar o <strong>Controle de Validade</strong>, você
                    concorda com estes Termos de Uso. Obrigado por escolher o{' '}
                    <strong>Controle de Validade</strong>!
                </li>
                <br />
                <br />
            </ol>
        </PrivacyContainer>
    </Container>
);

export default ExpiryTracker;

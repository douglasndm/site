import React from 'react';
import { Helmet } from 'react-helmet';

import Footer from '../../../../../Components/Footer';
import Header from '../../../../../Components/Header';

import {
    Container,
    Content,
    IntroLabel,
    IntroText,
    IntroTitle,
    LegalCard,
    Prose,
} from '../../../../Privacy/styles';

const ExpiryTracker: React.FC = () => (
    <Container>
        <Helmet>
            <title>Termos do Controle de Validade | douglasndm.dev</title>
        </Helmet>

        <Header />

        <Content>
            <LegalCard>
                <IntroLabel>Termos específicos</IntroLabel>
                <IntroTitle>
                    Termos de uso do aplicativo Controle de Validade e Validades
                    Times
                </IntroTitle>
                <IntroText>
                    Regras e condições aplicáveis ao uso do aplicativo Controle
                    de Validade e suas modalidades de assinatura.
                </IntroText>

                <Prose>
                    <p>
                        <strong>Última atualização:</strong> 03 de agosto de
                        2024
                    </p>

                    <h3>
                        Bem-vindo ao <strong>Controle de Validade</strong>.
                    </h3>

                    <ol>
                        <li>
                            <h2>
                                <strong>Aceitação dos Termos de Uso</strong>
                            </h2>
                            Ao baixar, instalar ou utilizar o{' '}
                            <strong>Controle de Validade</strong>, você concorda
                            em cumprir e estar vinculado a estes Termos de Uso.
                        </li>

                        <li>
                            <h2>
                                <strong>Descrição do Serviço</strong>
                            </h2>
                            O <strong>Controle de Validade</strong> oferece
                            serviços relacionados a validades, proporcionando
                            uma experiência única e personalizada aos usuários.
                        </li>

                        <li>
                            <h2>
                                <strong>
                                    Funcionalidades Pagas e Assinaturas
                                </strong>
                            </h2>
                            <ol type="a">
                                <li>
                                    O aplicativo oferece funcionalidades pagas
                                    que podem ser desbloqueadas por meio de
                                    assinaturas.
                                </li>
                                <li>
                                    As assinaturas podem incluir períodos de
                                    teste grátis.
                                </li>
                                <li>
                                    Após o término do período de teste grátis, a
                                    cobrança será efetuada automaticamente na
                                    forma de pagamento escolhida.
                                </li>
                                <li>
                                    As assinaturas podem ser mensais,
                                    trimestrais, anuais ou em outros períodos
                                    determinados.
                                </li>
                                <li>
                                    O usuário pode cancelar a assinatura a
                                    qualquer momento através da loja de
                                    aplicativos do seu dispositivo.
                                </li>
                            </ol>
                        </li>
                    </ol>

                    <h2>Período de teste e conversão para assinatura paga</h2>
                    <p>
                        <strong>Período de Teste:</strong> o Controle de
                        Validade oferece um período de teste gratuito de 7 dias
                        para novos usuários, com acesso total às funcionalidades
                        PRO.
                    </p>
                    <p>
                        <strong>Conversão para Assinatura Paga:</strong> ao
                        final do período de teste gratuito, a assinatura será
                        automaticamente convertida em uma assinatura paga, a
                        menos que você cancele antes do término do período.
                    </p>
                    <p>
                        <strong>Preço da Assinatura:</strong> após o período de
                        teste gratuito, o custo da assinatura será baseado no
                        plano escolhido no momento da inscrição.
                    </p>

                    <h2>Cancelamento da assinatura</h2>
                    <p>
                        <strong>
                            Cancelamento durante o Período de Teste:
                        </strong>{' '}
                        você pode cancelar sua assinatura a qualquer momento
                        durante o período de teste gratuito sem nenhum custo.
                    </p>
                    <p>
                        <strong>Cancelamento após o Período de Teste:</strong>{' '}
                        se você não deseja continuar com a assinatura paga,
                        cancele antes do término do período de teste gratuito
                        para evitar a cobrança.
                    </p>
                    <p>
                        <strong>Instruções de Cancelamento:</strong> você também
                        pode gerenciar ou cancelar sua assinatura através das
                        configurações de assinatura do seu dispositivo.
                    </p>

                    <h2>Modificações e downloads</h2>
                    <p>
                        <strong>Modificações não Permitidas:</strong>{' '}
                        modificações no aplicativo não são aceitas. Tentativas
                        de modificar, descompilar ou realizar engenharia reversa
                        são estritamente proibidas.
                    </p>
                    <p>
                        <strong>Formas de Download:</strong> o aplicativo está
                        disponível exclusivamente através da Apple App Store e
                        da Google Play Store.
                    </p>
                    <p>
                        <strong>Penalidades Legais:</strong> tentativas de
                        engenharia reversa, burlar sistemas de segurança ou
                        obter o aplicativo de forma não autorizada são
                        atividades ilegais.
                    </p>

                    <ol start={4}>
                        <li>
                            <h2>
                                <strong>Modificações nos Termos</strong>
                            </h2>
                            Reservamo-nos o direito de modificar estes Termos de
                            Uso a qualquer momento. Alterações significativas
                            serão comunicadas aos usuários.
                        </li>

                        <li>
                            <h2>
                                <strong>Privacidade</strong>
                            </h2>
                            Para informações sobre como coletamos, usamos e
                            compartilhamos dados, consulte nossa Política de
                            Privacidade.
                        </li>

                        <li>
                            <h2>
                                <strong>Contato</strong>
                            </h2>
                            Para dúvidas ou informações adicionais, entre em
                            contato conosco em suporte@controledevalidades.com.
                        </li>

                        <li>
                            Ao utilizar o <strong>Controle de Validade</strong>,
                            você concorda com estes Termos de Uso.
                        </li>
                    </ol>
                </Prose>
            </LegalCard>
        </Content>

        <Footer />
    </Container>
);

export default ExpiryTracker;

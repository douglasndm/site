import React from 'react';
import { Helmet } from 'react-helmet';

import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

import {
    Container,
    Content,
    IntroLabel,
    IntroText,
    IntroTitle,
    LegalCard,
    Prose,
} from '../Privacy/styles';

const Terms: React.FC = () => (
    <Container>
        <Helmet>
            <title>Termos de Uso | douglasndm.dev</title>
        </Helmet>

        <Header />

        <Content>
            <LegalCard>
                <IntroLabel>Documento legal</IntroLabel>
                <IntroTitle>Termos de uso</IntroTitle>
                <IntroText>
                    Estes termos definem as condições gerais de acesso e uso do
                    site e dos aplicativos vinculados a douglasndm.dev.
                </IntroText>

                <Prose>
                    <h2>1. Termos</h2>
                    <p>
                        Ao acessar ao site e/ou aplicativo de{' '}
                        <a href="https://douglasndm.dev">
                            Douglas Nunes de Mattos (douglasndm)
                        </a>
                        , concorda em cumprir estes termos de serviço, todas as
                        leis e regulamentos aplicáveis e concorda que é
                        responsável pelo cumprimento de todas as leis locais
                        aplicáveis. Se você não concordar com algum desses
                        termos, está proibido de usar ou acessar este site e/ou
                        aplicativo.
                    </p>

                    <h2>2. Uso de licença</h2>
                    <p>
                        É concedida permissão para baixar temporariamente uma
                        cópia dos materiais no site e/ou aplicativo de Douglas
                        Nunes de Mattos (douglasndm), apenas para visualização
                        transitória pessoal e não comercial. Esta é a concessão
                        de uma licença, não uma transferência de título.
                    </p>

                    <ol>
                        <li>Modificar ou copiar os materiais.</li>
                        <li>
                            Usar os materiais para qualquer finalidade comercial
                            ou para exibição pública.
                        </li>
                        <li>
                            Tentar descompilar ou fazer engenharia reversa de
                            qualquer software contido no site e/ou aplicativo.
                        </li>
                        <li>
                            Remover quaisquer direitos autorais ou outras
                            notações de propriedade dos materiais.
                        </li>
                        <li>
                            Transferir os materiais para outra pessoa ou
                            espelhar os materiais em qualquer outro servidor.
                        </li>
                    </ol>

                    <p>
                        Esta licença será automaticamente rescindida se você
                        violar alguma dessas restrições e poderá ser rescindida
                        a qualquer momento.
                    </p>

                    <h2>3. Isenção de responsabilidade</h2>
                    <ol>
                        <li>
                            Os materiais no site e/ou aplicativo de Douglas
                            Nunes de Mattos (douglasndm) são fornecidos como
                            estão. Não oferecemos garantias expressas ou
                            implícitas.
                        </li>
                        <li>
                            Também não garantimos a precisão, os resultados
                            prováveis ou a confiabilidade do uso dos materiais
                            apresentados.
                        </li>
                    </ol>

                    <h2>4. Limitações</h2>
                    <p>
                        Em nenhum caso Douglas Nunes de Mattos (douglasndm) ou
                        seus fornecedores serão responsáveis por quaisquer danos
                        decorrentes do uso ou da incapacidade de usar os
                        materiais em site e/ou aplicativos, mesmo que tenham
                        sido notificados da possibilidade de tais danos.
                    </p>

                    <h2>5. Precisão dos materiais</h2>
                    <p>
                        Os materiais exibidos no site e/ou aplicativo podem
                        incluir erros técnicos, tipográficos ou fotográficos.
                        Não garantimos que qualquer material seja preciso,
                        completo ou atual.
                    </p>

                    <h2>6. Links</h2>
                    <p>
                        Não analisamos todos os sites vinculados ao site e/ou
                        aplicativo e não somos responsáveis pelo conteúdo de
                        nenhum site vinculado. A inclusão de qualquer link não
                        implica endosso.
                    </p>

                    <h3>Modificações</h3>
                    <p>
                        Douglas Nunes de Mattos (douglasndm) pode revisar estes
                        termos de serviço do site e/ou aplicativo a qualquer
                        momento, sem aviso prévio.
                    </p>

                    <h3>Lei aplicável</h3>
                    <p>
                        Estes termos e condições são regidos e interpretados de
                        acordo com as leis de Douglas Nunes de Mattos
                        (douglasndm) e você se submete irrevogavelmente à
                        jurisdição exclusiva dos tribunais naquele estado ou
                        localidade.
                    </p>
                </Prose>
            </LegalCard>
        </Content>

        <Footer />
    </Container>
);

export default Terms;

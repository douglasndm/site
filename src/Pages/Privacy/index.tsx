/* eslint-disable react/jsx-no-target-blank */
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
} from './styles';

const Privacy: React.FC = () => (
    <Container>
        <Helmet>
            <title>Política de Privacidade | douglasndm.dev</title>
        </Helmet>

        <Header />

        <Content>
            <LegalCard>
                <IntroLabel>Documento legal</IntroLabel>
                <IntroTitle>Política de Privacidade</IntroTitle>
                <IntroText>
                    Este documento descreve como informações pessoais podem ser
                    tratadas no site e nos aplicativos publicados em
                    douglasndm.dev.
                </IntroText>

                <Prose>
                    <p>
                        A sua privacidade é importante para nós. É política do
                        site douglasndm.dev respeitar a sua privacidade em
                        relação a qualquer informação sua que possamos coletar
                        no site{' '}
                        <a
                            href="https://douglasndm.dev/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            douglasndm.dev
                        </a>
                        , e outros sites que possuímos e operamos.
                    </p>

                    <p>
                        Trabalhamos com base na Lei de Proteção de Dados
                        (13.709/2018) que traz garantias de privacidade,
                        confidencialidade, retenção, proteção aos direitos
                        fundamentais de liberdade e o livre desenvolvimento da
                        personalidade da pessoa. Além disso, respeitamos a
                        Constituição Federal da República Federativa do Brasil,
                        o Código de Defesa do Consumidor (Lei 8.078/90), Marco
                        Civil da Internet (Lei 12.965/14).
                    </p>

                    <p>
                        Solicitamos informações pessoais apenas quando realmente
                        precisamos delas para lhe fornecer um serviço. Fazemo-lo
                        por meios justos e legais, com o seu conhecimento e
                        consentimento. Também informamos por que estamos
                        coletando e como será usado.
                    </p>

                    <p>
                        Deixamos claro o motivo que estamos coletando e como
                        será usado, pois tudo é feito para correta administração
                        geral.
                    </p>

                    <p>
                        Apenas retemos as informações coletadas pelo tempo
                        necessário para fornecer o serviço solicitado. Quando
                        armazenamos dados, protegemos dentro de meios
                        comercialmente aceitáveis pela legislação atual para
                        evitar perdas e roubos, bem como acesso, divulgação,
                        cópia, uso ou modificação não autorizados.
                    </p>

                    <p>
                        Não compartilhamos informações de identificação pessoal
                        publicamente ou com terceiros, exceto por determinação
                        judicial.
                    </p>

                    <p>
                        O nosso site pode ter links para sites externos que não
                        são operados por nós. Diante disto, não nos
                        responsabilizamos por danos de terceiros. Esteja ciente
                        de que não temos controle sobre o conteúdo e práticas de
                        sites de terceiros e não podemos aceitar
                        responsabilidade por suas respectivas políticas de
                        privacidade.
                    </p>

                    <p>
                        Na qualidade de consumidor, você é livre para recusar a
                        nossa solicitação de informações pessoais, entendendo
                        que talvez não possamos fornecer alguns dos serviços
                        desejados.
                    </p>

                    <p>
                        O uso continuado de nosso site será considerado como
                        aceitação de nossas práticas em torno de privacidade e
                        informações pessoais. Se você tiver alguma dúvida sobre
                        como lidamos com dados do usuário e informações
                        pessoais, entre em contato conosco através{' '}
                        <a
                            href="https://forms.office.com/r/F0dJ0XVTVG"
                            target="_blank"
                            rel="noreferrer"
                        >
                            do nosso formulário
                        </a>
                        .
                    </p>

                    <p>Nossa política é atualizada de forma constante.</p>

                    <p>
                        Fica, desde já, o titular de dados ciente que o conteúdo
                        desta Política de Privacidade pode ser alterado a
                        critério do site douglasndm.dev, independente de aviso
                        ou notificação. Em caso de alteração, as modificações
                        produzem todos os efeitos a partir do momento da
                        disponibilização no site.
                    </p>

                    <p>
                        O site douglasndm.dev não se responsabiliza caso você
                        venha utilizar seus dados de forma incorreta ou
                        inverídica, ficando excluído de qualquer
                        responsabilidade neste sentido.
                    </p>

                    <h2>Política de Cookies</h2>

                    <h3>O que são cookies?</h3>
                    <p>
                        Como é prática comum em quase todos os sites
                        profissionais, este site usa cookies, que são pequenos
                        arquivos baixados no seu computador, para melhorar sua
                        experiência. Esta página descreve quais informações eles
                        coletam, como as usamos e por que às vezes precisamos
                        armazenar esses cookies. Também compartilharemos como
                        você pode impedir que esses cookies sejam armazenados,
                        no entanto, isso pode afetar alguns elementos da
                        funcionalidade do site.
                    </p>

                    <h3>Como usamos os cookies?</h3>
                    <p>
                        Utilizamos cookies por vários motivos, detalhados
                        abaixo. Infelizmente, na maioria dos casos, não existem
                        opções padrão do setor para desativar os cookies sem
                        desativar completamente a funcionalidade e os recursos
                        que eles adicionam a este site. É recomendável que você
                        deixe todos os cookies se não tiver certeza se precisa
                        ou não deles, caso sejam usados para fornecer um serviço
                        que você usa.
                    </p>

                    <h3>Desativar cookies</h3>
                    <p>
                        Você pode impedir a configuração de cookies ajustando as
                        configurações do seu navegador. Esteja ciente de que a
                        desativação de cookies afetará a funcionalidade deste e
                        de muitos outros sites que você visita. A desativação de
                        cookies geralmente resultará na desativação de
                        determinadas funcionalidades e recursos deste site.
                        Portanto, é recomendável que você não desative os
                        cookies.
                    </p>

                    <h3>Cookies que definimos</h3>
                    <ul>
                        <li>
                            <strong>
                                Cookies relacionados a boletins por e-mail
                            </strong>
                            : este site oferece serviços de assinatura de
                            boletim informativo ou e-mail e os cookies podem ser
                            usados para lembrar se você já está registrado e se
                            deve mostrar determinadas notificações válidas
                            apenas para usuários inscritos ou não inscritos.
                        </li>

                        <li>
                            <strong>Cookies relacionados a pesquisas</strong>:
                            periodicamente, oferecemos pesquisas e questionários
                            para fornecer informações interessantes, ferramentas
                            úteis ou para entender nossa base de usuários com
                            mais precisão.
                        </li>

                        <li>
                            <strong>Cookies relacionados a formulários</strong>:
                            quando você envia dados por meio de um formulário,
                            os cookies podem ser configurados para lembrar os
                            detalhes do usuário para correspondência futura.
                        </li>

                        <li>
                            <strong>Cookies de preferências do site</strong>:
                            para proporcionar uma ótima experiência, fornecemos
                            a funcionalidade para definir suas preferências de
                            como esse site é executado quando você o usa.
                        </li>
                    </ul>

                    <h3>Cookies de terceiros</h3>
                    <p>
                        Em alguns casos especiais, também usamos cookies
                        fornecidos por terceiros confiáveis. A seção a seguir
                        detalha quais cookies de terceiros você pode encontrar
                        através deste site.
                    </p>

                    <ul>
                        <li>
                            Este site usa o Google Analytics para nos ajudar a
                            entender como você usa o site e como podemos
                            melhorar sua experiência.
                        </li>
                        <li>
                            As análises de terceiros são usadas para rastrear e
                            medir o uso deste site, para que possamos continuar
                            produzindo conteúdo atrativo.
                        </li>
                        <li>
                            Periodicamente, testamos novos recursos e fazemos
                            alterações sutis na maneira como o site se
                            apresenta.
                        </li>
                        <li>
                            À medida que vendemos produtos, é importante
                            entendermos as estatísticas sobre quantos visitantes
                            realmente compram.
                        </li>
                        <li>
                            O serviço Google AdSense que usamos para veicular
                            publicidade usa um cookie DoubleClick para veicular
                            anúncios mais relevantes.
                        </li>
                        <li>
                            Utilizamos anúncios para compensar os custos de
                            funcionamento deste site e fornecer financiamento
                            para futuros desenvolvimentos.
                        </li>
                    </ul>

                    <h3>Compromisso do usuário</h3>
                    <p>
                        O usuário se compromete a fazer uso adequado dos
                        conteúdos e da informação que o site douglasndm.dev
                        oferece.
                    </p>

                    <ul>
                        <li>
                            Não se envolver em atividades que sejam ilegais ou
                            contrárias à boa fé e à ordem pública.
                        </li>
                        <li>
                            Respeitar todas as legislações nacionais ou
                            internacionais em que o Brasil é signatário.
                        </li>
                        <li>
                            Não difundir propaganda ou conteúdo de natureza
                            racista, xenofóbica, ilegal ou contra os direitos
                            humanos.
                        </li>
                        <li>
                            Não causar danos aos sistemas físicos e lógicos do
                            site, de seus fornecedores ou terceiros.
                        </li>
                        <li>
                            Respeitar os direitos autorais e de propriedade
                            intelectual aplicáveis.
                        </li>
                    </ul>

                    <h2>Direitos do titular de dados</h2>
                    <p>
                        O titular de dados pessoais possui o direito de
                        solicitar do site douglasndm.dev, através do canal
                        específico de tratamento, a qualquer momento, mediante
                        requisição formal, informações referentes aos seus
                        dados.
                    </p>

                    <p>
                        Os pedidos serão analisados conforme previsto em
                        legislação vigente dentro de um prazo de 72 horas, salvo
                        determinação legal e/ou objeto de lei.
                    </p>

                    <p>
                        Os titulares de dados, segundo o texto da LGPD, podem
                        exercer os seus direitos por meio de:
                    </p>

                    <ul>
                        <li>Confirmação da existência de tratamento.</li>
                        <li>Acesso aos seus dados pessoais.</li>
                        <li>
                            Correção de dados incompletos, inexatos ou
                            desatualizados.
                        </li>
                        <li>
                            Anonimização, bloqueio ou eliminação de dados
                            desnecessários, excessivos ou tratados em
                            desconformidade com a lei.
                        </li>
                        <li>
                            Portabilidade dos dados a outro fornecedor de
                            serviço ou produto.
                        </li>
                        <li>
                            Eliminação dos dados pessoais tratados com o
                            consentimento do titular.
                        </li>
                        <li>
                            Informação das entidades públicas e privadas com as
                            quais o controlador realizou uso compartilhado de
                            dados.
                        </li>
                        <li>
                            Informação sobre a possibilidade de não fornecer
                            consentimento e sobre as consequências da negativa.
                        </li>
                        <li>Revogação do consentimento.</li>
                    </ul>

                    <h2>Como exercer os seus direitos</h2>
                    <ul>
                        <li>
                            Se não quiser receber nossas comunicações de
                            marketing, pode cancelar os próximos envios clicando
                            no link enviado junto ao e-mail de marketing.
                        </li>
                        <li>
                            Para as demais solicitações em relação aos direitos
                            do titular de dados pessoais, entre em contato
                            conosco através{' '}
                            <a
                                href="https://forms.office.com/r/F0dJ0XVTVG"
                                target="_blank"
                                rel="noreferrer"
                            >
                                do nosso formulário
                            </a>
                            .
                        </li>
                    </ul>

                    <h2>Mais informações</h2>
                    <p>
                        Esperamos que esteja esclarecido e, como mencionado
                        anteriormente, se houver algo que você não tem certeza
                        se precisa ou não, geralmente é mais seguro deixar os
                        cookies ativados, caso interaja com um dos recursos que
                        você usa em nosso site.
                    </p>

                    <p>
                        O site douglasndm.dev empregará esforços para resguardar
                        as informações e dados coletados do usuário. Todavia,
                        considerando que não há meio de transmissão e retenção
                        de dados eletrônicos plenamente eficaz e seguro, o site
                        douglasndm.dev não pode assegurar que terceiros não
                        autorizados não logrem êxito no acesso indevido.
                    </p>
                </Prose>
            </LegalCard>
        </Content>

        <Footer />
    </Container>
);

export default Privacy;

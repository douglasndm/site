import React from 'react';

import Header from '../../../Components/Header';

import { Container, ExplainContainer, XMLExportImage } from './styles';

const ExpiryTracker: React.FC = () => (
    <Container>
        <Header fixed={false} />
        <ExplainContainer>
            <h1>Documentação da Estrutura XML Gerada</h1>

            <br />
            <h2>Visão Geral</h2>
            <p>
                O XML gerado contém informações sobre marcas, categorias, lojas
                e produtos, com dados detalhados para cada item.
            </p>
            <br />
            <br />

            <h2>Estrutura XML</h2>

            <br />
            <ul>
                <li>
                    <strong>data</strong>: Raiz do documento XML.
                    <ul>
                        <br />
                        <li>
                            <strong>total</strong>
                            <ul>
                                <li>
                                    <strong>products</strong>: Total de
                                    produtos.
                                </li>
                                <li>
                                    <strong>brands</strong>: Total de marcas.
                                </li>
                                <li>
                                    <strong>categories</strong>: Total de
                                    categorias.
                                </li>
                                <li>
                                    <strong>stores</strong>: Total de lojas.
                                </li>
                            </ul>
                        </li>
                        <br />
                        <br />

                        <li>
                            <strong>brands - Array</strong> (Marcas):
                            <ul>
                                <li>
                                    <strong>brand</strong>: Informações sobre
                                    uma marca.
                                    <ul>
                                        <li>
                                            <strong>id</strong>: ID da marca.
                                        </li>
                                        <li>
                                            <strong>nome</strong>: Nome da
                                            marca.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <br />
                        <br />

                        <li>
                            <strong>categories - Array</strong> (Categorias):
                            <ul>
                                <li>
                                    <strong>category</strong>: Informações sobre
                                    uma categoria.
                                    <ul>
                                        <li>
                                            <strong>id</strong>: ID da
                                            categoria.
                                        </li>
                                        <li>
                                            <strong>nome</strong>: Nome da
                                            categoria.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <br />
                        <br />

                        <li>
                            <strong>stores - Array</strong> (Lojas):
                            <ul>
                                <li>
                                    <strong>store</strong>: Informações sobre
                                    uma loja.
                                    <ul>
                                        <li>
                                            <strong>id</strong>: ID da loja.
                                        </li>
                                        <li>
                                            <strong>nome</strong>: Nome da loja.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <br />
                        <br />

                        <li>
                            <strong>products - Array</strong> (Produtos):
                            <ul>
                                <li>
                                    <strong>product</strong>: Informações sobre
                                    um produto.
                                    <ul>
                                        <li>
                                            <strong>name</strong>: Nome do
                                            produto.
                                        </li>
                                        <li>
                                            <strong>code</strong>: Código do
                                            produto.
                                        </li>
                                        <li>
                                            <strong>photo</strong>: Nome do
                                            arquivo de foto no dispositivo que
                                            foi exportado.
                                        </li>
                                        <li>
                                            <strong>daysToBeNext</strong>: Dias
                                            para ser o próximo.
                                        </li>
                                        <li>
                                            <strong>created_at</strong>: Data de
                                            criação do produto.
                                        </li>
                                        <li>
                                            <strong>updated_at</strong>: Data de
                                            atualização do produto.
                                        </li>
                                        <br />
                                        <li>
                                            <strong>batches - Array</strong>{' '}
                                            (Lotes do produto):
                                            <ul>
                                                <li>
                                                    <strong>batch</strong>:
                                                    Informações sobre um lote do
                                                    produto.
                                                    <ul>
                                                        <li>
                                                            <strong>
                                                                name
                                                            </strong>
                                                            : Nome do lote.
                                                        </li>
                                                        <li>
                                                            <strong>
                                                                exp_date
                                                            </strong>
                                                            : Data de validade
                                                            do lote.
                                                        </li>
                                                        <li>
                                                            <strong>
                                                                amount
                                                            </strong>
                                                            : Quantidade do
                                                            lote.
                                                        </li>
                                                        <li>
                                                            <strong>
                                                                price
                                                            </strong>
                                                            : Preço do lote.
                                                        </li>
                                                        <li>
                                                            <strong>
                                                                price_tmp
                                                            </strong>
                                                            : Preço temporário
                                                            do lote.
                                                        </li>
                                                        <li>
                                                            <strong>
                                                                status
                                                            </strong>
                                                            : Status do lote.
                                                        </li>
                                                        <li>
                                                            <strong>
                                                                created_at
                                                            </strong>
                                                            : Data de criação do
                                                            lote.
                                                        </li>
                                                        <li>
                                                            <strong>
                                                                updated_at
                                                            </strong>
                                                            : Data de
                                                            atualização do lote.
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <br />
                                        <li>
                                            <strong>brand</strong> (Marca do
                                            produto):
                                            <ul>
                                                <li>
                                                    <strong>id</strong>: ID da
                                                    marca.
                                                </li>
                                            </ul>
                                        </li>
                                        <br />
                                        <li>
                                            <strong>category</strong> (Categoria
                                            do produto):
                                            <ul>
                                                <li>
                                                    <strong>id</strong>: ID da
                                                    categoria.
                                                </li>
                                            </ul>
                                        </li>
                                        <br />
                                        <li>
                                            <strong>store</strong> (Loja do
                                            produto):
                                            <ul>
                                                <li>
                                                    <strong>id</strong>: ID da
                                                    loja.
                                                </li>
                                            </ul>
                                        </li>
                                        <br />
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>

            <h2>Estrutura XML</h2>

            <XMLExportImage />

            {/* eslint-disable
            <pre>
            <code>
            data
            ├── total
            │   ├── products (Total de produtos)
            │   ├── brands (Total de marcas)
            │   ├── categories (Total de categorias)
            │   └── stores (Total de lojas)
            │
            ├── brands - Array (Marcas)
            │   └── brand
            │       ├── id (ID da marca)
            │       └── nome (Nome da marca)
            │
            ├── categories - Array (Categorias)
            │   └── category
            │       ├── id (ID da categoria)
            │       └── nome (Nome da categoria)
            │
            ├── stores - Array (Lojas)
            │   └── store
            │       ├── id (ID da loja)
            │       └── nome (Nome da loja)
            │
            └── products (Produtos)
                └── product
                    ├── name (Nome do produto)
                    ├── code (Código do produto)
                    ├── photo (Foto do produto)
                    ├── daysToBeNext (Dias para ser o próximo)
                    ├── created_at (Data de criação do produto)
                    ├── updated_at (Data de atualização do produto)
                    ├── batches - Array (Lotes do produto)
                    │   └── batch
                    │       ├── name (Nome do lote)
                    │       ├── exp_date (Data de validade do lote)
                    │       ├── amount (Quantidade do lote)
                    │       ├── price (Preço do lote)
                    │       ├── price_tmp (Preço temporário do lote)
                    │       ├── status (Status do lote)
                    │       ├── created_at (Data de criação do lote)
                    │       └── updated_at (Data de atualização do lote)
                    ├── brand (Marca do produto)
                    │   └── id (ID da marca)
                    ├── category (Categoria do produto)
                    │   └── id (ID da categoria)
                    └── store (Loja do produto)
                        └── id (ID da loja)
            </code>
            </pre> */}
            {/* /*eslint-enable */}
        </ExplainContainer>
    </Container>
);

export default ExpiryTracker;

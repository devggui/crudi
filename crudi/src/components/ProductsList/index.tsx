import React from 'react';

import { Container, Title, Cards, Card, PageIcon, EditIcon, TrashIcon } from './styles';

const ProductsList: React.FC = () => {
    return (
        <Container>
            <Title>Listagem de produtos</Title>
            <Cards>
                <Card>
                    <strong>Produtos Cadastrados</strong>
                    <span>15</span>
                </Card>
                <Card>
                    <strong>Produtos Cadastrados</strong>
                    <span>15/50</span>
                </Card>
            </Cards>

            <button>Adicionar novo produto</button>

            <table>
                <tr>
                    <th><input type="checkbox" /></th>
                    <th>Imagem</th>
                    <th>Nome</th>
                    <th>Categoria</th>
                    <th>Preço</th>
                    <th>Status</th>
                    <th>Ações</th>
                </tr>
                <tr>
                    <td><input type="checkbox" id="" /></td>
                    <td></td>
                    <td>Lorem Ipsum</td>
                    <td>Lorem Ipsum</td>
                    <td>R$ 9,99</td>
                    <td>Lorem Ipsum</td>
                    <td>
                        <PageIcon />
                        <EditIcon />
                        <TrashIcon />
                    </td>
                </tr>
                <tr>
                    <td><input type="checkbox" id="" /></td>
                    <td></td>
                    <td>Lorem Ipsum</td>
                    <td>Lorem Ipsum</td>
                    <td>R$ 9,99</td>
                    <td>Lorem Ipsum</td>
                    <td>
                        <PageIcon />
                        <EditIcon />
                        <TrashIcon />
                    </td>
                </tr>
                <tr>
                    <td><input type="checkbox" id="" /></td>
                    <td></td>
                    <td>Lorem Ipsum</td>
                    <td>Lorem Ipsum</td>
                    <td>R$ 9,99</td>
                    <td>Lorem Ipsum</td>
                    <td>
                        <PageIcon />
                        <EditIcon />
                        <TrashIcon />
                    </td>
                </tr>
                <tr>
                    <td><input type="checkbox" id="" /></td>
                    <td></td>
                    <td>Lorem Ipsum</td>
                    <td>Lorem Ipsum</td>
                    <td>R$ 9,99</td>
                    <td>Lorem Ipsum</td>
                    <td>
                        <PageIcon />
                        <EditIcon />
                        <TrashIcon />
                    </td>
                </tr>
                <tr>
                    <td><input type="checkbox" id="" /></td>
                    <td></td>
                    <td>Lorem Ipsum</td>
                    <td>Lorem Ipsum</td>
                    <td>R$ 9,99</td>
                    <td>Lorem Ipsum</td>
                    <td>
                        <PageIcon />
                        <EditIcon />
                        <TrashIcon />
                    </td>
                </tr>
            </table>
        </Container>
    );
}

export default ProductsList;
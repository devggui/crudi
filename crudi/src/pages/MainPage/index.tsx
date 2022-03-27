import React from 'react';

import { Container } from './styles';
import MenuBar from '../../components/MenuBar';
import ProductsList from '../../components/ProductsList';

const MainPage: React.FC = () => {
    return (
        <Container>
            <MenuBar />
            <ProductsList />
        </Container>    
    );
}

export default MainPage;
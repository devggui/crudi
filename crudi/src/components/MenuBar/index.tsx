import React from 'react';

import { Container, Logo, MenuButton } from './styles';

const MenuBar: React.FC = () => {
    return (
        <Container>
            <Logo />
            <MenuButton></MenuButton>
            <MenuButton></MenuButton>
            <MenuButton></MenuButton>
            <MenuButton></MenuButton>
            <MenuButton></MenuButton>
        </Container>
    );
}

export default MenuBar;
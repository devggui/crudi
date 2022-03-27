import styled from "styled-components";

import { Dashboard } from "../../styles/icons";

export const Container = styled.div`
    height: 100vh;
    width: 80px;

    background: var(--gray-light-4);

    display: flex;
    flex-direction: column;
    box-shadow: 2px 1px 5px var(--gray-light);

    z-index: 1;
`;

export const Logo = styled(Dashboard)`
    width: 50px;
    height: 50px;

    margin: 10px auto;

    fill: var(--purple);
`;

export const MenuButton = styled.button`
    width: 60px;
    height: 60px;
    margin: 10px auto;
    
    border-radius: 5px;
    border: 1px solid var(--gray-light-3);
    
    background: var(--gray-light-2);

    cursor: pointer;
    
    &:hover, &.active {
        background: var(--gray-light-3);
        border-color: var(--gray-light);
    }
`;
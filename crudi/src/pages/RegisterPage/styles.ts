import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--gray-light);
`;

export const Form = styled.div`
    width: 400px;

    display: flex;
    flex-direction: column;

    background: var(--gray-light-1);

    padding: 30px;

    
    > h1 {
        width: 80%;
        margin: 0px auto 15px auto;
        text-align: center;
    }

    > input {
        width: 80%;
        padding: 7px 15px;

        border: 1px solid var(--border);
        border-radius: 3px;

        background: var(--primary);

        margin: 3px auto 10px;
    }

    > strong {
        margin: 0px 5px 0px 35px;
    }

    > button {
        width: 80%;
        height: 45px;
        
        margin: 15px auto;
        
        background: var(--submit-button);
        border: 1px solid var(--submit-button-border);
        color: var(--primary);
        font-weight: bold;

        border-radius: 4px;

        cursor: pointer;
    }
`;

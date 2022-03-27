import styled, { css } from 'styled-components';
import { Page, Edit, Trash } from  '../../styles/icons';

export const Container = styled.div`
    width: calc(100% - 80px);
    min-height: 100px;

    background: var(--gray-light-1);

    > button {
        background: var(--blue-2);
        color: var(--primary);

        padding: 10px 15px;

        border-radius: 4px;

        font-weight: bold;

        margin: 25px;

        cursor: pointer;

        &:hover {
            background: var(--blue);
        }
    }

    > table {
        width: 98%;
        margin: 0px auto;
        border-spacing: 0;
        

        > tr {            
            th {
                background: var(--gray-light-1);
                color: var(--gray);
                text-transform: uppercase;
            }
            padding: 5px 10px;
            height: 50px;

            text-align: center;

            &:nth-child(even){
                background: var(--gray-light-5);
            }

            &:nth-child(odd){
                background: var(--gray-light-4);
            }

            td {
                color: var(--gray);
            }
        }
    }
`;

export const Title = styled.div`
    padding: 25px 0 0 20px;

    font-weight: 600;
    font-size: 30px;
`;
 
export const Cards = styled.div`
    width: 100%;
    height: 200px;

    display: flex;
    flex-direction: row;
`; 

export const Card = styled.div`
    width: 26%;
    max-width: 300px;
    height: 180px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 20px;
    margin: 10px 15px;
    background: var(--primary);
    
    border-radius: 10px;

    box-shadow: 2px 2px 5px var(--gray-light);

    > strong {
        font-size: 17px;
    }

    > span {
        font-size: 40px;
    }
`; 

const iconCSS = css`
    width: 35px;
    height: 35px;

    padding: 5px;

    margin-left: 10px;
    background: var(--border);

    border: 1px solid var(--gray-light-3);
    border-radius: 5px;

    &:hover {
        background: var(--gray-light-3);
    }
`;

export const PageIcon = styled(Page)`
    ${iconCSS}
`;

export const EditIcon = styled(Edit)`
    ${iconCSS}
`;

export const TrashIcon = styled(Trash)`
    ${iconCSS}
`;


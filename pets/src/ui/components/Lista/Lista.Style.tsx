import { styled } from '@mui/material';

export const ListaStyled = styled('ul')`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing(2)};
`;

export const ItemLista = styled('li')`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

`;

export const Foto = styled('img')`
    
`;

export const Informacoes = styled('div')`

`;

export const Nome = styled('h2')`

`;

export const Descricao = styled('p')`
    
`;
import { styled } from '@mui/material';

export const TitleStyled = styled('h1')`
    font-style: 20px;
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing(3) }; 
`;

export const Subtitle = styled('h2')`
    font-style: 18px;
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing(5)};
    font-weight: normal;
    color: ${({ theme }) => theme.palette.text.secondary}
`;
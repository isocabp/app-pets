import { Button } from '@mui/material'
import {
    ListaStyled,
    ItemLista,
    Foto,
    Informacoes,
    Nome,
    Descricao
} from './Lista.Style'

export default function Lista() {
    return (
        <ListaStyled>
            <ItemLista>
                <Foto src={'https://pbs.twimg.com/media/FSVEVU3WQAc8-pt?format=jpg&name=large'}/>
                <Informacoes>
                    <Nome>Mezena</Nome>
                    <Descricao>
                        Dentinha. É muito mimada, nossa rainha. É uma mezena!
                    </Descricao>
                    <Button
                        variant={'contained'}
                    >Adotar</Button>
                </Informacoes>
            </ItemLista>
            <ItemLista>
                <Foto src={'https://pbs.twimg.com/media/FG_2mk8WYAA11LV?format=jpg&name=large'}/>
                <Informacoes>
                    <Nome>Jake Peralta</Nome>
                    <Descricao>
                        Muito carinho mas muito bruto. Cria!
                    </Descricao>
                    <Button
                        variant={'contained'}
                    >Adotar</Button>
                </Informacoes>
            </ItemLista>
        </ListaStyled>
    )
}
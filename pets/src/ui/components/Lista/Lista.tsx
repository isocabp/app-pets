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
                <Foto src={'https://www.maxtotalalimentos.com.br/img/seo/9/377/5-coisas-que-fazem-seu-cachorro-viralata-feliz.jpg'}/>
                <Informacoes>
                    <Nome>Bidu</Nome>
                    <Descricao>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cum culpa ad ipsum ex, sint iure tempora incidunt quas deleniti provident vero perferendis in libero earum necessitatibus, laborum dolores quam!
                    </Descricao>
                    <Button
                        variant={'contained'}
                    >Adotar</Button>
                </Informacoes>
            </ItemLista>
            <ItemLista>
                <Foto src={'https://www.maxtotalalimentos.com.br/img/seo/9/377/5-coisas-que-fazem-seu-cachorro-viralata-feliz.jpg'}/>
                <Informacoes>
                    <Nome>Bidu</Nome>
                    <Descricao>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cum culpa ad ipsum ex, sint iure tempora incidunt quas deleniti provident vero perferendis in libero earum necessitatibus, laborum dolores quam!
                    </Descricao>
                    <Button
                        variant={'contained'}
                    >Adotar</Button>
                </Informacoes>
            </ItemLista>
        </ListaStyled>
    )
}
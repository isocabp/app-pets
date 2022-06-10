import { useState } from 'react';
import { Pet } from '../../@types/Pet';

export function useIndex() {
    const [listaPets, setListaPets] = useState(
        [
            {
                id: 1,
                nome: 'Mezena',
                historia: 'Dentinha. É muito mimada, nossa rainha. É uma mezena!',
                foto: 'https://pbs.twimg.com/media/FSVEVU3WQAc8-pt?format=jpg&name=large'
            },
            {
                id: 2,
                nome: 'Jake Peralta',
                historia: 'Muito carinhoso mas muito bruto. Cria!',
                foto: 'https://pbs.twimg.com/media/FG_2mk8WYAA11LV?format=jpg&name=large'
            },
            
        ]
    ),

        [petSelecionado, setPetSelecionado] = useState<Pet | null>(null);    


    return{
        listaPets,
        petSelecionado,
        setPetSelecionado
    };
}
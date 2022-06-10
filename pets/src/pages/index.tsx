import type { NextPage } from 'next'
import Title from '../ui/components/Title/Title';
import Lista from '../ui/components/Lista/Lista';
import { Dialog, TextField, Grid, DialogActions, Button, Snackbar } from '@mui/material';
import { useIndex } from '../data/hooks/pages/useIndex';




const Home: NextPage = () => {
  const {
    listaPets,
    petSelecionado,
    setPetSelecionado
  } = useIndex();

  return (
    <div>
      <Title title="" 
      subtitle={
      <span>Com um pequeno valor mensal você <br />
      pode <strong>adotar um pet virtualmente</strong></span>} />

      <Lista
        pets={listaPets}
        onSelect={(pet) => setPetSelecionado(pet)}
      />


      <Dialog 
        open={petSelecionado !== null}
        fullWidth
        PaperProps={{sx: {p: 5} }}
        onClose={() => setPetSelecionado(null)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField 
              label={'Email'}
              type={'email'}
              fullWidth
            />
        </Grid>
        <Grid item xs={12}>
            <TextField 
              label={'Quantia por mês'}
              type={'number'}
              fullWidth
            />
        </Grid>
        </Grid>
        <DialogActions sx={{mt:5}}>
          <Button
            color={'secondary'}
          >
            Cancelar
          </Button>
          <Button 
            variant={'contained'}
          >
            Confirmar adoção
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={false}
        message={'slkdjlad asldjaldja dasldjaldjk asdljadlkja'}
      />
      
    </div>
  )
}

export default Home

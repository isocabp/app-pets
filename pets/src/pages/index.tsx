import type { NextPage } from 'next'
import Title from '../ui/components/Title/Title';
import Lista from '../ui/components/Lista/Lista';
import { Dialog, TextField, Grid, DialogActions, Button, Snackbar } from '@mui/material';
import { useState } from 'react';




const Home: NextPage = () => {
  return (
    <div>
      <Title title="" 
      subtitle={
      <span>Com um pequeno valor mensal você <br />
      pode <strong>adotar um pet virtualmente</strong></span>} />

      <Lista/>
      
      <Dialog 
        open={false}
        fullWidth
        PaperProps={{sx: {p: 5} }}
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

import React from 'react';
import FormMascotas from './FormMascotas';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

const Main=()=> {
  return (
    <Box sx={{mt: 4,}} component='main'>
       
      <Grid container justifyContent='center'>
        <Grid xs={12} >
        <Typography textAlign={'center'} variant="h4" gutterBottom>
          Refugio De Mascotas
        </Typography>  
        </Grid>
        <Grid> <FormMascotas /></Grid>
        
      </Grid>
    </Box>
  );
};  
  
export default Main;
import React, { useState } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Unstable_Grid2';
import { useFormik } from 'formik';
import { Button, Box, Paper } from '@mui/material';
import { InputsForm } from './FormMascotas';
import validate from "./FormMascotas.validate";

const FormEdit = ({editar}) => {
    const[formularioEnviado, setFormularioEnviado] = useState(false);
  
  const handleSubmit = async (valores) => {
    try {
      const res = await axios.put('http://18.119.108.10:8080/api/mascotas/'+ editar._id ,valores);

      console.log(res.data.message);
      setFormularioEnviado(true);
    } catch (e) {
      console.log('Error', e);
      setFormularioEnviado(500);
    }
  };

  const formik = useFormik({
    initialValues: {
        petName: editar.petName,
        petType: editar.petType,
        petDescription:editar.petDescription,
        skill1: editar.skill1,
        skill2: editar.skill2,
        skill3: editar.skill3,
    },
    validate,
    onSubmit: handleSubmit,
  });

    return (
        <Box sx={{mt: 4,}} component='main'>
            <Grid container justifyContent='center'>
                <Paper sx={{p: 4, width: 400}}>
                    <form onSubmit={formik.handleSubmit} autoComplete="off">
                        <Grid container spacing={2}>
                            <InputsForm formik={formik} />

                            <Grid container justifyContent='flex-end' xs={12}>
                                <Button type='submit' color='inherit'>Actualizar</Button>
                            </Grid>

                            {formularioEnviado && (
                            <Grid xs={12} textAlign='center'>
                                <Box color='success.main'>Producto Actualizado</Box>
                            </Grid>
                            )}

                            {(formularioEnviado === 500) && (
                            <Grid xs={12} textAlign='center'>
                                <Box color='error.main'>Error al Actualizar el producto</Box>
                            </Grid>
                            )}
                        </Grid>
                    </form>
                </Paper>
            </Grid>
        </Box>
    );
}

export default FormEdit;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import validate from "./FormMascotas.validate";
import axios from "axios";
import { TextField, Button, Box, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export const InputsForm = ({ formik, loading }) => {
  return (
    <>
      <Grid xs={12}>
        <TextField
          fullWidth
          disabled={loading}
          id="petName"
          name="petName"
          label="Nombre de la Mascota"
          value={formik.values.petName}
          onChange={formik.handleChange}
          error={
            formik.touched.petName && Boolean(formik.errors.petName)
          }
          helperText={formik.touched.petName && formik.errors.petName}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          fullWidth
          disabled={loading}
          id="petType"
          name="petType"
          label="Tipo de Mascota"
          value={formik.values.petType}
          onChange={formik.handleChange}
          error={
            formik.touched.petType && Boolean(formik.errors.petType)
          }
          helperText={formik.touched.petType && formik.errors.petType}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          fullWidth
          disabled={loading}
          id="petDescription"
          name="petDescription"
          label="Descripcion de la Mascota"
          value={formik.values.petDescription}
          onChange={formik.handleChange}
          error={
            formik.touched.petDescription && Boolean(formik.errors.petDescription)
          }
          helperText={formik.touched.petDescription && formik.errors.petDescription}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          fullWidth
          disabled={loading}
          id="skill1"
          name="skill1"
          label="Habilidad 1 (Opcional)"
          value={formik.values.skill1}
          onChange={formik.handleChange}
          error={
            formik.touched.skill1 && Boolean(formik.errors.skill1)
          }
          helperText={formik.touched.skill1 && formik.errors.skill1}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          fullWidth
          disabled={loading}
          id="skill2"
          name="skill2"
          label="Habilidad 2 (Opcional)"
          value={formik.values.skill2}
          onChange={formik.handleChange}
          error={
            formik.touched.skill2 && Boolean(formik.errors.skill2)
          }
          helperText={formik.touched.skill2 && formik.errors.skill2}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          fullWidth
          disabled={loading}
          id="skill3"
          name="skill3"
          label="Habilidad 3 (Opcional)"
          value={formik.values.skill3}
          onChange={formik.handleChange}
          error={
            formik.touched.skill3 && Boolean(formik.errors.skill3)
          }
          helperText={formik.touched.skill3 && formik.errors.skill3}
        />
      </Grid>
    </>
  )
}

const FormMascotas= () => {
  const [mascotasForm, setmascotasForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (valores) => {
    setmascotasForm(false);
    setLoading(true);
    try {
      await axios.post("http://18.119.108.10:8080/api/mascotas", valores);
      
      navigate('/');
    } catch (e) {
      console.log("Error", e);
      if (e?.response?.status === 500) {
        setmascotasForm(500);
      }else if(e?.response?.status === 400){
        setmascotasForm(400);
      }
    }
    setLoading(false);
  };

  const formik = useFormik({
    initialValues: {
      petName: "",
      petType: "",
      petDescription:"",
      skill1: "",
      skill2: "",
      skill3: "",
      
    },
    validate,
    onSubmit: handleSubmit,
  });

  return (
    <main>
      <Grid container>
      
        <Paper elevation={0} sx={{mt: 4, p: 4, width: 600}}>
          <form onSubmit={formik.handleSubmit} autoComplete="off">
            <Grid container spacing={2}>
              <InputsForm formik={formik} loading={loading} />
              
              <Grid container spacing={2} xs={12}>
                <Grid container justifyContent="flex-end" xs={12}>
                  <Button disabled={loading} type="submit" color="inherit">
                    Crear Mascota
                  </Button>
                </Grid>

                {(mascotasForm === 200) && (
                  <Grid xs={12} textAlign="center">
                    <Box color="success.main">Mascota Creada</Box>
                  </Grid>
                )}

                 
                {(mascotasForm === 400) && (
                  <Grid xs={12} textAlign="center">
                    <Box color="error.main">El Nombre de la Mascota ya Existe</Box>
                  </Grid>
                )}

                {(mascotasForm === 500) && (
                  <Grid xs={12} textAlign="center">
                    <Box color="error.main">Error al Crear la Mascota</Box>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </main>
  );
};

export default FormMascotas;


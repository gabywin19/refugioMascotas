import React from "react";
import { useNavigate } from "react-router-dom";
import { Paper, Typography, Container, Button} from '@mui/material';
import axios from "axios";
import Grid from "@mui/material/Unstable_Grid2";
import PetsIcon from '@mui/icons-material/Pets';


const ShowDetails=({mascota})=>{
    const navigate=useNavigate()
    
    const adoptame = async (id) => {
       
        try {
          await axios.delete("http://18.119.108.10:8080/api/mascotas/" + id);
          
          navigate('/');
        } catch (e) {
          console.log("Error", e);
         
        }
       
      };
    
    return(
        <Container sx={{mt: 2}}>
           <Grid container justifyContent='center' spacing={2}>
                <Grid xs={6}>
                    <Typography variant="h2" gutterBottom>
                        {mascota.petName}
                    </Typography>
                </Grid>
                <Grid container alignContent='center'>
                <Button variant="contained" endIcon={<PetsIcon />} onClick={()=>{adoptame(mascota._id)}}>
                  Adoptame
                </Button>
                </Grid>
                
                <Grid xs={12}>
                    <Paper elevation={0} sx={{p: 4}}>
                        <Grid container justifyContent='center' spacing={2}>
                            <Grid xs={12}>
                                Tipo de Mascota: {mascota.petType}
                            </Grid>
                            <Grid xs={12}>Descripcion de la Mascota: {mascota.petDescription}</Grid>
                            <Grid xs={12}>Habilidad 1: {mascota.skill1}</Grid>
                            <Grid xs={12}>Habilidad 2: {mascota.skill2}</Grid>
                            <Grid xs={12}>Habilidad 3: {mascota.skill3}</Grid>
                        </Grid>

                    </Paper>
                </Grid>
               
            </Grid>
        </Container>
    )
};

export default ShowDetails;
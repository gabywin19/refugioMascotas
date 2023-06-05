import React from "react";
import {NavLink} from 'react-router-dom';
import {Table,TableHead,TableRow,TableCell,TableBody,Button} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";



const MascotasList = (props) => {
 
  return (
    <div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell>Acción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.mascotas.map((mascota, idx) => {
            return (
              <TableRow key={idx}>
                <TableCell>{mascota.petName}</TableCell>
                <TableCell>{mascota.petType}</TableCell>
                <TableCell>
                  <Grid container spacing={2}>
                    <Grid>
                    <Button variant="contained" component={NavLink} to={'/mascotas/'+ mascota._id}>Detalles</Button>
                    </Grid>
                    <Grid>
                    <Button variant="contained" component={NavLink} to={'/mascotas/edit/'+ mascota._id}>Editar</Button>
                    </Grid>
                   
                  </Grid>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default MascotasList;

import React from 'react';
import axios from 'axios';
import { Button} from '@mui/material';


const Eliminar= ({id, setLoading}) => {
  
  
  const deleteJugadores = async(id) => {
    try {
      await axios.delete("http://18.119.108.10:8080/api/jugadores/" + id);

      setLoading(true);
    } catch (e) {
      console.log('Error', e);
    }

  };
  
  return (
    <div>
      <Button variant="outlined" onClick={(e) => deleteJugadores(id)}>Delete</Button>
     
    </div>
  )
};

export default Eliminar;




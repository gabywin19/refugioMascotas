import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import FormEdit from './FormEdit';

const Editar=()=>{
    const [editar, setEditar] = useState({});
    let { id } = useParams();

    useEffect(() => {
        const edit = async () => {
          try {
            const res = await axios.get("http://18.119.108.10:8080/api/mascotas/" + id );
  
            setEditar(res.data);
          } catch (e) {
            console.log('Error', e);
            setEditar(null);
          }
        }
  
        edit()
        // eslint-disable-next-line
    }, []);

  return(
    <div>
        {!editar?._id && (<span>Cargando...</span>)}
        {(editar === null) && (<span>No hay ningún miau o guau por aquí...</span>)}
        {editar?._id && (
          <FormEdit editar={editar}/>
        )}
    </div>
  );
};

export default Editar;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MascotasList from './MascotasList'


const Mascotas=() =>{
  const [mascotas, setMascotas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetch = async () => {
      setMascotas([]);
      try {
        const res = await axios.get('http://18.119.108.10:8080/api/mascotas');

        setLoading(false);
        setMascotas(res.data.reverse());
      } catch (error) {
        console.log(error);
        setLoading(false);
        setMascotas(null);
      }
    }

    if (loading) {
      fetch();
    }
  },[loading]);

  return (
    <>
      {(mascotas?.length <= 0 && loading) && (<span>Cargando...</span>)}
      {(mascotas?.length === 0 && !loading) && (<span>No hay ningún miau o guau por aquí..</span>)}
      {(mascotas?.length > 0 && (<MascotasList setLoading={setLoading} mascotas={mascotas} />))}
    </>
  )
};

export default Mascotas;
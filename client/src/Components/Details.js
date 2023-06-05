import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ShowDetails from "./ShowDetails";

const Detail = (props) => {
  const [mascota, setMascota] = useState({});

  let { id } = useParams();

  useEffect(() => {
    const detalles = async () => {
      try {
        const res = await axios.get("http://18.119.108.10:8080/api/mascotas/" + id);

        setMascota(res.data);
      } catch (e) {
        console.log("Error", e);
        setMascota(null);
      }
    };

    detalles();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {!mascota?._id && <span>Cargando...</span>}
      {mascota === null && (
        <span>No se han podido obtener los productos registrados.</span>
      )}
      {mascota?._id && <ShowDetails mascota={mascota} />}
    </>
  );
};

export default Detail;

import React from 'react';
import {Route, Routes} from "react-router-dom";
import Header from './Components/Header';
import Main from './Components/Main';
import Mascotas from './Components/Mascotas';
import Editar from './Components/Editar';
import Details from './Components/Details';


const Root=() =>{
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Mascotas />} />

        <Route path="/mascotas/*">
          <Route path="crear" element={<Main />} />
          <Route path=":id" element={<Details />} />
          <Route path="edit/:id" element={<Editar />} />
        </Route>
      </Routes>
    </>
  );
};

export default Root;
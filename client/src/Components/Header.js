import React from 'react';
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Button } from '@mui/material';

const nav = [
  {
    title: 'Ver Mascotas',
    path: '/'
  },
  {
    title: 'Crear Mascotas',
    path: '/mascotas/crear'
  },
 
]

const Header =()=> {
  const navs = nav.map((datos, i) => (
    <Button key={i} to={datos.path} component={NavLink} color="inherit">
      {datos.title}
    </Button>
  ))

  return (
    <AppBar position="static">
      <Toolbar>
        {navs}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
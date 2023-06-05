const validate = (valores)=>{
    let errores={};
    
    if (!valores.petName) {
        errores.petName = 'Required';
    } else if(valores.petName.length<3 ){
        errores.petName= 'El Nombre de la Mascota Tiene que tener Minimo 3 Caracteres';
    }
    
    if (!valores.petType) {
        errores.petType = 'Required';
    }else if(valores.petType.length<3 ){
        errores.petType= 'El Tipo de Mascota Tiene que tener Minimo 3 Caracteres';
    }

    if (!valores.petDescription) {
        errores.petDescription = 'Required';
    }else if(valores.petDescription.length<3 ){
        errores.petDescription= 'La Descripcion de la Mascota Tiene que tener Minimo 3 Caracteres';
    }


 return errores;
}

export default validate;
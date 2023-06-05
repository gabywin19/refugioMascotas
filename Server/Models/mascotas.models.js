const mongoose= require('mongoose');

const mascotasSchema = new mongoose.Schema({
    petName: {
        type: String,
        min: [3, 'El Nombre de la Mascota debe tener minimo 3 Caracteres'],
        required: [true, 'Debe ingresar un Nombre de Mascota'],
    },
    petType: {
        type: String,
        min: [3, 'El tipo de Mascota debe tener minimo 3 Caracteres'],
        required: [true, 'Debe ingresar un Tipo de Mascota'],
    },
    petDescription: {
        type: String,
        min: [3, 'La Descripcion de la Mascota debe tener minimo 3 Caracteres'],
        required: true
    },
    skill1: {
        type: String,
        
    },
    skill2: {
        type: String,
        
    },
    skill3: {
        type: String,
       
    },
   
   
   
});

const mascotas= mongoose.model("mascotas", mascotasSchema);

module.exports = mascotas;
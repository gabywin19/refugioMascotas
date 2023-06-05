const mascotas= require('../Models/mascotas.models');

module.exports.create= async(req,res)=>{
  try {
      const getMascotas = await mascotas.find();
      let petExist = false;

      getMascotas.map((mascota) => {
        if (mascota.petName === req.body.petName) {
          petExist = true;
        }
      });

      if (petExist) {
        res.status(400).json({ 
          message: 'El Nombre de la Mascota ya Existe'
        });
        return true;
      }
    const newMascotas= await mascotas.create(req.body);
    res.json({ 
      message: 'Mascotas creado!!'
    })
  } catch (error) {
    res.status(500).json({
      body: req.body,
      message:'Error al crear la Mascota',
      error,
  });
}
};

module.exports.index= async(req,res)=>{
  try {
     const verMascotas= await mascotas.find().sort({petName: -1});
     res.json( verMascotas)
  } catch (error) {
      res.status(500).json({
        message:'No hemos podido ver a las Mascotas',
        error,
      });
  }
};

module.exports.get= async(req,res)=>{
  try {
   const oneMascotas= await mascotas.findOne( { _id: req.params.id } );
   res.json(  oneMascotas )
  } catch (error) {
    res.status(500).json({
      id: req.params.id,
      message:'No hemos podido encontrar la Mascota',
      error,
  });
}
};


module.exports.remove= async(req,res)=>{
  try {
    const mascotasDelete = await mascotas.deleteOne( { _id: req.params.id } );
    res.json({
      message: "Mascota Eliminada"
    })
  } catch (error) {
    res.status(500).json({
      id: req.params.id,
      message:'No hemos podido Eliminar la Mascota',
      error,
  });
}
};

module.exports.update= async(req,res)=>{
  try {
    const updateMascotas = await mascotas.findOne( { _id: req.params.id } );

    updateMascotas.petName= req.body.petName;
    updateMascotas.petType=req.body.petType;
    updateMascotas.petDescription=req.body.petDescription;
    updateMascotas.skill1=req.body.skill1;
    updateMascotas.skill2=req.body.skill2;
    updateMascotas.skill3=req.body.skill3;
    

    await updateMascotas.save();
    res.json({
      message: "Se actualizo la Mascota"
    })
  } catch (error) {
    res.status(500).json({
      id: req.params.id,
      message:'No hemos podido actializar la Mascota',
      error,
    });
  }
};





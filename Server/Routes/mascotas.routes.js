const { create,index,remove,get,update} = require("../Controllers/mascotas.controller");

module.exports=(app)=>{
   app.post('/api/mascotas', create);
   app.get('/api/mascotas', index);
   app.get('/api/mascotas/:id', get);
   app.delete('/api/mascotas/:id', remove);
   app.put('/api/mascotas/:id', update)
   
  
}

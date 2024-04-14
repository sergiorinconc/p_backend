const mongoose = require('mongoose');
require('dotenv').config();

// crear la conexion mongo db

const conectarBD = () => {
    // realizarlo con promesa

mongoose 
    .connect(process.env.DB_MONGO) // se encarga de conectar el backend con la base de datos 
    .then(()=> console.log('estamos conectado con mongo')) //nos permite enviar mensage  cuando este concetada la base de datos
    .catch((err)=> console.error(err));
}

// para maenjar con mi modelo 

module.exports = conectarBD; 
const express = require('express');
const conectarBD = require('../config/db');
const cors = require ('cors');

// crear nuestro servidor 
const app = express();

// enlazamos la conexion con nuestra base de datos 

conectarBD(); 
app.use(cors());

app.use(express.json());

// ruta principal del proyecto
app.use('/api/clientes',  require('../routers/rutas'));
app.use('/api/proveedor', require('../routers/rutasproveedor'));

// definir ruta principal 
app.get('/', (req, res)=>{
    res.send('Hola mundo');

})

// se define una constante para el puerto que tendra configuracion local o en la nube  del puerto 

const port = process.env.PORT || 3000;

app.listen(port, ()=> {// configuracion del puerto 
    console.log('el servidor esta conectado http://localhost:3000')
})




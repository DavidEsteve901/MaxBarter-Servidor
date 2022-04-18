const express = require('express');
import morgan from 'morgan';
import pkg from '../package.json'

//Importamos cors
const cors = require('cors')

//Rutas 
import ofertasRoutes from "./routes/ofertas.routes"
import authRoutes from './routes/auth.routes'
import productosRoutes from './routes/productos.routes'


//CONFIGURO EXPRESS
const app = express();

app.set('pkg',pkg)

// Middleware
// Para poder rellenar el req.body
app.use(cors()) //Establecemos el cors para las peticiones
app.use(express.json()); //Para que pueda entender los objetos JSON
app.use(express.urlencoded({ extended: false }));

//Para mostrar las peticiones por consola
app.use(morgan('dev')); 

app.get('/',(req,res) =>{
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

// Rutas
app.use("/api/ofertas",ofertasRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/productos",productosRoutes)

// app.use(require('./routes/routes'));
export default app;
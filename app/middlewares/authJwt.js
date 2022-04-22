// importamos variables de entorno
require('dotenv').config();

// importamos jsonwebtoken
const jwt = require('jsonwebtoken')

export const verifyToken = async (req,res,next) =>{

    //Si no tiene la cabecera no tiene acceso
    if(!req.headers.authorization){
        return res.status(401).json("No tienes acceso")
    }

    //Cogemos el token
    const token = req.headers.authorization.split(' ')[1]

    if(token === 'null'){
        return res.status(401).json("No tienes acceso null")
    }

    const tokenEnviado = jwt.verify(token,process.env.SECRET_KEY_TOKEN);

    //Le pasamos como respuesta un atributo con el id del usuario
    req.userId = tokenEnviado.id

    next()
}
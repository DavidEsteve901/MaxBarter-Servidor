// importamos variables de entorno
require('dotenv').config();

// importamos jsonwebtoken
const jwt = require('jsonwebtoken')

//Importamos modelos
const { Producto } = require('../models')
const { User } = require('../models')
const { Oferta } = require('../models')

export const verifyToken = async (req,res,next) =>{

    //Si no tiene la cabecera no tiene acceso
    if(!req.headers.authorization){
        return res.status(401).json("No tienes acceso, no estas logueado")
    }

    //Cogemos el token
    const token = req.headers.authorization.split(' ')[1]

    if(token === 'null'){
        return res.status(401).json("No tienes acceso null")
    }

    const tokenEnviado = jwt.verify(token,process.env.SECRET_KEY_TOKEN);

    //Le pasamos como respuesta un atributo con el id del usuario
    req.userId = tokenEnviado.userName

    next()
}

export const verifyUserEdit = async (req,res,next) =>{
    const { id } = req.params;
    try {
        const user = await User.findOne({
            where:{
                userName: req.userId
            }
        });
        var isAdmin = false;

        //Pasamos los roles a JSON
        user.roles = JSON.parse(user.roles)

        //Vemos si el usuario es admin
        user.roles.find((role)=>{
          if(role === "ROLE_ADMIN"){
            isAdmin = true
          }
        })

        if(isAdmin){
            next()
        }

        const productos = await Producto.findAll({
           where:{
               id: id ,
               user: req.userId
           }
        });

        
        if(productos.length == 0){
            return res.status(401).json("No tienes acceso")
        }

        next()

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Se produjo un error',
            data: {}
        });
    }

    
    
}

export const verifyIsUser = async (req,res,next) =>{
    const { userName } = req.body;
    try {
        //Comprobamos que sea Admin
        const user = await User.findOne({
            where:{
                userName: req.userId
            }
        });
        var isAdmin = false;

        //Pasamos los roles a JSON
        user.roles = JSON.parse(user.roles)

        //Vemos si el usuario es admin
        user.roles.find((role)=>{
        if(role === "ROLE_ADMIN"){
            isAdmin = true
        }
        })

        if(isAdmin){
            next()
        }
        
        const isUser = await User.findOne({
            where:{
                userName: req.userId
            }
        });
        
        if(isUser.userName != userName){
            return res.status(401).json("No tienes acceso")
        }

        next()

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Se produjo un error',
            data: {}
        });
    }
}


import { response } from 'express';

// import { User } from '../models/index'
const { User } = require('../models/index')

// importamos variables de entorno
require('dotenv').config();

// importamos jsonwebtoken
const jwt = require('jsonwebtoken')

export const registro = async (req, res) => {

    const { userName, password, correo, nombre, apellidos, imgPerfil, coordenadas} = req.body;

    try {
        const user = User.build({
            userName: userName,
            password: await User.encryptPassword(password),
            correo: correo,
            nombre: nombre,
            apellidos: apellidos,
            imgPerfil: imgPerfil,
            coordenadas: coordenadas,
            roles: ['ROLE_USER']
        })

        //Comprobamos que el usuario no exista
        const usuarioEx = await User.findByPk(userName);
    
        if(!usuarioEx){
            await user.save();

            //Creamos TOKEN
            const token = jwt.sign({ id: user.userName }, process.env.SECRET_KEY_TOKEN )

            res.status(200).json({token})
            // res.json(user);
        }else{
            res.status(401).json({message: "El nombre de usuario ya existe"})
        }
        
        
    } catch (error) {
        // res.json(error)
        res.json("error en la base de datos")
    }
    

    
}

export const login = async (req, res) => {
    
    const { userName, password } = req.body;

    //Buscamos al usuario
    const usuarioEx = await User.findByPk(userName);

    if(!usuarioEx) return res.status(401).json({message: "Usuario no existe"})
    
    const matchPassword = await User.comparePassword(password, usuarioEx.password);
    
    if(!matchPassword) return res.status(401).json({token: null, message: "Contraseña incorrecta"})

    //Generamos el token
    const token = jwt.sign({ id: usuarioEx.userName }, process.env.SECRET_KEY_TOKEN )

    res.status(200).json({token})
}

export const currentUser = async (req, res) => {
    
    const user = jwt.decode(req.body.token);
    
    res.status(200).json(user)
}
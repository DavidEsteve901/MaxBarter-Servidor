import { response } from 'express';


const { Imagen } = require('../models/index')
const  fs  = require("fs")
const path = require("path")

// importamos variables de entorno
require('dotenv').config();

export const getImagen = async (req, res) => {
    try {
        const { url } = req.body
        const Imagenes = await Imagen.findOne({
            where:{
                url: url
            }
        });

        if(!Imagenes){
            return res.status(404).json("No existe la imagen")
        }


        let img = path.join(__dirname, '..', 'uploads', Imagenes.url) ;


        res.sendFile(img)

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Se produjo un error',
            data: {}
        });
    }
}

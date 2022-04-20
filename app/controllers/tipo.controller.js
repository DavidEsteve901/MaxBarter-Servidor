
const { Tipo } = require('../models/index')

// importamos variables de entorno
require('dotenv').config();

export const getTipos = async (req, res) => {
    try {
        const tipos = await Tipo.findAll();

        return res.status(200).json({
            data: tipos
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Se produjo un error',
            data: {}
        });
    }
}

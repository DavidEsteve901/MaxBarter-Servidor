

const { ComunidadAutonoma } = require('../models/index')

// importamos variables de entorno
require('dotenv').config();

export const getProductosComunidadesAutonomas = async (req, res) => {
    try {
        const ComunidadesAutonomas = await ComunidadAutonoma.findAll();

        return res.status(200).json({
            data: ComunidadesAutonomas
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Se produjo un error',
            data: {}
        });
    }
}


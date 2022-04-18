const { Producto } = require('../models')

export const createProducto = async (req, res) => {
    const { titulo, descripcion, match, user} = req.body;

    try {
        let newProducto = await Producto.create({
            titulo: titulo,
            descripcion: descripcion,
            match: match,
            user
        })

        if (newProducto) {
            return res.status(200).json({
                message: 'Producto creado correctamente',
                data: newProducto
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Se produjo un error',
            data: {}
        });
    }
}

export const getProductos = async (req, res) => {
    try {
        const productos = await Producto.findAll();

        return res.status(200).json({
            data: productos
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Se produjo un error',
            data: {}
        });
    }
}

export const getProductobyId = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await Producto.findOne({
            where: {
                id
            }
        });

        return res.status(200).json({
            data: producto
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Se produjo un error',
            data: {}
        });
    }
}

export const updateProductoById = async (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion, match } = req.body;

    try {

        //Buscamos el Producto 
        const producto = await Producto.findOne({
            where: {
                id
            }
        });

        //Lo actualizamos
        producto.update({
            titulo,
            descripcion,
            match
        })

        if (producto) {
            return res.status(200).json({
                message: 'Producto actualizado correctamente',
                data:  producto
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Se produjo un error',
            data: {}
        });
    }
}

export const deleteProductoById = async (req, res) => {


    try {
        const { id } = req.params;
        const deleteRowCount = await Producto.destroy({
            where: {
                id
            }
        })

        return res.status(200).json({
            message: 'Producto eliminado correctamente',
            count: deleteRowCount
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Se produjo un error',
            data: {}
        });
    }
}


export const getProductsByUser = async (req, res) => {


    try {
        const { userName } = req.params;
        const productos = await Producto.findAll({
            where: {
                user: userName
            }
        })

        return res.status(200).json({
            data: productos
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Se produjo un error',
            data: {}
        });
    }
}
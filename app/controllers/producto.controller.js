import { response } from 'express';
import { send } from 'process';
import { paginate } from '../metodos/paginate';

const path = require('path');
const fs = require('fs').promises;

const { uploadImgsProducto }= import('../middlewares/uploadImagenesProductos')
const { Producto } = require('../models')
const { User } = require('../models')
const { Imagen } = require('../models')

const { Op } = require('sequelize')


export const createProducto = async (req, res) => {
    const { titulo, descripcion, user,tipo} = req.body;

    try {
        let newProducto = await Producto.create({
            titulo: titulo,
            descripcion: descripcion,
            user,
            match: false,
            tipo
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
        const productos = await Producto.findAll({
            include:{
                association: "propietario",
                include:{
                    association: "comunidadAutonoma"
                }
            }
        });

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

export const getProductosByPage = async (req, res) => {
    try {
        //Cojo los parametros de la peticion
        const { q, page, limit, order_by, order_direction } = req.body;

        let search = {};
        let order = [];

        const associations = [
            {
                association: "propietario",
                include:{
                    association: "comunidadAutonoma",
                }
            },
            {
                association: "tipoProducto",
                
            }
        ]

        //Comprobamos si tiene el atributo de comunidad autonoma lo añadimos al filtro por el include (ya que así podemos filtrar por los atributos de la asociación)
        if(q.comunidadAutonoma){
            associations[0]['where'] = {
                comunidadAutonomaId: q.comunidadAutonoma
            }
        }

        //Comprobamos si tiene el atributo de usuario lo añadimos al filtro por el include 
        if(q.userName){
            associations[0]['where'] = {
                userName: q.userName
            }
        }

        if(q){
            //Dependiendo de los fistros de busqueda que se pasen lo agregará a la condicion where
            const filter = {}
            
            if(q.titulo){
                filter.titulo = {[Op.like]: `%${q.titulo}%`}
            }

            if(q.tipo){
                filter.tipo = {[Op.like]: `%${q.tipo}%`}
            }

            if(q.match !== "undefined"){
                filter.match = {[Op.like]: q.match}
            }
            

            // if(q.comunidadAutonoma){
            //     filter.propietario = {[Op.like]: `%${q.comunidadAutonoma}%`}
            // }


            search = {
                where: filter
            };
        }

        //Añado los aprametros de orden
        if(order_by && order_direction){
            order.push([order_by,order_direction])
        }

        //Método de transformación que puedo pasar al método de paginación
        // const transform = (records) =>{
        //     return records.map(record =>{
        //         return {
        //             id: record.id, 
        //         }
        //     })
        // }
        const transform = null;

        //Método de paianción en el que le pasas el Modelo, page, limit, search object, order, transform y asociaciones
        const products = await paginate(Producto, page, limit, search, order, transform, associations);

        return res.status(200).send({
            success: true,
            message: 'Lista de productos',
            data: products
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
            },
            include:[
                {
                    association: "propietario",
                    include:{
                        association: "comunidadAutonoma",
                    }
                },
                {
                    association: "tipoProducto",
                    
                }
            ]
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

export const getProductosByUser = async (req, res) => {
    try {
        const { userName } = req.params;
        const productos = await Producto.findAll({
            // where:{
            //     match: false
            // },
            include:[
                {
                    association: "propietario",
                    where:{
                        userName
                    },
                    include:{
                        association: "comunidadAutonoma",
                    }
                },
                {
                    association: "tipoProducto",
                    
                }
            ]
        });

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

export const updateProductoById = async (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion ,tipo} = req.body;

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
            tipo
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



export const uploadImagenes = async (req, res) => {


    try {
        const { idProducto } = req.params;
        const { files } = req;

        const imagenes = await Imagen.findAll({
            where: {
                producto: idProducto
            }
        })


        //Antes elimino aquellas imagenes que tiene guardadas el producto
        Promise.all(imagenes.map(img => fs.unlink(path.join(__dirname, '..', 'uploads', img.url))))
        .then(async() => {
            console.log('All files removed')

            //Eliminamos las relaciones creadas en el modelo Imagen de aquellas que hemos eliminado
            await Imagen.destroy({
                where: {
                    producto: idProducto
                }
            })

            //Creamos tantas imagenes como ficheros pasados (creamos la relacion)
            files.forEach(async file => {
                await Imagen.create({
                    url: file.filename,
                    producto: idProducto
                })
            });
        })
        .catch(err => {
            console.error('Error al eliminar imagenes existentes', err)
            res.status(401).json({
                message: "Error al eliminar imagenes existentes"
            })
        })


        return res.status(200).json({
            message: 'Imagenes creadas correctamente',
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Se produjo un error',
            data: {}
        });
    }
}

export const getImagenes = async (req, res) => {
    try {
        const { id } = req.body;

        console.log(id)
        const imagenes = await Imagen.findAll({
            where:{
                producto: id
            }
        });

        if(!imagenes){
            return res.status(404).json("El producto no tiene imagenes")
        }

        var files = []

        imagenes.forEach( img => {
            files.push(img.url)
        });

        return res.status(200).json(files)

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Se produjo un error',
            data: {}
        });
    }
}

export const getImagenProducto = async (req, res) => {
    try {
        const  { url }  = req.body
        
        let img = path.join(__dirname, '..', 'uploads', url) ;

        if(!img){
            return res.status(404).json("No existe la imagen")
        }

        res.sendFile(img)

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Se produjo un error',
            data: {}
        });
    }
}


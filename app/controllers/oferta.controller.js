const { Oferta } = require('../models')
const { Producto } = require('../models')

const { Op } = require('sequelize')

import { paginate } from '../metodos/paginate';

export const createOferta = async (req,res) =>{
    const { producto1, producto2, user1, user2} = req.body;

    try {
        //Comprobamos que la oferta no exista con ese producto
        let ofertaExiste = await Oferta.findOne({
            where:{
                producto1,
                producto2,
            }
        })

        if(ofertaExiste){
            return res.status(400).json({
                message: 'Oferta ya creada con el producto',
                data: oferta
            })
        }

        let oferta = await Oferta.create({
            producto1,
            producto2,
            user1,
            user2,
            activa: true,
            rechazada: false
        })


        //Comprobamos que no exita otra oferta que apunte a los mismos produtos de forma inversa
        //En ese caso significa que habrán hecho match
        const ofertaExisteContrario = await Oferta.findOne({
            where:{
                activa: true,
                rechazada: false,
                [Op.and]: [{ producto1: oferta.producto2 }, { producto2: oferta.producto1 }] 
            }
        })

        //En el caso de que exista una oferta a la inversa (al que recibe tu producto tambien ha pedido el mismo) siginica que ha hecho match, actualizamos todo
        if(ofertaExisteContrario){
            //Desactivamos aquellas ofertas en las que se tengan los productos
            const ofertasDesactivar = await Oferta.findAll({
                where:{
                    [Op.or]: [{ producto1: oferta.producto1 }, { producto2: oferta.producto1 },
                            { producto1: oferta.producto2 }, { producto2: oferta.producto2 } ] 
                }
            })


            ofertasDesactivar.forEach(async oferta => {
                await oferta.update({
                    activa: false
                })
            });

            //Activamos el match a los productos
            const productosMatch = await Producto.findAll({
                where:{
                    [Op.or]: [{ id: oferta.producto1 }, { id: oferta.producto2 }] 
                }
            })

            productosMatch.forEach(async producto => {
                await producto.update({
                    match: true
                })
            });
        }
  

        if (oferta) {
            return res.status(200).json({
                message: 'Oferta creada con éxito',
                data: oferta
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

export const getOfertas = async (req,res) =>{
}

export const getOfertasByPage = async (req,res) =>{
    try {
        //Cojo los parametros de la peticion
        const { q, page, limit, order_by, order_direction } = req.body;

        let search = {};
        let order = [];

        const associations = [
            {
                association: "productoPide",
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
    
            },
            {
                association: "productoRecibe",
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
            },
            {
                association: "userPide",
            },
            {
                association: "userRecibe",
            }
        
        ]


        if(q){
            //Dependiendo de los fistros de busqueda que se pasen lo agregará a la condicion where
            const filter = {}
            if(q.userRecibe){
                filter.user2 = {[Op.like]: q.userRecibe }
            }

            if(q.userPide){
                filter.user1 = {[Op.like]: q.userPide }
            }

            if(typeof q.activa !== 'undefined'){
                filter.activa = {[Op.is]: q.activa }
            }

            if(typeof q.rechazada !== 'undefined'){
                filter.rechazada = {[Op.is]: q.rechazada }
            }

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
        const ofertas = await paginate(Oferta, page, limit, search, order, transform, associations);

        return res.status(200).send({
            success: true,
            message: 'Lista de Ofertas',
            data: ofertas
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Se produjo un error',
            data: {}
        });
    }
}


export const getOfertabyId = async (req,res) =>{
    
}

export const updateOfertaById = async (req,res) =>{
    
}

export const deleteOfertaById = async (req,res) =>{
    try {
        const { ofertaId } = req.params;
        const deleteRowCount = await Oferta.destroy({
            where: {
                id : ofertaId
            }
        })

        return res.status(200).json({
            message: 'Oferta eliminado correctamente',
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

export const aceptarOferta = async (req,res) =>{
    try {
        const { ofertaId } = req.params;

        //Buscamos el Producto 
        const oferta = await Oferta.findOne({
            where: {
                id: ofertaId
            }
        });

        await oferta.update({
            activa: false
        })

        //Desactivamos aquellas ofertas en las que se tengan los productos
        const ofertasDesactivar = await Oferta.findAll({
            where:{
                [Op.or]: [{ producto1: oferta.producto1 }, { producto2: oferta.producto1 },
                        { producto1: oferta.producto2 }, { producto2: oferta.producto2 } ] 
            }
        })


        ofertasDesactivar.forEach(async oferta => {
            await oferta.update({
                activa: false
            })
        });

        //Activamos el match a los productos
        const productosMatch = await Producto.findAll({
            where:{
                [Op.or]: [{ id: oferta.producto1 }, { id: oferta.producto2 }] 
            }
        })

        productosMatch.forEach(async producto => {
            await producto.update({
                match: true
            })
        });


        return res.status(200).json({
            message: 'Match creado correctamente'
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Se produjo un error',
            data: {}
        });
    }
}


const { User } = require('../models')
const { Producto } = require('../models')
const { Oferta } = require('../models')


const path = require("path")
const fs = require('fs').promises;

export const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findOne({
            where:{
                userName: id
            },

            include:{
                association: "comunidadAutonoma",
            }
        });

        return res.status(200).json({
            data: user
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Se produjo un error',
            data: {}
        });
    }
}

export const updateUser = async (req, res) => {
    const { userName, nombre, apellidos, telefono , correo, comunidadAutonomaId, coordenadas} = req.body;

    try {

        //Buscamos el Producto 
        const usuario = await User.findOne({
            where: {
                userName
            }
        });

        //Lo actualizamos
        usuario.update({
            nombre,
            apellidos,
            telefono,
            correo,
            comunidadAutonomaId,
            coordenadas
        })

        if (usuario) {
            return res.status(200).json({
                message: 'Usuario actualizado correctamente',
                data:  usuario
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

export const getImagenPerfil = async (req, res) => {
    try {
        const { userName } = req.body
        const Usuario = await User.findOne({
            where:{
                userName: userName
            }
        });

        if(!Usuario){
            return res.status(404).json("No existe la imagen")
        }

        let img = path.join(__dirname, '..', 'uploads', Usuario.imgPerfil) ;

    
        res.sendFile(img)

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Se produjo un error',
            data: {}
        });
    }
}



export const uploadImagenPerfil = async (req, res) => {


    try {
        const { userName } = req.params;
        const { file_name } = req;

        const usuario = await User.findOne({
            where: {
                userName
            }
        })

        //Si tiene imagen de perfil que la elimine
        if(usuario.imgPerfil && file_name){
            fs.unlink(path.join(__dirname, '..', 'uploads', usuario.imgPerfil))
            .then(() => {
                console.log('Imagen eliminada')
                //Actualizamos directorio de imagen
                usuario.update({
                    imgPerfil: file_name
                })

            }).catch(err => {
                console.error('Error al eliminar la imagen de perfil', err)
                res.status(401).json({
                    message: "Error al eliminar la imagen de perfil"
                })
            })
        }else{
            //Actualizamos directorio de imagen
            usuario.update({
                imgPerfil: file_name
            })
        }


        return res.status(200).json({
            message: 'Imagen de perfil creada',
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Se produjo un error',
            data: {}
        });
    }
}

export const userStats = async (req, res) => {


    try {
        const { userName } = req.params;
        
    
        var { count } = await Producto.findAndCountAll({
            where:{
                user: userName,
            }
        })

        const countProducts = count;

        var { count } = await Producto.findAndCountAll({
            where:{
                user: userName,
                match: true
            }
        })

        const countMatchs = count

        var { count } = await Oferta.findAndCountAll({
            where:{
                user1: userName,
            }
        })

        const countOfertasPedidas = count

        var { count } = await Oferta.findAndCountAll({
            where:{
                user2: userName,
            }
        })

        const countOfertasRecibidas = count;

        var {count} = await Oferta.findAndCountAll({
            where:{
                user1: userName,
                rechazada: true
            }
        })
        const countOfertasRechazadas = count;

        const stats = {
            numProductos: countProducts,
            numMatchs: countMatchs,
            numOfertasPedidas: countOfertasPedidas,
            numOfertasRecibidas: countOfertasRecibidas,
            numOfertasRezachadas: countOfertasRechazadas
        }

        return res.status(200).json({
            data: stats
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Se produjo un error',
            data: {}
        });
    }
}

export const userMatchs = async (req, res) => {


    try {
        const { userName } = req.params;
        
        var {count} = await Producto.findAndCountAll({
            where:{
                user: userName,
                match: true
            }
        })
        const matchsUser = count;
       
        return res.status(200).json({
            data: matchsUser
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Se produjo un error',
            data: {}
        });
    }
}
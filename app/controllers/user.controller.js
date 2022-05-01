

const { User } = require('../models')
const path = require("path")


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
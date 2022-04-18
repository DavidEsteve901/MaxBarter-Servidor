const { User } = require('../models')

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
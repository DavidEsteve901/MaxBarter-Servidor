const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null,path.join(__dirname, '..', 'uploads'))
    },
    filename: function(req,file,cb){
        const id = req.params.id;
        const ext = file.originalname.split('.').pop()
        const fileName = id + '_imgPerfil' + ext;

        req.file_name = fileName; //aqui estamos seteando un campo en nuestro objeto request
        

        cb(null,fileName);
    }
});

const uploadImgPerfil = multer({storage:storage}).single('img_perfil')

module.exports = uploadImgPerfil;
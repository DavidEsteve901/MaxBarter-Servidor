const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null,path.join(__dirname, '..', 'uploads'))
    },
    filename: function(req,file,cb){
        // const id = req.params.id;

        const ext = file.mimetype.split('/').pop()
        const fileName = Date.now() + '_imgPerfil' + '.' + ext;

        req.file_name = fileName; //aqui estamos seteando un campo en nuestro objeto request
        

        cb(null,fileName);
    }
});

const uploadImgPerfil = multer({storage})

module.exports = uploadImgPerfil;
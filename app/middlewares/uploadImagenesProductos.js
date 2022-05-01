const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null,path.join(__dirname, '..', 'uploads'))
    },
    filename: function(req,file,cb){
        // const id = req.params.idProducto;
        const ext = file.originalname.split('.').pop()
        const fileName =  Date.now() + '_imgProducto' + '.' + ext;


        cb(null,fileName);
    }
});

const uploadImgsProducto = multer({ storage })

module.exports = uploadImgsProducto;
import { Router } from "express";


const router = Router();


//Importamos todos los métodos
import * as productoCtrl from '../controllers/producto.controller'
//Importamos middlewares
import { verifyToken, uploadImgsProducto,verifyUserEdit } from '../middlewares/index'

router.post('/',verifyToken,productoCtrl.createProducto)

router.get('/',verifyToken,productoCtrl.getProductos)

router.post('/page',verifyToken,productoCtrl.getProductosByPage)

router.get('/:id',verifyToken, productoCtrl.getProductobyId)

router.put('/:id',verifyToken,verifyUserEdit, productoCtrl.updateProductoById)

router.delete('/:id',verifyToken,verifyUserEdit, productoCtrl.deleteProductoById)

//Productos por usuario
router.get('/user/:userName', productoCtrl.getProductosByUser)

//Subir imagenes de producto
router.post('/uploadImages/:id',verifyToken,verifyUserEdit, uploadImgsProducto.array('files') ,productoCtrl.uploadImagenes)

//Coger imagenes
router.post('/imagenes', productoCtrl.getImagenes)
router.post('/imagen', productoCtrl.getImagenProducto)



export default router;
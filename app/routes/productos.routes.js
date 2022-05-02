import { Router } from "express";


const router = Router();


//Importamos todos los métodos
import * as productoCtrl from '../controllers/producto.controller'
//Importamos middlewares
import { verifyToken, uploadImgsProducto } from '../middlewares/index'

router.post('/',verifyToken,productoCtrl.createProducto)

router.get('/',verifyToken,productoCtrl.getProductos)

router.post('/page',productoCtrl.getProductosByPage)

router.get('/:id', productoCtrl.getProductobyId)

router.put('/:id', productoCtrl.updateProductoById)

router.delete('/:id', productoCtrl.deleteProductoById)

//Subir imagenes de producto
router.post('/uploadImages/:idProducto',verifyToken, uploadImgsProducto.array('files') ,productoCtrl.uploadImagenes)

//Coger imagenes
router.post('/imagenes',verifyToken, productoCtrl.getImagenes)
router.post('/imagen',verifyToken, productoCtrl.getImagenProducto)




//Ruta que devuelve productos de un usuario
router.get('/user/:userName', productoCtrl.getProductsByUser)



export default router;
import { Router } from "express";
const router = Router();

//Importamos todos los métodos
import * as productoCtrl from '../controllers/producto.controller'
//Importamos middlewares
import { verifyToken } from '../middlewares/index'

router.post('/', productoCtrl.createProducto)

router.get('/',productoCtrl.getProductos)

router.get('/:id', productoCtrl.getProductobyId)

router.put('/:id', productoCtrl.updateProductoById)

router.delete('/:id', productoCtrl.deleteProductoById)

//Ruta que devuelve productos de un usuario
router.get('/user/:userName', productoCtrl.getProductsByUser)



export default router;
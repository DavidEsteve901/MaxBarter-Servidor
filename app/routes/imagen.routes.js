import { Router } from "express";
const router = Router();

//Importamos todos los métodos
import * as ImagenCtrl from '../controllers/imagen.controller'
//Importamos middlewares
import { verifyToken } from '../middlewares/index'



router.post('/',ImagenCtrl.getImagen)




export default router;
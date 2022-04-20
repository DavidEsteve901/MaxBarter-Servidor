import { Router } from "express";
const router = Router();

//Importamos todos los métodos
import * as comunidadAutonomaCtrl from '../controllers/comunidadAutonoma.controller'
//Importamos middlewares
import { verifyToken } from '../middlewares/index'



router.get('/',comunidadAutonomaCtrl.getProductosComunidadesAutonomas)




export default router;
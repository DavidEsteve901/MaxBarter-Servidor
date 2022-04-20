import { Router } from "express";
const router = Router();

//Importamos todos los métodos
import * as tipoCtrl from '../controllers/tipo.controller'
//Importamos middlewares
import { verifyToken } from '../middlewares/index'



router.get('/',tipoCtrl.getTipos)




export default router;
import { Router } from "express";
const router = Router();

//Importamos todos los métodos
import * as userCtrl from '../controllers/user.controller'


router.get('/:id', userCtrl.getUserById)
router.post('/perfil', userCtrl.getImagenPerfil)



export default router;
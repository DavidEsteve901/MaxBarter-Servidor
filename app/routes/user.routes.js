import { Router } from "express";
const router = Router();

//Importamos todos los métodos
import * as userCtrl from '../controllers/user.controller'
import { verifyToken, uploadImgPerfil } from '../middlewares/index'


router.get('/:id', userCtrl.getUserById)
router.post('/perfil', userCtrl.getImagenPerfil)
router.put('/updateUser', userCtrl.updateUser)

//Subir imagen de perfil
router.post('/uploadImage/:userName',verifyToken, uploadImgPerfil.single('files') ,userCtrl.uploadImagenPerfil)

export default router;
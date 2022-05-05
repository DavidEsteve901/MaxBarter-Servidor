import { Router } from "express";
const router = Router();

//Importamos todos los métodos
import * as ofertaCtrl from '../controllers/oferta.controller'
//Importamos middlewares
import { verifyToken } from '../middlewares/index'

router.post('/', ofertaCtrl.createOferta)

router.get('/',verifyToken,ofertaCtrl.getOfertas)

router.get('/',verifyToken,ofertaCtrl.getOfertas)

router.get('/:ofertaId', ofertaCtrl.getOfertabyId)

router.put('/:ofertaId', ofertaCtrl.updateOfertaById)

router.delete('/:ofertaId', ofertaCtrl.deleteOfertaById)


//Coger ofertas por página
router.post('/page', ofertaCtrl.getOfertasByPage)

//Aceptar oferta
router.post('/aceptarOferta/:ofertaId', ofertaCtrl.aceptarOferta)

export default router;
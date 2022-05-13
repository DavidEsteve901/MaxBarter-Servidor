import { Router } from "express";
const router = Router();

//Importamos todos los métodos
import * as ofertaCtrl from '../controllers/oferta.controller'
//Importamos middlewares
import { verifyToken } from '../middlewares/index'

router.post('/',verifyToken, ofertaCtrl.createOferta)

router.get('/',verifyToken,ofertaCtrl.getOfertas)

router.get('/',verifyToken,ofertaCtrl.getOfertas)

router.get('/:ofertaId',verifyToken, ofertaCtrl.getOfertabyId)

router.put('/:ofertaId',verifyToken, ofertaCtrl.updateOfertaById)

router.delete('/:ofertaId',verifyToken, ofertaCtrl.deleteOfertaById)


//Coger ofertas por página
router.post('/page', ofertaCtrl.getOfertasByPage)

//Aceptar oferta
router.post('/aceptarOferta/:ofertaId',verifyToken, ofertaCtrl.aceptarOferta)

//Rechazar oferta
router.post('/rechazarOferta/:ofertaId',verifyToken, ofertaCtrl.rechazarOferta)

export default router;
import { Router } from "express";
const router = Router();

import * as authCtrl from '../controllers/auth.controller'


router.post('/registro',authCtrl.registro)

router.post('/login',authCtrl.login)

router.post('/currentUser',authCtrl.currentUser)

export default router;
import { Router } from 'express';
import { soloLogueados } from '../middlewares/soloLogueados.js';
import { postAUsuarios, postAUsuariosLogin } from '../controllers/api/usuarios.controller.js';
import { autenticacionUserPass } from '../middlewares/passport.js';
import { deleteSesiones } from '../controllers/api/usuariosLogout.controller.js';
import { reestablecerPost } from '../controllers/api/reestablecer.controller.js';

export const userRouter = Router()

userRouter.get('/info', soloLogueados, (req, res, next) => {
    // passport guarda la sesion directamente en ** req.user ** en lugar del campo session de la peticion !
    res.json(req.user)
})


//REGISTRO controlador POST a /API/USUARIOS a la cual hice el fetch en register.js
//sin passport 
userRouter.post('/',postAUsuarios)

//LOGIN controlador POST a /api/usuarios/login a la cual hice el fetch en login.js
//local
userRouter.post('/login', autenticacionUserPass, postAUsuariosLogin);

//LOGOUT
userRouter.delete('/login', deleteSesiones)

//REESTABLECER CONTRASEÑA
userRouter.post('/reestablecer',soloLogueados, reestablecerPost)


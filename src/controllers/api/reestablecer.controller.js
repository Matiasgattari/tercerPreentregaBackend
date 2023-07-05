import { usuariosRepository } from "../../repository/usuariosRepository.js"
import { hashear } from "../../utils/criptografia.js";

export async function reestablecerPost(req,res,next){
    try {
        const usuarioEncontrado = await usuariosRepository.buscarUsuarioPorUsername(req.body.email)
        if(usuarioEncontrado.first_name!==req.body.name ||usuarioEncontrado.last_name!==req.body.last_name  ) {
          throw Error("ERROR_DE_AUTENTICACION")
        }
        usuarioEncontrado.password=hashear(req.body.password)

        const usuarioModificado = await usuariosRepository.actualizarUsuario(usuarioEncontrado._id,usuarioEncontrado)

        req.logger.http("Usuario creado correctamente:" + usuarioModificado)
        // funcion de passport para que ya me deje logueado tambien
        req.login(usuarioModificado, error => {
            if (error) {
                next(error)
            } else {
                //respuesta al servidor
                res.status(201).json(req.user)
            }
        })
            } catch (error) {
                    req.logger.error(error.message)
                    next(error)
                }
}


export function soloLogueados(req, res, next) {
    // acá uso el atajo que me provee passport para ver
    // si hay una sesion inicializada por un usuario
    if (!req.isAuthenticated()) {
        res.json({Error: "Error de Permisos", message: "Usuario no logueado. Para ver esta informacion inicie sesion"})
        return next(new Error('ERROR_DE_PERMISOS'));
    }
    next();
}

export function soloAdmin(req, res, next) {
if(req.user.rol==="Admin") {next ()} else {
    res.json({Error: "Error de Permisos", message: "Solo los Admins pueden ver esta informacion."})
    next(new Error('ERROR_DE_PERMISOS'))
}}


export function sinLoguear(req, res, next) {
   if(req.user) {
        res.json({Error: "Error de Permisos", message: "Usuario logueado. Para cerrar sesion vaya a /api/sessions/current"})
        next(new Error('ERROR_DE_PERMISOS'))} else {
        next ()
    }}
    
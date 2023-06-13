//EXPRESS Y SOCKET.IO
import express from 'express'
import { engine } from 'express-handlebars'
import { Server as SocketIOServer } from 'socket.io'

//VARIABLES DE ENTORNO
import entorno from './config/entorno.js';

//ROUTERS
import { productsRouter } from './routes/productsRouter.js';
import { cartsRouter } from './routes/cartsRouter.js';
import { sessionsRouter } from './routes/sessionsRouter.js';

//CFG
import { PORT } from './config/config.sv.js';

//inicializando mongoose en el sv
import {inicioMongoose} from './database/mongoose.js'

//CONTROLLERS
import { postAUsuarios, postAUsuariosLogin } from './controllers/api/usuarios.controller.js';

//SESSION
import session from './middlewares/session.js';

import { manejadorDeErrores } from './middlewares/manejoDeErroresRest.js';
import { sinLoguear, soloAdmin, soloLogueados } from './middlewares/soloLogueados.js';
import { chatController } from './controllers/web/chat.controller.js';

//PASSPORT
import passport from 'passport';
import { antenticacionPorGithub_CB, autenticacionPorGithub, autenticacionUserPass, passportInitialize } from './middlewares/passport.js';
import { passportSession } from './middlewares/passport.js';

import { mockingController } from './controllers/mocking.controller.js';
import { ticketsController } from './controllers/api/tickets.controller.js';
import { ticketDeleteController, ticketPutController } from './controllers/api/ticket.controller.js';
import { homeController } from './controllers/api/home.controller.js';
import { realTimeProductsController } from './controllers/api/realtimeproducts.controller.js';
import { deleteSesiones } from './controllers/api/usuariosLogout.controller.js';


const app = express()

app.engine('handlebars', engine())
app.set('views', './views') //ruta donde estaran las vistas del handlebars
app.set('view engine', 'handlebars') // que el motor por defecto para manejar las viastas sea handlebars

app.use(session)

app.use(passportInitialize, passportSession) // acá cargo passport en el servidor express como middleware

app.use(express.static('./public')) //permite el uso de los archivos dentro de la carpeta public
app.use(express.static('./static')) //permite el uso de los archivos dentro de la carpeta static

app.use(express.json()) //para poder recibir archivos json desde express


app.use('/api/products',soloLogueados, productsRouter)
app.use('/api/carts',soloLogueados, cartsRouter)
app.use('/api/sessions', sessionsRouter)


const httpServer = app.listen(PORT)
console.log(`Servidor escuchando en puerto ${PORT}`);

export const io = new SocketIOServer(httpServer)


app.get('/', async (req, res) => {
   res.json({"message":"bienvenido al servidor, ingrese a http://localhost:8080/api/sessions/ para poder registrarse o iniciar sesion."})
})



//REGISTRO controlador POST a /API/USUARIOS a la cual hice el fetch en register.js
//sin passport 
app.post('/api/usuarios',postAUsuarios)

//LOGIN controlador POST a /API/USUARIOSLOGIN a la cual hice el fetch en login.js
//local
app.post('/api/usuariosLogin', autenticacionUserPass, postAUsuariosLogin);

// login con github. esto es lo nuevo que se agrega
sessionsRouter.get('/github', autenticacionPorGithub)
//esta es la ruta a la que devuelve la info github luego de autenticar. este al terminar la autenticacion redirige a inicio
sessionsRouter.get('/githubcallback', antenticacionPorGithub_CB, (req, res, next) => { res.redirect('/api/sessions/current') })

//LOGOUT
app.delete('/api/usuariosLogin', deleteSesiones)


//PRODUCTOS
app.get('/realtimeproducts',soloLogueados,soloAdmin, realTimeProductsController)

app.get('/home',soloLogueados, homeController)


//TICKETS 
app.get('/api/tickets',soloAdmin, ticketsController)

app.delete('/api/tickets', soloAdmin, ticketDeleteController)

app.put('/api/tickets/:tid', soloAdmin, ticketPutController)


//CHAT
app.get('/chat', soloLogueados,chatController)

// MOCKING
app.get('/mockingproducts',soloAdmin, mockingController);


app.get('*', (req,res)=>{
    res.redirect('/')
})

//MANEJADOR DE ERRORES
app.use(manejadorDeErrores)



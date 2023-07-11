import express, {Router} from 'express';
import { AdminPremium, soloAdmin, soloLogueados } from '../middlewares/soloLogueados.js';

import { ticketsController } from '../controllers/api/tickets.controller.js';
import { ticketDeleteController, ticketPutController } from '../controllers/api/ticket.controller.js';

export const ticketsRouter = Router()
ticketsRouter.use(express.json())
ticketsRouter.use(express.urlencoded({extended:true}))


//TICKETS 
ticketsRouter.get('/api/tickets',soloAdmin, ticketsController)

ticketsRouter.delete('/api/tickets', soloAdmin, ticketDeleteController)

ticketsRouter.put('/api/tickets/:tid', soloAdmin, ticketPutController)


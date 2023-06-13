import { ticketsRepository } from "../../repository/ticketsRepository.js";
import util from 'node:util'

export async function ticketsController(req, res, next) {
  
    const listado = await ticketsRepository.buscarTickets()
    
    const arrayTickets = [];
    
    listado.forEach(element => {arrayTickets.push(util.inspect(element, false, 10))
    });
    // console.log(producto)
    // console.log(typeof(producto[0]))
    
        res.render('tickets.handlebars', {
            titulo: 'Tickets',
            encabezado: 'Lista de tickets en base de datos',
            arrayTickets:arrayTickets,
            hayTickets: arrayTickets.length > 0
        })
  }
import { ticketsRepository } from "../../repository/ticketsRepository.js"

export async function ticketPutController(req,res,next){
    const tid = req.params.tid
    const ticketEliminado = await ticketsRepository.eliminarTicket(tid)
    res.json(ticketEliminado)
  }

  export async function ticketDeleteController(req,res,next){
    const ticketsEliminado = await ticketsRepository.eliminarTodosTickets()
    res.json(ticketsEliminado)
  }
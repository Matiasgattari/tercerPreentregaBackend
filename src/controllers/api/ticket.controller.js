import { ticketsRepository } from "../../repository/ticketsRepository.js"

export async function ticketPutController(req,res,next){
   try {
    const tid = req.params.tid
    const ticketEliminado = await ticketsRepository.eliminarTicket(tid)
    res.json(ticketEliminado)
   } catch (error) {
    next(error)
   }
  }

  export async function ticketDeleteController(req,res,next){
    try {
      const ticketsEliminado = await ticketsRepository.eliminarTodosTickets()
    res.json(ticketsEliminado)
    } catch (error) {
      next(error)
    }
  }
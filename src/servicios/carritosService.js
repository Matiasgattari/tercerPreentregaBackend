import { Cart } from "../entidades/Carts.js"

class CarritosService {
  async crearCarrito(ticket) {
    const creado = new Cart(ticket)
    return creado
  }
}
export const carritosService = new CarritosService()
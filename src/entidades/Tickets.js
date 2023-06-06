import {randomUUID} from 'crypto'
  
export class Ticket {
    constructor({ email, monto, cart }) {
      try {
         this.code = randomUUID();
         this.date =new Date().toLocaleDateString();
         this.usuario=email;
         this.monto = monto;
         this.cart = cart;
      } catch (error) {
        throw new Error(error.mensaje)
      }
  }
}

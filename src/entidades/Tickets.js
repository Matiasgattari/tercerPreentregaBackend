import {randomUUID} from 'crypto'
  
export class Ticket {
    constructor( {email, monto, cart}) {
      try {
        this.usuario=email;
        this.monto = monto;
        this.cart = cart;
        this.date =new Date().toLocaleDateString();
        this.code = randomUUID();
      } catch (error) {
        throw new Error(error.mensaje)
      }
  }
}



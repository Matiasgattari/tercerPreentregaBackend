import mongoose from 'mongoose';

import assert from 'node:assert'
import { cartManager } from '../../public/dao/CartManager.js'
import { productManager } from '../../public/dao/ProductManager.js';
import { productosService } from '../../src/servicios/productosService.js';


// datos de prueba ----------------------------------------------------------------------------------------------

const testData = {
  _id: "64a787eccb79472dae12d843",
  id: "040cff69-9348-4ee5-af59-2cb925a38e37",
  quantity: 0,
  products: []
}

const testDataCompleto = {
  _id: "64851351024ed2d6a66c5c50",
  id: "5f445c06-d1fa-4a7e-b9bb-d67205d3cc3a",
  quantity: 1,
  products: [
    {
      productID: {
        _id: "648346e20be32cd25d6d5f60",
        title: "charmander",
        description: "numero pokedex 4",
        price: 15000,
        thumbnail: "charmander.jpg",
        stock: 10,
        code: "pokemon salamandra",
        category: "fuego",
        status: true,
        id: "2f6e5c9c-5235-4aa4-bb13-52c10516cd2a"
      },
      quantity: 1,
      _id: "64851393024ed2d6a37c5c7b"
    }
  ]
}


const testDataIncompleto = {
  _id: "64a787eccb79472dae12d843",
  quantity: 0,
  products: []
}


//-----------------------------------------------------------------------------------------------------------------

before(async () => {
  // esto sucede antes de comenzar la primera prueba
  await mongoose.connect('mongodb+srv://daravhel:coderhouse@cluster0.zibn0jy.mongodb.net/test?retryWrites=true&w=majority')
})

    
afterEach(async () => {
  await mongoose.connection.collection('carts').deleteMany({})
})
// beforeEach(async () => {
//   // await algo.....
// })

// afterEach(async () => {
//   // await algo.....
// })

// after(async () => {
//   // esto sucede despues de finalizar la última prueba
//   // await mongoose.connection.dropDatabase() // antes de desconectarme borro la base que usé para las pruebas
//   await mongoose.connection.close()
// })

describe('DAO cartManager', () => {

  before(async () => {
    await mongoose.connection.collection('carts').deleteMany({})
  })

  // describe('crearCarrito', () => {
  //   describe('cuando llamo al create sin enviarle ningun criterio', () => {
  //     it('devuelve el carrito creado agregandole el campo "_id" de mongoose pero sin métodos', async () => {
  //       const creado = await cartManager.crearCarrito()
  //       assert.ok(creado._id, 'debería tener _id')
  //       assert.ok(creado.id, 'debería tener id')
  //       assert.deepStrictEqual(creado.quantity,0, 'la cantidad deberia ser 0')
  //       assert.ok(creado.products, 'debería tener products')
  //     })
  //   })
  // })

  // describe('getCarts', () => {
  //   describe('cuando llamo al getCarts con un criterio vacío', () => {
  //     it('devuelve todos los objetos de la colección sin métodos',async () => {
  //       const creado = await cartManager.crearCarrito()
  //       const pojos = await cartManager.getCarts()
  //   //  assert.deepStrictEqual(pojos.lenght,0, 'deberìa existir al menos 1 carrito')
  //       assert.ok(pojos, 'Muestra la lista de carritos')
  //     })
  //   })
  // })

  // describe('agregarProductoAlCarrito', () => {
    
    
  //   describe('cuando llamo al agregarProductoAlCarrito enviando como parametros un CID  y un PID', () => {
  //     it('Agrega el producto PID al carrito CID y lo devuelve',async () => {
        
  //       const creado = await cartManager.crearCarrito()
  //       const cid = creado._id
        
  //       const productoAgregar = {"title":"prueba1","description":"prueba1","price":16,"thumbnail":"prueba1","stock":15,"code":"prueba1","category":"prueba1","status":true,"owner":"prueba1"}
  //       const productoService = await productosService.crearProducto(productoAgregar)
  //       const producto = await productManager.addProduct(productoService)
  //       const pid = producto._id



  //       const pojos = await cartManager.agregarProductoAlCarrito(cid,pid)
  //       console.log("carrito con producto agregado: ",pojos);
  //       // assert.deepStrictEqual(pojos.lenght,0, 'deberìa existir al menos 1 carrito')
  //       // assert.deepStrictEqual(pojos.products.lenght,0, 'deberìa existir al menos 1 producto en el carrito')
  //       assert.ok(pojos, 'Devuelve el carrito')
  //     })
  //   })
  // })


//----------------------continuar aca-------------------



  // describe('eliminarProducto', () => {
  //   afterEach(async () => {
  //     await mongoose.connection.collection('carts').deleteMany({})
  //   })

  //   describe('cuando llamo al getCarts con un criterio vacío', () => {
  //     it('devuelve todos los objetos de la colección sin métodos',async () => {
  //       const pojos = await cartManager.getCarts()
  //       console.log("lista de carritos: ",pojos);
  //       // assert.deepStrictEqual(pojos.lenght,0, 'deberìa existir al menos 1 carrito')
  //       assert.ok(pojos, 'Muestra la lista de carritos')
  //     })
  //   })
  // })
  // describe('eliminarCarrito', () => {
  //   afterEach(async () => {
  //     await mongoose.connection.collection('carts').deleteMany({})
  //   })

  //   describe('cuando llamo al getCarts con un criterio vacío', () => {
  //     it('devuelve todos los objetos de la colección sin métodos',async () => {
  //       const pojos = await cartManager.getCarts()
  //       console.log("lista de carritos: ",pojos);
  //       // assert.deepStrictEqual(pojos.lenght,0, 'deberìa existir al menos 1 carrito')
  //       assert.ok(pojos, 'Muestra la lista de carritos')
  //     })
  //   })
  // })
  // describe('modificarCarrito', () => {
  //   afterEach(async () => {
  //     await mongoose.connection.collection('carts').deleteMany({})
  //   })

  //   describe('cuando llamo al getCarts con un criterio vacío', () => {
  //     it('devuelve todos los objetos de la colección sin métodos',async () => {
  //       const pojos = await cartManager.getCarts()
  //       console.log("lista de carritos: ",pojos);
  //       // assert.deepStrictEqual(pojos.lenght,0, 'deberìa existir al menos 1 carrito')
  //       assert.ok(pojos, 'Muestra la lista de carritos')
  //     })
  //   })
  // })
  // describe('getCartById', () => {
  //   afterEach(async () => {
  //     await mongoose.connection.collection('carts').deleteMany({})
  //   })

  //   describe('cuando llamo al getCarts con un criterio vacío', () => {
  //     it('devuelve todos los objetos de la colección sin métodos',async () => {
  //       const pojos = await cartManager.getCarts()
  //       console.log("lista de carritos: ",pojos);
  //       // assert.deepStrictEqual(pojos.lenght,0, 'deberìa existir al menos 1 carrito')
  //       assert.ok(pojos, 'Muestra la lista de carritos')
  //     })
  //   })
  // })
  // describe('vaciarCarrito', () => {
  //   afterEach(async () => {
  //     await mongoose.connection.collection('carts').deleteMany({})
  //   })

  //   describe('cuando llamo al getCarts con un criterio vacío', () => {
  //     it('devuelve todos los objetos de la colección sin métodos',async () => {
  //       const pojos = await cartManager.getCarts()
  //       console.log("lista de carritos: ",pojos);
  //       // assert.deepStrictEqual(pojos.lenght,0, 'deberìa existir al menos 1 carrito')
  //       assert.ok(pojos, 'Muestra la lista de carritos')
  //     })
  //   })
  // })
  // describe('modificarUnidadesProcducto', () => {
  //   afterEach(async () => {
  //     await mongoose.connection.collection('carts').deleteMany({})
  //   })

  //   describe('cuando llamo al getCarts con un criterio vacío', () => {
  //     it('devuelve todos los objetos de la colección sin métodos',async () => {
  //       const pojos = await cartManager.getCarts()
  //       console.log("lista de carritos: ",pojos);
  //       // assert.deepStrictEqual(pojos.lenght,0, 'deberìa existir al menos 1 carrito')
  //       assert.ok(pojos, 'Muestra la lista de carritos')
  //     })
  //   })
  // })
})




// after(async () => {
//   // esto sucede luego de finalizar las purebas
//   await mongoose.disconnect()
// })

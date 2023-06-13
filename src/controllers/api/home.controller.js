import { productosRepository } from "../../repository/productosRepository.js";
import util from 'node:util'

export async function homeController(req, res, next) {
  
    const listado1 = await productosRepository.buscarProductos()
    
    const producto = [];
    
    listado1.forEach(element => {producto.push(util.inspect(element, false, 10))
    });
    // console.log(producto)
    // console.log(typeof(producto[0]))

        res.render('home.handlebars', {
            titulo: 'Products',
            encabezado: 'Lista de productos en base de datos',
            producto:listado1,
            hayProductos: producto.length > 0
        })
}
import { productManager } from "../../public/dao/ProductManager.js"
import { productosService } from "../servicios/productosService.js"

class ProductosRepository {
  async crear(title, description, price, thumbnail, stock, code, category,status) {
    const creadoAmano= {title:title, description:description, price:price, thumbnail:thumbnail, stock:stock, code:code, category:category}
    const productoCreadoService =await productosService.crearProducto(creadoAmano)
    const creado = await productManager.addProduct(productoCreadoService)
    return creado
   
  }
  async buscarProductos(){
    const productos = await productManager.getProducts() 
    return productos
    
  }
  async buscarProductoPorId(id){
    const producto = await productManager.getProductById(id)
    return producto
    
  }

  async eliminarProducto(id){
    const producto = await productManager.deleteProduct(id) 
    return "producto eliminado"
    
  }

  async modificarProducto(id,prodModificado){
    const productoModificado = await productManager.updateProduct(id, prodModificado)
    return productoModificado
        
  }
}
export const productosRepository = new ProductosRepository()
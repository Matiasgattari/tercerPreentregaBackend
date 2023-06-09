import {
    randomUUID
} from 'crypto'
import fs from 'fs/promises'

import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { schemaProducts } from './models/schemaProducts.js';
import { productsDB } from './models/schemaProducts.js';
import { cartsDB } from './models/schemaCarts.js';
import { log } from 'console';

import { Persistencia } from './fileSystemProducts.js';


import { toPojo } from '../../src/utils/utilidades.js';
import { productosService } from '../../src/servicios/productosService.js';
import { productosRepository } from '../../src/repository/productosRepository.js';
import { winstonLogger } from '../../src/utils/winstonLogger.js';


//constructor para creacion de productos nuevos
export class Product {
    #title
    #description
    #price
    #thumbnail
    #code
    #stock
    #category
    #id
    #status
    #owner
   
    constructor(
        {title,
        description,
        price,
        thumbnail,
        code,
        stock,
        category,owner}
    ) {
        if (!title||!description||!price||!thumbnail||!code||!stock||!category) {
            throw new Error('Campo-vacio')
          }
          
          if(typeof(price)!=="number"||typeof(stock)!=="number"){
            throw new Error('Campo-con-valor-invalido')
          }
          
          if(typeof(title)!=="string"||typeof(description)!=="string"||typeof(thumbnail)!=="string"||typeof(code)!=="string"||typeof(category)!=="string"){
            throw new Error('Campo-con-valor-invalido')
          }


        this.#title = title;
        this.#description = description;
        this.#price = price;
        this.#thumbnail = thumbnail;
        this.#code = code;
        this.#stock = stock;
        this.#category = category;
        this.#id = randomUUID();
        this.#status = true;
        this.#owner = owner || "Admin";
    }

    async dto() {
        return await {
            title:this.#title,
            description:this.#description,
            price:this.#price,
            thumbnail:this.#thumbnail,
            code:this.#code,
            stock:this.#stock,
            category:this.#category,
            id:this.#id,
            status:this.#status,
            owner:this.#owner
        }
      }
}




export class ProductManager {
    constructor(path) {
        this.products;
        this.path = path;
        this.persistencia =new Persistencia(path)
    }


    async readProducts() {
        const data = await this.persistencia.readTxt()
        this.products = JSON.parse(data);
    }

    async getProducts() {
        try {
            const prodd = await productsDB.find().lean()
            // console.log(toPojo(prodd));
            this.products = toPojo(prodd);
            return this.products
        } catch (error) {
            throw new Error('SERVER-COMUNICATION-ERROR')
        }
    }


    async addProduct(producto) {
        try {
            const productos = await this.getProducts()
            const productFind2 = await productsDB.find({id:producto.id}).lean()
            
            if (productFind2.length>0) {
                // console.log('Ya existe un producto con ese titulo', productFind2);
                throw new Error('Producto-duplicado')
            } else {
                if (producto.title !== undefined && producto.description !== undefined && producto.price !== undefined && producto.stock !== undefined && producto.code !== undefined && producto.category !== undefined) {
            
                    const creado = await productsDB.create(producto)
        
                    // console.log('Producto creado correctamente', toPojo(creado));
                    this.products = this.getProducts()
                    
                    const jsonProducts = JSON.stringify(this.products, null, 2)
                    this.persistencia.saveTxt(jsonProducts)
                    return toPojo(creado)  
            }
        }
        } catch (error) {
            throw new Error('CREACION-FALLIDA')
            
        }

    }


    async getProductById(id) {
        try {
            const IDrecibido = id;
        const jsonProducts =  await this.getProducts()
        
        this.products = jsonProducts

        const productFind = this.products.find((product) => product['_id'] == IDrecibido)

        if (productFind === undefined) {
            // throw new Error('PRODUCT-NOT-FOUND')
            const productoError = {error:'PRODUCT-NOT-FOUND'}
            return productoError
        } else {
            const productoID = await productsDB.findOne({ _id: IDrecibido }).lean()
            return productoID

        }
        } catch (error) {
            throw new Error('NOT-FOUND')
        }

    }
    


    async deleteProduct(id) {
        try {

            const productos = await this.getProducts() //este paso asumo esta de mas
        this.products = productos //este paso asumo esta de mas
        
        await productsDB.deleteOne({ _id: id })

        const productos2 = await this.getProducts() //persistencia luego de hacer el getproducts con mongoose
        this.products = productos2

        const jsonProducts = JSON.stringify(this.products, null, 2)
        await this.persistencia.saveTxt(jsonProducts)

        // return console.log("producto eliminado correctamente");
        return "producto eliminado correctamente"
        }  catch (error) {
            throw new Error('ELIMINACION-FALLIDA')
        }
    }

   async updateProduct(id, prodModificado) {
        try {
        await productsDB.findOneAndUpdate({_id:id},prodModificado)
        const productosActualizados = await productsDB.find().lean()
        this.products = productosActualizados

            //actualizo el filesystem
        const jsonProducts = JSON.stringify(this.products, null, 2)
        await this.persistencia.saveTxt(jsonProducts)

        // console.log("El producto se actualizo con exito", prodModificado);
        winstonLogger.debug("El producto se actualizo con exito" + prodModificado)
        } catch (error) {
                throw new Error('NOT-FOUND')
        }
   }

}


export const productManager = new ProductManager('./productos.txt')

//manager de productos. prueba
// const productManager = new ProductManager('../productos.txt');
// console.log('console log de get products',await productManager.getProducts());

// const productoPrueba = {
//     "_id": "644587ac744b799f44db306b",
//     "title": "beedrill",
//     "description": "descripcion prod 6",
//     "price": 3500,
//     "thumbnail": "url imagen",
//     "stock": 45,
//     "code": "televisor",
//     "category": "bicho veneno",
//     "status": true,
//     "id": "ade0f4d9-716b-4453-tryu-6d5df1564232"
//   }

// await productManager.addProduct(productoPrueba)

// console.log("producto filtrado por ID",await productManager.getProductById('644587ac744b799f44db306b'));

// await productManager.deleteProduct('644587ac744b799f44db306b')

// const prodModif = {
//     "_id": "644587ac744b799f44db306b",
//     "title": "beedrill",
//     "description": "descripcion prod 6",
//     "price": 4500,
//     "thumbnail": "url imagen",
//     "stock": 20,
//     "code": "televisor",
//     "category": "bicho veneno",
//     "status": true,
//     "id": "ade0f4d9-716b-4453-tryu-6d5df1564232"
//   }

// await productManager.updateProduct("644587ac744b799f44db306b",prodModif)



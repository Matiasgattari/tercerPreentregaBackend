import { generarProductos } from "../utils/mocking.js";

export async function mockingController(req, res) {
    const productos = await generarProductos(100);
    res.json(productos);
 }
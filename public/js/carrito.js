console.log("hola desde el carrito");

const botonComprar = document.getElementById("botonComprarCarrito")
botonComprar?.addEventListener("click", ()=>{
    // @ts-ignore
    const valorInputCarritoID = document.getElementById("inputCarritoID")?.value
    window.location.href = `http://localhost:8080/api/carts/${valorInputCarritoID}/purchase/`
})

const botonEliminarProducto = document.getElementById("botonEliminarProducto")
botonEliminarProducto?.addEventListener("click", ()=>{
    
    // @ts-ignore
    const valorInputCarritoID = document.getElementById("inputCarritoID")?.value

    
    // @ts-ignore
    const valorInputProductoID = document.getElementById("inputProductoEliminar")?.value
    // console.log(valorInput);

    window.location.href = `http://localhost:8080/api/carts/${valorInputCarritoID}/productoEliminar/${valorInputProductoID}/`


})

const botonVaciarCarrito = document.getElementById("botonVaciarCarrito")
botonVaciarCarrito?.addEventListener("click", ()=>{
    // console.log("soy un boton de vaciar carrito");
    // @ts-ignore
    const valorInputCarritoID = document.getElementById("inputCarritoID")?.value
    window.location.href = `http://localhost:8080/api/carts/${valorInputCarritoID}/vaciarCarrito/`
    
})


const comprarCarrito = document.getElementById("botonComprarCarrito")
comprarCarrito?.addEventListener("click",()=>{
     // @ts-ignore
    const valorInputCarritoID = document.getElementById("inputCarritoID")?.value
    window.location.href = `http://localhost:8080/api/carts/${valorInputCarritoID}/purchase/`
})

const volverAProductosCarrito = document.getElementById("volverAProductosCarrito")
volverAProductosCarrito?.addEventListener("click",()=>{
    console.log("volviendo a productos");
    // @ts-ignore
    const rol = document.getElementById("inputRol").value
    if(rol==="Admin"){window.location.href = `http://localhost:8080/api/products/admin/`} else {window.location.href = `http://localhost:8080/home/`}
})

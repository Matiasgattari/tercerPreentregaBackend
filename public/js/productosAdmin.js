// console.log("hola, desde productos admin");

const cargarBTNAdmin = document.getElementById('botonCargarAdmin')
// console.log("cargarBTN", cargarBTN);

const eliminarBTNAdmin = document.getElementById('botonEliminarAdmin')
// console.log("eliminarBTN", eliminarBTN);
const eliminarIDAdmin = document.getElementById('eliminarIDAdmin')

const tituloAdmin = document.getElementById('tituloAdmin')
// console.log("titulo", titulo);
const descripcionAdmin = document.getElementById('descripcionAdmin')
// console.log("descripcion", descripcion);
const precioAdmin = document.getElementById('precioAdmin')
// console.log("precio", precio);
const urlIMGAdmin = document.getElementById('urlIMGAdmin')
// console.log("urlIMG", urlIMG);
const stockAdmin = document.getElementById('stockAdmin')
// console.log("stock", stock);
const codigoAdmin = document.getElementById('codigoAdmin')
// console.log("codigo", codigo);
const categoriaAdmin = document.getElementById('categoriaAdmin')
const statusTrueAdmin = document.getElementById('statusAdmin')
// console.log("categoria", categoria);


//doy funcionalidad al boton de eliminar producto 
eliminarBTNAdmin?.addEventListener("click",async (e)=>{
    e.preventDefault()
   // @ts-ignore
    const idEliminar = eliminarIDAdmin?.value
    // console.log(idEliminar);
    
    const response = await fetch('/api/products/admin/' + idEliminar, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('ticket-NOT-FOUND');
      }
      
      const productoEliminado = await response.json();
              
    if (response.ok) {
      location.reload()
    }

})

//doy funcionalidad al boton de cargar productos
// @ts-ignore
cargarBTNAdmin?.addEventListener("click",async (e)=>{
    e.preventDefault()
    // @ts-ignore
    const valorTitulo= tituloAdmin?.value
    // @ts-ignore
    const valorDescripcion= descripcionAdmin?.value
    // @ts-ignore
    const valorPrecio= parseInt(precioAdmin?.value)
    // @ts-ignore
    const valorUrlIMG= urlIMGAdmin?.value
    // @ts-ignore
    const valorStock= parseInt(stockAdmin?.value)
    // @ts-ignore
    const valorCodigo= codigoAdmin?.value
    // @ts-ignore
    const valorCategoria= categoriaAdmin?.value
    // @ts-ignore
    const valorStatus= statusTrueAdmin?.value || true

    const productoAgregar = {"title":valorTitulo,"description":valorDescripcion,"price":valorPrecio,"thumbnail":valorUrlIMG,"stock":valorStock,"code":valorCodigo,"category":valorCategoria,"status":valorStatus}
    console.log(productoAgregar);


    const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },body:JSON.stringify(productoAgregar)
      });
      
      if (!response.ok) {
        throw new Error('ticket-NOT-FOUND');
      }
      
      const productoAgregado = await response.json();
              
    if (response.ok) {
      location.reload()
    }

})


const formularioAdmin = document.getElementById('formulario')
if(formularioAdmin){
    formularioAdmin.addEventListener('submit', e=>{
        e.preventDefault()
    })
}


const botonVerProducto = document.getElementById("botonProductoVer")
botonVerProducto?.addEventListener("click",async(e)=>{
    e.preventDefault()

    // @ts-ignore
    const valorIDVer = document.getElementById("inputProductoVer").value
    window.location.href = `http://localhost:8080/api/products/${valorIDVer}/`

})

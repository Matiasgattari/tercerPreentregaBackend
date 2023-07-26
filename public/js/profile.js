console.log('desde js profile');

const boton_logout = document.getElementById('btn_logout')
if (boton_logout) {
    boton_logout.addEventListener('click', async (e) => {
      e.preventDefault()
  
      const { status } = await fetch('/api/usuarios/login', {
        method: 'DELETE'
      })
  
      if (status === 200) {

        const url = window.location.origin; //obtiene la URL actual
        const url2 = url + `/api/sessions/login` //agrega el string al final
        window.location.href = url2
      } else {
        console.log('[logout] estado inesperado: ' + status)
      }
  
    })
  }


  const boton_reestablecer_contrasenia = document.getElementById("btn_reestablecer_profile")

boton_reestablecer_contrasenia?.addEventListener("click", (e)=>{
  e.preventDefault()

  const url = window.location.origin; //obtiene la URL actual
  const url2 = url + `/api/sessions/reestablecer` //agrega el string al final
  window.location.href = url2
})


const botonCambiarTipoUsuario = document.getElementById("btn_cambiar_usuario")
botonCambiarTipoUsuario?.addEventListener("click",()=>{
  console.log("click para cambiar tipo usuario")
})


const botonCargarJson = document.getElementById("btn_cargar_JSON")
// Usar el evento DOMContentLoaded para ejecutar el script cuando el documento esté listo
botonCargarJson?.addEventListener('click', function() {
  
    const url = window.location.origin; //obtiene la URL actual
    const url2 = url + `/api/usuarios/premium/documents/` //agrega el string al final
    window.location.href = url2
  })
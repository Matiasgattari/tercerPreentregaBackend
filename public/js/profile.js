console.log('desde js profile');

const boton_logout = document.getElementById('btn_logout')
if (boton_logout) {
    boton_logout.addEventListener('click', async (e) => {
      e.preventDefault()
  
      const { status } = await fetch('/api/usuarios/login', {
        method: 'DELETE'
      })
  
      if (status === 200) {
        window.location.href = 'http://localhost:8080/api/sessions/login'
      } else {
        console.log('[logout] estado inesperado: ' + status)
      }
  
    })
  }


  const boton_reestablecer_contrasenia = document.getElementById("btn_reestablecer_profile")

boton_reestablecer_contrasenia?.addEventListener("click", (e)=>{
  e.preventDefault()
  window.location.href = 'http://localhost:8080/api/sessions/reestablecer'
})


const botonCambiarTipoUsuario = document.getElementById("btn_cambiar_usuario")
botonCambiarTipoUsuario?.addEventListener("click",()=>{
  console.log("click para cambiar tipo usuario")
})
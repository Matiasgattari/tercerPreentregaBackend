// console.log("hola desde reestablecer");


const btnReestablecerSubmit = document.getElementById("btn_reestablecer_submit")
btnReestablecerSubmit?.addEventListener("click",async (e)=>{
    e.preventDefault()
    console.log("Soy un boton de submit en reestablecer")

    // @ts-ignore
    const emailReestablecer = document.getElementById("input_reestablecer_email")?.value
    // @ts-ignore
    const nameReestablecer = document.getElementById("input_reestablecer_name")?.value
    // @ts-ignore
    const lastNameReestablecer = document.getElementById("input_reestablecer_last_name")?.value
    // @ts-ignore
    const passwordReestablecer = document.getElementById("input_reestablecer_password")?.value
    // @ts-ignore
    const passwordConfirmReestablecer = document.getElementById("input_reestablecer_password_confirm")?.value
    console.log(emailReestablecer,nameReestablecer,lastNameReestablecer,passwordReestablecer,passwordConfirmReestablecer);

if(passwordReestablecer!==passwordConfirmReestablecer) {
    console.log("las contraseñas no coinciden")
    // @ts-ignore
    Swal.fire({
        title: "Las contraseñas no coinciden"   
    })
}else{
    const datosUsuario = {email:emailReestablecer,name:nameReestablecer,last_name:lastNameReestablecer,password:passwordReestablecer}

    const response = await fetch('/api/usuarios/reestablecer', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosUsuario)
      });
      
      if (!response.ok) {
if(response.status===504) {
    // @ts-ignore
    Swal.fire({
        // title: "Ups... Intente nuevamente"   
        title: `Las contraseñas no pueden ser identicas`   
    }).then(()=>{
        window.location.href = 'http://localhost:8080/api/sessions/reestablecer'
    })  } else {
        // @ts-ignore
        Swal.fire({
            // title: "Ups... Intente nuevamente"   
            title: `Error de credenciales, verifique bien los datos`   
        }).then(()=>{
            window.location.href = 'http://localhost:8080/api/sessions/reestablecer'
    })
}
        // @ts-ignore
        // Swal.fire({
        //     // title: "Ups... Intente nuevamente"   
        //     title: `${response.statusText}`   
        // }).then(()=>{
        //     window.location.href = 'http://localhost:8080/api/sessions/reestablecer'
        // })
      }
      
      // @ts-ignore
      // @ts-ignore
      const usuarioCreado = await response.json();
   
    if (response.ok) {
        
        // @ts-ignore
        Swal.fire({
            title: "Contraseña reestablecida con exito"   
        }).then(()=>{
            window.location.href = 'http://localhost:8080/api/sessions/current'
        })
    }
}})
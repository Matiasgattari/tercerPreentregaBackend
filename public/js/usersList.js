
// const botonSubmitModificarRol = document.getElementById("botonSubmitModificarRol")
// botonSubmitModificarRol?.addEventListener("click",async(e)=>{
//     e.preventDefault()

//     const imputUsernameModificar = document.getElementById("inputIdUsuarioModificar")
//     // @ts-ignore
//     const valorImputUsernameModificar = imputUsernameModificar?.value

// console.log(valorImputUsernameModificar);

//     const response = await fetch('/api/users/', {
//         method: 'PUT',
//         headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//         },
//         body:valorImputUsernameModificar
//     })
    
//     if (!response.ok) {
//         throw new Error('NOT-FOUND');
//     }
    
//     const rolModificadoRespuesta = await response.json();
            
//     if (response.ok) {
//     // location.reload()
//     console.log(rolModificadoRespuesta);
//     }
// })






const botonSubmitModificarRol = document.getElementById("botonSubmitModificarRol");
botonSubmitModificarRol?.addEventListener("click", async (e) => {
    e.preventDefault();

    const inputUsernameModificar = document.getElementById("inputIdUsuarioModificar");
    // @ts-ignore
    const valorInputUsernameModificar = inputUsernameModificar?.value;

    // console.log(valorInputUsernameModificar);

    try {
        const response = await fetch(`/api/users/`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: valorInputUsernameModificar }) // Assuming you want to send the username in the body
        });

        if (!response.ok) {
            throw new Error('NOT-FOUND');
        }

        const rolModificadoRespuesta = await response.json();

        if (response.ok) {
            // location.reload()
            console.log(rolModificadoRespuesta);
        }
    } catch (error) {
        alert(error)
        location.reload()
        // console.error(error);
    }
});

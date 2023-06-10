
const botonEliminarTodosTickets = document.getElementById("botonEliminarTodosTickets")
botonEliminarTodosTickets?.addEventListener("click",async()=>{
    // @ts-ignore
    const inputIDTicket = document.getElementById("inputIDTicket").value
    // const idTicket = inputIDTicket
    
    const response = await fetch('/api/tickets', {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        // body: JSON.stringify(idTicket)
      });
      
      if (!response.ok) {
        throw new Error('USER-NOT-FOUND');
      }
      
      const ticketsVacios = await response.json();
              
    if (response.ok) {
      window.location.href = 'http://localhost:8080/api/tickets'
    }
        
})
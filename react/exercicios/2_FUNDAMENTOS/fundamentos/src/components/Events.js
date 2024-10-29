const Events = () => {

   const handleMyevents = (event) =>{
    console.log('Evento ativado!')
   }

   const renderSomthing = (x) => {
    if(x) {
        return <h1>Renderizando isso</h1>
    } else {
        return <h1>tbm  Renderizando isso</h1>

    }
}

    return (
        <div>
           <div>
            <button onClick={handleMyevents}>Clique aqui</button>
            <div>
                <button onClick={() => {
                    console.log('clicou')
                }}>Clique aqui tbm</button>
            </div> 
           </div>
          {renderSomthing(true)}
          {renderSomthing(false)}
        </div>
    )
}

export default Events
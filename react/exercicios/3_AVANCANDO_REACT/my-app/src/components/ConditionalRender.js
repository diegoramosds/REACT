import {useState} from 'react'

const ConditionalRender = () => {
    const [x] = useState(true)

    const [name, setName] = useState("jo")

  return (
    <div>
        <h1>exibido?</h1>
        {x &&  <p>Se x for true, sim?</p>}
        {!x &&  <p>Agora é falso?</p>}
        <h1>If ternario</h1>
        {name === "joao" ? (
            <div>
                <p>O nome é {name}</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado</p>
            </div>
        )}
        <button onClick={() => setName("joao")}>Clica</button>
    </div>
  )
}

export default ConditionalRender
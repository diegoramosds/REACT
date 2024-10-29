import { useState } from "react";


const HookUseState = () => {
    //1-useState
 let userName = "joão";

 const [name, setName] = useState("Diego");
 const [age, setAge] = useState(18);

 const changeNames = () => {
    userName = "Pedro"
    setName("Felipe")
 }

 const handleSubmit = (e) => {
    e.preventDefault()
    console.log(age)
     
 }

  return (
    <div>
        {/* 1-useState */}
        <h2>useState</h2>
        <p>Variavel: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames}>Mudar nomes</button>
        {/* 2-useState e inputs */}
        <p>Digite a sua idade:</p>
        <form onSubmit={handleSubmit}>
            <input type="text" value={age}  onChange={(e) => setAge(e.target.value)} />
            <button type="submit">Enviar</button>
        </form>
        <p>Você tem {age} anos!</p>
        <hr />
    </div>
  )
}

export default HookUseState
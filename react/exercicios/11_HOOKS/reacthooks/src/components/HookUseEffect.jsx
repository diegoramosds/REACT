import { useEffect, useState } from "react"


const HookUseEffect = () => {
    // 1- useEffect sem dependências
    useEffect(() => {
        console.log("executando")
    })

    const [number, setNumber]  = useState(1);

    const changeSomething = () => {
        setNumber(number  + 1)
    }

    // 2- useEffect com dependências vazio
    useEffect(() => {
        console.log("executando apenas 1 vez")
    }, [])



    // 3- useEffect com item no array de dependências
    const [anotherNumber, setAnotherNumber]  = useState(0);
    useEffect(() => {
      if (anotherNumber  >  0) {
         console.log("executando apenas quando anothernumber muda")
      }
  }, [anotherNumber])



    // 4- cleanup do useEffect 
    useEffect(() => {
      // const  timer = setTimeout(() => {
      //   console.log("hello")

      //   setAnotherNumber(anotherNumber +  1);

      //   return () => clearTimeout(timer);
      // }, 2000);
  
      //    console.log("executando apenas quando anothernumber muda")
  }, [anotherNumber])

 
  return (
    <div>
    <h2>HookUseEffect</h2>
    <p>Number: {number}</p>
    <button onClick={changeSomething}>Executar</button>
    <p>Another  Number:{anotherNumber}</p>
    <button onClick={() => setAnotherNumber(anotherNumber  + 1)}>Mudar anothernumber:</button>

    <hr />
    </div>
  )
}

export default HookUseEffect
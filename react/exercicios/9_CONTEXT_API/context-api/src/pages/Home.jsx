// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"

//4- refatorando hook
import useCounterContext from "../hooks/useCounterContext"

import ChangeCounter from "../components/ChangeCounter"

//5- context complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";




const Home = () => {
  const {counter} = useCounterContext();

  //5- context complexo
  const {color, dispatch} = useTitleColorContext();

  //6 - alterando context mais complexo
  const setTitleColor = (color) => {
    dispatch({ type: color})
  }
  

  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>O valor do context é:{counter}</p>
      <ChangeCounter/>
      <div >
         <button onClick={() => setTitleColor("RED")}>Cor Vermelha</button>
         </div>
      <div >
        <button onClick={() => setTitleColor("BLUE")}>Cor azul</button>
        </div>
    </div>
  )
}

export default Home
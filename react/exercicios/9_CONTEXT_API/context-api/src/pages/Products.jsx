// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"

//4-
import useCounterContext from "../hooks/useCounterContext"



const Products = () => {
  const { counter } = useCounterContext();
  return (
    <div>
      <h1>Products</h1>
      <p>O valor do context é: {counter}</p>
    </div>
  )
}

export default Products
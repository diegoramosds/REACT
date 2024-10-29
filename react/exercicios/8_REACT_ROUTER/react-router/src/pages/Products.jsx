import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

import "./Products.css"


const Products = () => {
    //4- ROTA DINAMICA
    const { id } = useParams();

    //5- dado individaual
  const url = "http://localhost:3000/products/" + id;

  const {data: product, loading, error} = useFetch(url)


  return (
    <> 
    <p>ID do produto {id}</p>
    {error && <p>Ocorreu um erro...</p>}
    {loading && <p>Carregando dados...</p>}
    {product && (
        <div>
            <h1>{product.name} </h1>
            <p>R$ {product.price}</p>
            {/* 6- nested routes */}
            <Link to={`/products/${product.id}/info`}> Mais informações</Link>
        </div>
    )}
    </>
  )
}

export default Products
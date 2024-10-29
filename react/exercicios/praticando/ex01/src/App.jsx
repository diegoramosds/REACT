import {useState, useEffect } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid';


import data from '../data/db.json'

function App() {
  const [products, setProducts] = useState(data.products)

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")




  const handleDelete = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);

    localStorage.setItem("products", JSON.stringify(updatedProducts))
  }


const handleSubmit = (e) => {
  e.preventDefault();

  if (!name.trim() || !price.trim()) {
    alert('Por favor, preencha todos os campos.');
    return;
  }
  
  const newProduct = {
    id: uuidv4(),
    name,
    price: parseFloat(price),
  };

  setProducts([...products, newProduct])

  localStorage.setItem("products", JSON.stringify([...products, newProduct]))

  setName("")
  setPrice("")
}

 useEffect(() => {
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
       setProducts(JSON.parse(savedProducts))
    }
   
  },[])


  return (
    <>
      <div>
       <h1>Hello world</h1>
       <ul>
       {products.length > 0 ? (
        products.map(product  =>(
       <li key={product.id}>
          {product.name} -  {product.price}
          <button onClick={() => handleDelete(product.id)}>Excluir</button>
        </li>
      )) 
    ) : (
        <li>Não há produtos disponíveis</li>
      )}

        </ul>
        <div className='add-product'>
      <form>
        <label>Name:
        <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      

        <label>Price:
        <input type="text" name='name' value={price} onChange={(e) => setPrice(e.target.value)}/>
        </label>
        

       <input onClick={(e) => handleSubmit(e)} type="submit" value="Adicionar" />
       </form>
       </div>
      </div>
    </>
  );
}

export default App

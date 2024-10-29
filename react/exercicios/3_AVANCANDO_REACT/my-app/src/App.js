import { useState } from 'react';
import './App.css';
import City from './assets/city.jpg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import EventoFunction from './components/EventoFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';


function App() {
  // const name = "matheus"
  const [userName] = useState("maria")

  const cars = [
    {id: 1 , brand: "Ferrari", color: "Amarela", newCar: true, km:0},
    {id: 2 , brand: "Ford", color: "Rosa", newCar: false, km:40000},
    {id: 3 , brand: "Kia", color: "branco", newCar: false, km:878}
  ]

  function showMessage() {
    console.log("evento")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const details = [
    {name: "maria", idade:17, profissão:"Estudante"},
    {name: "otavio", idade:47, profissão:"motorista"},
    {name: "joão", idade:24, profissão:"barbeiro"}
  ]

  return (
    <div className="App">
      <h1>Seção 3</h1>
      {/* Img em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        {/* Img em assets */}
      </div>
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName}/>
      {/* destructuring */}
      <CarDetails brand="VW" km={100000}  color="Azul" newCar={false} />

      <CarDetails brand="Ford" km={45000}  color="branco" newCar={true} />
      <CarDetails brand="Honda" km={0}  color="Vermelho" newCar={false} />

      {cars.map((car) => (
        <CarDetails 
        key={car.id} 
        brand={car.brand} 
        color={car.color} 
        km={car.km} 
        newCar={car.newCar} />
      ))}
      {/* fragment */}
      <Fragment propFragment="teste" />
      {/* children */}
      <Container myValue="teste">
        <p>E esse o conteudo</p>
      </Container>
      {/* excutar função */}
      <EventoFunction myFunction={showMessage}/>
      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>

      {/* exercicio */}
      {details.map((detail , index) => (
        <UserDetails 
        key={index}
        name={detail.name}
        idade={detail.idade}
        profissao={detail.profissão}
        />
        ))}
    
    </div>
  );
}

export default App;
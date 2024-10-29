
import './App.css';
import CarsDetails from './components/CarsDetails';

function App() {

  const cars = [
    {id: 1, brand:"fiat",color:"blue", km:87000},
    {id: 2, brand:"VW", color:"red", km:12000},
    {id: 3, brand:"mercedez", color:"gold", km:878}
  ]
   


  return (
    <div className="App">
     <h1>Desafio</h1>
     {/* desafio */}

     {cars.map((car) => (
      <CarsDetails 
      key={car.id}
      brand={car.brand}
      color={car.color}
      km={car.km}
      />
    ))}

  
    </div>
  );
}

export default App;

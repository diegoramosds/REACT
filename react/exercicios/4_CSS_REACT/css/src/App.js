
import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 15;
  const [name, setName] = useState("joão")

  const redTitle = false;
  
  return (
    <div className="App">
      {/* css global */}
      <h1>React com css</h1>
      {/* css componente */}
      <MyComponent/>
      <p>parágrafo do App.js</p>
      {/* inline css*/}
      <p style={{color:"blue", padding: "25px", borderTop: "2px solid red"}}>Elemento de forma inline</p>
      <p style={{color:"red", padding: "25px", borderTop: "2px solid blue"}}>Elemento de forma inline</p>
      {/* css inline dinâmico*/}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>

      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>

      <h2 style={name=== "joão" ? ({color: "green", backgroundColor: "#000"}) : (null)}>Teste nome</h2>
      {/* classe dinâmica*/}
      <h2 className={redTitle ? "red-title" :"title"}>Este titulo vai ter classe dinâmica</h2>

      {/* css modules */}
      <Title />

    </div>
  );
}

export default App;

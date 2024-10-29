import { useState } from 'react'

import './App.css'

function App() {
  const [display, setDisplay] = useState("")
  const [history, setHistory] = useState([]);

  const handleNumber = (number) => {
    setDisplay(display + number)
  }

  const handleOperator = (operator) => {
    if(operator === "C") {
      setDisplay("")
    }
    else if(operator === "←") {
      setDisplay(display.slice(0,-1))
    }

    else if(operator === "=") {
      try {
        const result = eval(display).toString();
        setDisplay(result);
        setHistory([...history, { expression: display, result }]);
      } catch (error) {
        setDisplay("Erro");
      } 
    } else {
      setDisplay(display + operator)
    }  
  }

  return (
    <>
    
      <div className='calculator'>
      <h1>Calculadora</h1>
        <input type="text" value={display} readOnly/>
        <div className='buttons'>
        <table>
          <tbody>
          <tr>
            <td onClick={() => handleOperator("C")}><button>C</button></td>
            <td onClick={() => handleOperator("-")}><button>/-</button></td>
            <td onClick={() => handleOperator("/")}><button>/</button></td>
            <td onClick={() => handleOperator("←")}><button>←</button></td>
          </tr>
          <tr>
            <td onClick={() => handleNumber(7)}><button>7</button></td>
            <td onClick={() => handleNumber(8)}><button>8</button></td>
            <td onClick={() => handleNumber(9)}><button>9</button></td>
            <td onClick={() => handleOperator("*")}><button>*</button></td>
          </tr>
          <tr>
            <td onClick={() => handleNumber(4)}><button>4</button></td>
            <td onClick={() => handleNumber(5)}><button>5</button></td>
            <td onClick={() => handleNumber(6)}><button>6</button></td>
            <td onClick={() => handleOperator("-")}><button>-</button></td>
          </tr>
          <tr>
            <td onClick={() => handleNumber(1)}><button>1</button></td>
            <td onClick={() => handleNumber(2)}><button>2</button></td>
            <td onClick={() => handleNumber(3)}><button>3</button></td>
            <td onClick={() => handleOperator("+")}><button>+</button></td>
          </tr>
          <tr>
            <td onClick={() => handleNumber(0)}><button>0</button></td>
            <td onClick={() => handleOperator(".")}><button>.</button></td>
            <td onClick={() => handleOperator("%")}><button>%</button></td>
            <td onClick={() => handleOperator("=")}><button>=</button></td>
          </tr>
          </tbody>
        </table>
        </div>
        <h2>Historico de calculos</h2>
    <ul>
      {history.map((item, i) => (
    <li key={i}>{item.expression} = {item.result}</li>
  ))}

    </ul>
      </div>
    </>
  )
}

export default App

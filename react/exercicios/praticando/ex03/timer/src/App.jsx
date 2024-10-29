import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isRunning, setIsRunning] = useState(true);


  useEffect(() => {
    let interval

    if (isRunning) {
     interval = setInterval(() => {
      
        setTime(new Date().toLocaleTimeString());
      
    }, 1000); }

    else {
      setTime(1);
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      
    }, 1000); }

    return () => clearInterval(interval)
  }, [isRunning]);

const handleToggleRunning =  () => {
  setIsRunning(!isRunning);
}
  return (
    <>
      <div className='timer'>
        <h1>{time}</h1>
      </div>
      <button onClick={handleToggleRunning}>{isRunning ? "Contador" : "Relogio"}</button>
    </>
  )
}
export default App

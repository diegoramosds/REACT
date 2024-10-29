import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [nameTask, setNameTask] = useState("");
  const [date, setDate] = useState("");
  

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));

      setTasks(savedTasks);
    

  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!nameTask || !date) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
  
    setTasks([...tasks, {nameTask, date}])
    
    const newTask =  { nameTask, date };

    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));

    setNameTask("")
    setDate("")   
  }


  const  handleDelete = (index) => {
    const updatedProducts = tasks.filter((_, i) => i !== index);
    setTasks(updatedProducts);

    localStorage.setItem("tasks", JSON.stringify(updatedProducts))
    setNameTask("")
    setDate("")   
  }
  

  return (
    <>
      <div className='tasks'>
       <h1>Lista tarefas</h1>
          <ul>
           {tasks.map((item, i) => (
            <li key={i}>
              Tarefa:{item.nameTask} - Dia/Horário: {item.date}
              <button onClick={() => handleDelete(i)}>Deletar</button>
            </li>
           ))}
          </ul>
      
       <form onSubmit={handleSubmit}>
        <label>
          Tarefa:
          <input onChange={(e)=> setNameTask(e.target.value)} value={nameTask} type="text"/>
        </label>
        <label>
          Dia/Horário:
          <input onChange={(e)=> setDate(e.target.value)} value={date} type="text"/>
        </label>
        <button type='submit'>Enviar</button>

       </form>
      </div>
    </>
  )
}
export default App

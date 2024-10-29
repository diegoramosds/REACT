
import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h1>Forms</h1>
      <MyForm user={{name: "joão", email:"jj@gmail.com", bio: "Sou desenvolvedor", role:"admin"}}/>
    </div>
  );
}

export default App;

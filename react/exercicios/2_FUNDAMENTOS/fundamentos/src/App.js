import FistComponents from './components/FirstComponent';

import MyComponent from './components/MyComponent';
import './App.css';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';
import Challenge from './components/Challenge';


function App() {
  return (
    <div className="App">
      <h1>Fundamentos</h1>
      <FistComponents/> 
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;

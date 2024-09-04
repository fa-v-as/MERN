import './App.css';
import Faculty from './components/Faculty';
import Home from './components/Home';
import Register from './components/Register';
import Style from './components/Style';

const name="Shekeb"

function App() {
  return (
    <div className="App">
      <Home name={name} />
      <Style color={{color:"red"}} style={{backgroundColor:"grey"}}/>
      <Register student={{name:"Shekeeb",age:22}}/>
      <Faculty teacher={["Favas",23]}/>
    </div>
  );
}

export default App;

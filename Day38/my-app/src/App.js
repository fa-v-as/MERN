import './App.css';
import About from './Components/About';
import Counter from "./Components/Counter"
import Footer from './Components/Footer';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Counter/>
      <Home/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;

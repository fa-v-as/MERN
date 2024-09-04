import { Fragment } from 'react';
import './App.css';
import Gallery from './components/Gallery';
import { Header1, Header2 } from './components/Header';
import Home from './components/Home';
import About from './components/About';

const name="Web Castle"

function App() {
  return (
    <div className="App">
      <h1>Zoople Technologies</h1>
      <h2>{name}</h2>
      <Home/>
      <Gallery data={name}/>
      <Header1/>
      <Header2/>
      <Fragment/>
      <About/>
    </div>
  );
}

export default App;

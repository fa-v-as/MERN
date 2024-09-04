import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {

  const [state,setState]=useState('')

  let component;
  if(state==='About')
    component=<About/>
    
  if(state==='Contact')
    component=<Contact/>

  return (
    <div className="App">
        <button onClick={()=>setState('About')}>About</button>
        <button onClick={()=>setState('Contact')}>Contact</button>
        {component}
    </div>
  );
}

export default App;

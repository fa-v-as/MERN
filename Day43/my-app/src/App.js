import React from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
      <div className="App">
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>

        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
  );
}

export default App;

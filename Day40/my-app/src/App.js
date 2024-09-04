import './App.css';
import Home from './Components/Home';

function App() {
  const obj = [
    {
      name: "Shekeeb",
      age: 22,
      place: "Malappuram"
    },
    {
      name: "Favas",
      age: 23,
      place: "Palakkad"
    }
  ]
  return (
    <div className="App">
      {
        obj.map((value) => {
          return (
            <div>
           <Home name={value.name} age={value.age} place={value.place}/>
           </div>
          )
        })
      }
    </div>
  );
}

export default App;

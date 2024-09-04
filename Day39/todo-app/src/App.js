import React, { useState } from 'react';
import './App.css';

function App() {

  const [toDo, setTodo] = useState(''); 
  const [toDos, setTodos] = useState([]); 
  
  const addTask = () => {
    if (toDo.trim()) {
      setTodos([...toDos, { text: toDo, completed: false }]);
      setTodo(''); 
    }
  };

  const deleteTask = (index) => {
    const newTodos = toDos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const completeTask = (index) => {
    const newTodos = toDos.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Have A Nice Day 🌝 ☕</h2>
      </div>
      <div className="input">
        <input type="text"  placeholder="🖊️ Add item..."  value={toDo}  onChange={(e) => setTodo(e.target.value)} />
        <i className="fas fa-plus" onClick={addTask}></i> 
      </div>
      <div className="todos">
        {toDos.map((task, index) => (
          <div className="todo" key={index}>
            <div className="left">
              <input type="checkbox" checked={task.completed} onChange={() => completeTask(index)} />
              <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </p>
            </div>
            <div className="right">
              <i className="fas fa-times" onClick={() => deleteTask(index)}></i> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

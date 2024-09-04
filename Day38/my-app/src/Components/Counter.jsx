import React, { useState } from 'react'
import Counter1 from './Counter1'

const Counter = () => {

    //Number
    const [count,setCount]=useState(0)

    function Add(){
        setCount(count+1)
    }

    function Substract(){
        setCount(count-1)
    }

  return (
    <div>
        <button onClick={Add}>Add</button>
        <button onClick={Substract}>Substract</button>
        <h1>Counter:{count}</h1>
        <Counter1 title="Counter" counter={count}/>
    </div>
  )
}


export default Counter
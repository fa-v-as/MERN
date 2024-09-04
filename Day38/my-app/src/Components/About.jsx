import React, { useState } from 'react'

const About = () => {

    //String & Array
    const [state1,setState1]=useState("")
    const [state2,setState2]=useState([])

    const Add=()=>{
        setState2([...state2,state1])
    }

  return (
    <div>
        <input type="text" value={state1} onChange={(event)=>{
            setState1(event.target.value)}}/>
        <button onClick={Add}>ADD</button>
        {
          state2.map((data)=>(
            <li>{data}</li>
          ))
        }
    </div>
  )
}

export default About
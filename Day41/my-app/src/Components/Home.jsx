import React, { useState } from 'react'
import Counter from './Counter'

const Home = () => {

    const [state,setState]=useState(false)

  return (
    <div>
        <button onClick={()=>{setState(!state)}}>{state?"OFF":"ON"}</button>
        <h1>{state?<Counter/>:null}</h1>
    </div>
  )
}

export default Home
import React, { useState } from 'react'
import "../StyleSheets/Home.css"

const Home = () => {

    //Boolean
    const [state,setState]=useState(false)

    const Change=()=>{
        setState(!state)
    }

  return (
    <div>
        <button onClick={Change}>{state?"SHOW":"HIDE"}</button>
        <h1 className={state?"style":""}>Welcome Shekeeb</h1>
    </div>
  )
}

export default Home
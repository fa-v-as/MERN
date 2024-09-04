import React, { useState } from 'react'

const Footer = () => {

    //Object
    const [state,setState]=useState({
        Name:"Shekeeb",
        Age:"22",
        Place:"Malappuram"
    })
  return (
    <div>
        <h2>Name:{state.Name}</h2>
        <h2>Age:{state.Age}</h2>
        <h2>Place:{state.Place}</h2>
        <button onClick={(e)=>{setState({...state,Age:"2 Weeks"})}}>OTD in 2001</button>
    </div>
  )
}

export default Footer
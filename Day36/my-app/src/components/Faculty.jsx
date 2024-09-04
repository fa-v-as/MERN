import React from 'react'

const Faculty = (props) => {
  return (
    //Array
    <div>
        <h1><u>Teachers</u></h1>
        <h2>Name:{props.teacher[0]}</h2>
        <h2>Age:{props.teacher[1]}</h2>
    </div>
  )
}

export default Faculty
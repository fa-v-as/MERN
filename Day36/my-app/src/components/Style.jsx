import React from 'react'

const Style = (props) => {
  return (
    //Style
    <div >
        <h1 style={props.color}>Hello World</h1>
        <h2 style={props.style}>Welcome Home</h2>
    </div>
  )
}

export default Style
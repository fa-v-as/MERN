import React from 'react'

const Register = (props) => {
  return (
     //objects
    <div>
        <h1><u>Students</u></h1>
        <h2>Name:{props.student["name"]}</h2>
        <h2>Age:{props.student.age}</h2>
    </div>
  )
}

export default Register
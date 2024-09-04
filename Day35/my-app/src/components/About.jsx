import React from 'react'

var age=19
const About = () => {
  return (
    <div>
        <p>3+4</p>
        <p>{3+4}</p>
        <p>{age > 18 ? "Eligible" : "Not eligible"}</p>
    </div>
  )
}

export default About
import React from 'react'

const Home = (props) => {
  return (
    <div>
        <h1>Name:{props.name}</h1>
        <h1>Age:{props.age}</h1>
        <h1>Place:{props.place}</h1>
        <hr />
    </div>
  )
}

export default Home
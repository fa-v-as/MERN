import React from 'react'
import "../styleSheets/Gallery.css"

const Gallery = (props) => {
  return (
    <div>
        <h1 className='gallery'>Gallery Page</h1>
        <h2>Welcome to {props.data}</h2>
    </div>
  )
}

export default Gallery
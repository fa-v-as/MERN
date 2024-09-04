import React, { useEffect, useState } from 'react'

const Counter = () => {

  const [count, setCount] = useState(0)
  const [count1,setCount1]=useState(0)

  useEffect(() => {
    console.log("Mounting")
    console.log("Updating Count1 "+count)
    console.log("Updating Count2 "+count1)
    return()=>{
      console.log("Unmounting "+count)
    }
  },[count])

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <h3>Counter 1:{count}</h3>

      <button onClick={() => setCount1(count1 + 1)}>Add</button>
      <h3>Counter 2:{count1}</h3>
    </div>
  )
}

export default Counter
import React, { useState } from 'react'

const UseCallback = () => {
const [counter,setCounter] = useState(0)
function addCounter(){
      setCounter((value)=> value + 1)
}

  return (
    
    <div>
    <h1>Counter - {counter}</h1>
{/* <Todos/> */}
<button onClick={addCounter}>+</button>
    </div>
  )
}

export default UseCallback
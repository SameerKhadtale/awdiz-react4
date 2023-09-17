import { useState } from "react"

function Counter(){
const [counter, setCounter]= useState(0)
function Update(){
    setCounter((prevValue) => prevValue+1)
}
return(
    <div>
       <h1>Counter - {counter}</h1>
        <button onClick={Update}>+</button>
    </div>
)
}
export default Counter
import { useState } from "react"

const Counter = () => {


const [counter, setCounter]= useState(0);
console.log(counter,"counter")
// function Update(){
    // setCounter((prevValue) => prevValue+1)
}
return(
    <div>
       <h1>Counter - {counter}</h1>
        <button onClick={()=>setCounter(1)}>Add Counter</button>
    </div>
)
export default Counter;
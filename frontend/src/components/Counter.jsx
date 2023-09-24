import { useState } from "react"

const Counter = () => {



const [counter, setCounter]= useState(false);
console.log(counter,"counter")

const [liked, setLiked]= useState(false);
console.log(liked,"liked")

// function Update(){
    // setCounter((prevValue) => prevValue+1)
function multiTask(){
    setLiked((flag)=>!flag)
    setCounter((prevValue)=>prevValue+1)
}
return (
    <div>
       <h1>Counter - {counter}</h1>
        <button onClick={()=> setCounter((prevValue) => prevValue+1)}><b>+</b></button>
        <button onClick={()=> setCounter((prevValue) => prevValue-1)}><b>-</b></button>
        <button onClick={()=> setCounter((prevValue) => prevValue+10)}><b>+ 10 Counter</b></button>
        <button onClick={()=> setCounter((prevValue) => prevValue-10)}><b>- 10 Counter</b></button>
        <button onClick={()=> setLiked((value) => true)}><b>Like ?</b></button>
        <button onClick={(multiTask)}><b>Like Counter</b></button>
    </div>
)
}
export default Counter;
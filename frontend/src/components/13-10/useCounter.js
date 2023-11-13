import { useState } from "react";

function useCounter(){
    const[counter, setCounter] = useState(initialState) 

function Increment(){
setCounter((value)=> value + 1)
}    
function Decrement(){
setCounter((value)=> value - 1)
}
function Reset(){ 
setCounter(0)
}
    
return [counter, Increment, Decrement]
}
export default useCounter;
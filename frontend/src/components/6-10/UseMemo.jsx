import React, { useMemo, useState } from "react";

const UseMemo = () => {
const [counter,setCounter]=useState(0);
const [todos,setTodos]=useState([]);

function addTodo(){
setTodos([...todos,"New todo"])
}

// const lenghtyCalculation=calculate(counter);

const lenghtyCalculation= useMemo(() => calculate(counter),[counter]);

    return (
        <div>
        <h1><b>Lenghty Calculation -{lenghtyCalculation}</b></h1>
        <h1>Counter - {counter}</h1>
        <button onClick={()=>setCounter((value)=> value+1)}><b>+</b></button>
         <button onClick={addTodo}>Add Todo</button>
        {todos.map((todo)=>(
   <div>{todo}</div>
        ))}

        </div>
        
    )
}

const calculate = (counter) => {
    console.log("Calculating....")
    for (var i = 0; i < 100000; i++) {
        counter += 1
    }
    return counter;
}
export default UseMemo
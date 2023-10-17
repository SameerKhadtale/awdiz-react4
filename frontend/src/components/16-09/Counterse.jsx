import React from 'react'
import {useEffect, useState} from 'react'


const Counterse = () => {
    const[counter,setCounter]=useState(0);
    function UpdateCounter(){
        setCounter((prevValue)=>prevValue + 1);
    }



    useEffect(()=>{
        // alert("Component Rendered..")
        if (counter == 10){
          alert("HII")
        }
    }, [counter])
  return (
    <div>
        <h1><b>Counter - {counter}</b></h1>
        <button onClick={UpdateCounter}><b>+</b></button>
        <butoon>Switch</butoon>
     </div>
  )
}

export default Counterse
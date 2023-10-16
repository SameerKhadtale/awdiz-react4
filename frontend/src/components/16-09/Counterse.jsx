import React from 'react'
import {useEffect, useState} from 'react'


const Counterse = () => {
    const[counter,setCounter]=useState(0);
    function UpdateCounter(){
        setCounter((prevValue)=>prevValue + 1);
    }



    useEffect(()=>{
        alert("")
    })
  return (
    <div>
        Counter - {counter}
     </div>
  )
}

export default Counterse
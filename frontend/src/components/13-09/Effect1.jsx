import { useEffect } from "react"
import React{useEffect, useState} from 'react'

const Effect1 =()=>{

       const[counter,setCounter]
       
       useEffect(()=>{
        console.log("Rendered..")
       })


    return(
        <div>
         <h1>Effect1</h1>
        </div>
    ) 
}

export default Effect1
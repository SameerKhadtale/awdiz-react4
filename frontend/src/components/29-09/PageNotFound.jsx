import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
// import React from 'react';

const PageNotFound = () =>{
const navigate = useNavigate()
const[timer, CountTimer] = useState(5)
let countInterval 
function CountDown(){
    countInterval = setInterval(()=>{
        CountTimer((value)=>value - 1)
        if (timer === 0){
            navigate("/")
        }
    }, 1000)
}
useEffect(()=>{
CountDown()
return()=>{
    clearInterval(countInterval)
}
})
return (
    <div>
<h1>Page not found, redirecting you to HomePage in {timer} sec..</h1>
  </div>
)
}

export default PageNotFound

// import React, {useEffect} from 'react';
// import { useNavigate } from 'react-router-dom';

// const PageNotFound = () =>{

// const router = useNavigate();
// useEffect(() =>{
//     setTimeout(()=>{
//         router('/')
//     }, 5000);
// },[])
// return (
//     <div>
// <h1>Page not found, redirecting you to HomePage in 5 sec..</h1>
// <button onClick={()=>router('/')}>Go To Home</button>
//   </div>
// )
// }

// export default PageNotFound
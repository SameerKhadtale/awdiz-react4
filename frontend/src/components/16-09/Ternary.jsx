import React from 'react'

const Ternary = ({isUserLoggedIn, setIsLoggedIn}) => {
  return (
    <div>
        <h1>Ternary Operator</h1>{isUserLoggedIn ? 
        <h1 onClick={()=>setIsLoggedIn((prevValue) => !prevValue)}>Welcome..</h1> 
        : 
        <button onClick={()=>setIsLoggedIn((prevValue) => !prevValue)}><b>Please Login..</b></button>}
    </div>
  )
}

export default Ternary
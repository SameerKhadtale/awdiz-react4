import React from 'react'

const Ternary = ({isUserLoggedIn}) => {
  return (
    <div>
        <h1>Ternary Operator</h1>
        {isUserLoggedIn ? <h1>Welcome..</h1> : <h1>Please Login..</h1>}
    </div>
  )
}

export default Ternary
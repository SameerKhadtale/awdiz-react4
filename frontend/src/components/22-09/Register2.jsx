import React, { useState } from 'react'

const Register2 = () => {

  const[userData,setUserData]= useState({name :"",email : "",passowrd : ""})

// console.log(userData,"userdata")
  const handleChange = (event) =>{
console.log(event.target.value)
  }
  return (
    <div>
        <b>Register2</b>
        <form>
          <label>Name : </label><br></br>
          <input type='text' onChange={handleChange}/><br/>
          <label>E-mail : </label><br></br>
          <input type='e-mail' onChange={handleChange}/><br/>
          <label>Password : </label><br></br>
          <input type='password' onChange={handleChange}/><br/>
          <input type='submit'/> 
        </form>
    </div>
  )
}

export default Register2
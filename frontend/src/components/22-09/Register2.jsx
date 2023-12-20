import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'



const Register2 = () => {

  const[userData,setUserData]= useState({name :"",email : "",passowrd : ""})

// console.log(userData,"userdata")
  const handleChange = (event) =>{
console.log(event.target.value)
  }
  return (
    <div>
        <b>Register</b>
        <form onSubmit={sendDataToBackend}>
          <label>Name : </label><br/>
          <input name='name' type='text' onChange={handleChange}/><br/>
          <label>E-mail : </label><br></br>
          <input name='e-mail' type='e-mail' onChange={handleChange}/><br/>
          <label>Password : </label><br></br>
          <input name='password' type='password' onChange={handleChange}/><br/>
          <input type='submit' value="Register here"/><br/> 
        </form>
    </div>
  )
}

export default Register2
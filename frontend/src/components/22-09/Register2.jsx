import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import api from '../helpers/AxiosConfig';

const Register2 = () => {
const[userData,setUserData]= useState({name :"",email : "",passowrd : ""});
const router = useNavigate();
// console.log(userData,"userdata")
  
const handleChange = (event) => {
// console.log(event.target.value ,"value", event.taarget.name, "name")
setUserData({...userData, [event.target.name]: event.target.value})
  }
  
  const sendDataToBackend = async(event)=>{
event.preventDefault();
// alert("Data submitted to backend..")
  if(userData.name && userData.email && userData.password) {
if (userData.passowrd.length >=8) {
try{
const response = await api.post("auth/register",{userData});
//const response = {data :{success : true}};
if(response.data.success) {
toast.success("Registration Successfull..")
setUserData({ name : "", email : "", password : ""})
router("/login")
}else{
throw new Error("Something went wrong..")
}
 } catch(error){
    toast.error(error?.message)
    console.log(error, "error here")
}
} else{
  alert("Password must be 8 digits..")
  }
} else {
  alert("All fields are mandatory..")
  }
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
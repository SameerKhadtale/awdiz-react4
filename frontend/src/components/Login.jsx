import { useNavigate } from 'react-router-dom';
import api from './helpers/AxiosConfig';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import {AuthContext} from './Context/AuthContext';


function Login() {
    const [userData, setUserData] = useState({ email: "", password: "" });
    const router = useNavigate();
    const { Login } = useContext(AuthContext)
    // console.log(userData,"userdata")

    const handleChange = (event) => {
        // console.log(event.target.value, "value", event.target.name, "name")
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const sendDataToBackend = async (event) => {
        event.preventDefault();
        // alert("Data submitted to backend..")
        if (userData.email && userData.password) {
            if (userData.password.length >= 8) {
                try {
                    const response = await api.post("/auth/login", { userData });
                    // const response = { data: { success: true } };
                    if (response.data.success) {
                        localStorage.setItem("my-token", JSON.stringify(response.data.token))
                        Login(response.data.user);
                        // console.log(response.data, "response data")
                        toast.success("Login successfull.")
                        setUserData({ email: "", password: "" })
                        router("/")
                    } else {
                        throw new Error("Something went wrong..")
                    }
                } catch (error) {
                    toast.error(error?.response.data.message)
                    console.log(error, "error here")
                }
            } else {
                alert("Password must be 8 digit.")
            }
        } else {
            alert("Please fill the all values..")
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={sendDataToBackend}>
                <label>Email :</label><br />
                <input name='email' type='email' onChange={handleChange} /> <br />
                <label>Password :</label><br />
                <input name='password' type='password' onChange={handleChange} /> <br />
                <input type='submit' value="Login" /> <br />
            </form>
        </div>
    )
}

export default Login;






// import { useNavigate } from "react-router-dom";

// const[userData,setUserData]= useState({email : "",passowrd : ""});
// const router = useNavigate();
// // console.log(userData,"userdata")
  
// const handleChange = (event) => {
// // console.log(event.target.value ,"value", event.taarget.name, "name")
// setUserData({...userData, [event.target.name]: event.target.value})
//   }
  
//   const sendDataToBackend = async(event)=>{
// event.preventDefault();
// alert("Data submitted to backend..")
//   if( userData.email && userData.password) {
// if (userData.passowrd.length >=8) {
// try{
// const response = await api.post("auth/login",{userData});
// //const response = {data :{success : true}};
// if(response.data.success) {
// toast.success("Login Successfull..")
// setUserData({ email : "", password : ""})
// router("/")
// }else{
// throw new Error("Something went wrong..")
// }
//  } catch(error){
//     toast.error(error?.message)
//     console.log(error, "error here")
// }
// } else{
//   alert("Password must be 8 digits..")
//   }
// } else {
//   alert("All fields are mandatory..")
//   }
// }
  
//   return (
//     <div>
//         <b>Login</b>
//         <form onSubmit={sendDataToBackend}>
//           <label>E-mail : </label><br></br>
//           <input name='e-mail' type='e-mail' onChange={handleChange}/><br/>
//           <label>Password : </label><br></br>
//           <input name='password' type='password' onChange={handleChange}/><br/>
//           <input type='submit' value="Register here"/><br/> 
//         </form>
//     </div>
//   )
// }
// export default Login;
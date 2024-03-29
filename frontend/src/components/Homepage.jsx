import { useContext } from "react";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";
// import {MyContext} from "./Context/AuthContext"


function Homepage(){
    const {state,Logout} = useContext(AuthContext);
    console.log(state, "state")

    const router= useNavigate();

    function routerToLogin(){
        router('/login')
    }
    return(
        <div>
            <h1>Hello Everyone Sameer Here</h1>
            <h1>User : {state?.user?.name}</h1>
             <h1>Counter : {state.counter}</h1>
            {/* <button onClick={()=>dispatch({type: "INCREMENT"})}><b> UP +</b></button>
            <button onClick={()=>dispatch({type: "DECREMENT"})}><b> DOWN -</b></button>
            <button onClick={()=>dispatch({type: "RESET"})}><b>Reset</b></button><br/>
            <a href="/Login">LoginPage Reload</a> */}

            <button onClick={routerToLogin}><b>Login Page</b></button>
            <button onClick={() =>router('/register')}><b>Register Page</b></button><br></br>
            <button onClick={()=> toast.error("Clicked")}><b>Click for toast error</b></button>
            <button onClick={()=> toast.success("Clicked")}><b>Click for toast success</b></button>
            <button onClick={Logout}><b>Logout ?</b></button>
        
        </div>
        )
}
export default Homepage;
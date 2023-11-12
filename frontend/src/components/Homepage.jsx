import { useContext } from "react";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import { MyContext } from "./Contexts/GlobalContext";


function Homepage(){
    const {state,dispatch} = useContext(MyContext);
    const router=useNavigate();

function routerToLogin(){

}
    const route= useNavigate()
    function routerToLogin(){
        route('/Login')
    }
    return(
        <div>
            <h1>Hello Everyone Sameer Here</h1>
            <h1>Counter : {state.counter}</h1>
            <button onClick={()=>dispatch({type: "INCREMENT"})}><b>+</b></button>
            {/* <a href="/Login">LoginPage Reload</a> */}
            <button onClick={routerToLogin}><b>Login Page</b></button>
            <button onClick={() =>router('/Register')}><b>Register Page</b></button><br></br>
            <button onClick={()=> toast.failure("Clicked")}>Click for toast failure</button>
            <button onClick={()=> toast.success("Clicked")}>Click for toast success</button>
            <button onClick={()=>router('/Profile')}><b>Profile</b></button>
            <button onClick={()=>router('/Counter')}><b>Counter</b></button><br></br>
            <button onClick={()=>router('/Effect1')}><b>Effect 1</b></button>
            <button onClick={()=>router('/Effect2')}><b>Effect 2</b></button>
            <button onClick={()=>router('/Effect3')}><b>Effect 3</b></button>
            <button onClick={()=>router('/Effect4')}><b>Effect 4</b></button>
            
        
        </div>
    )
}
export default Homepage
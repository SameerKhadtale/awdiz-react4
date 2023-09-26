import {useNavigate} from "react-router-dom";


function Homepage(){
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
            {/* <a href="/Login">LoginPage Reload</a> */}
            <button onClick={routerToLogin}><b>Login Page</b></button>
            <button onClick={() =>router('/Register')}><b>Register Page</b></button><br></br>
            <button><b>Profile</b></button>
            <button><b>Counter</b></button><br></br>
            <button><b>Effect 1</b></button>
            <button><b>Effect 2</b></button>
            <button><b>Effect 3</b></button>
            <button><b>Effect 4</b></button>
        
        </div>
    )
}
export default Homepage
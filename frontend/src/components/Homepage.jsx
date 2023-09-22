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
            <button onClick={() =>router('/Register')}><b>Register Page</b></button>
        </div>
    )
}
export default Homepage
import { useNavigate } from "react-router-dom";

function Login(){
const router=useNavigate();

    function goToHome(){
        router ('/')
    }
    return (
        <div>
          <h1>Login</h1>
          {/* <a href="/">Go HomePage with Reload</a> */}
          <button onClick={goToHome}><b>Homepage</b></button>
        </div>
    )
   
}
export default Login;
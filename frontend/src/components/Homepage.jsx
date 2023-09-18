import { useNavigate } from "react-router-dom";

function Homepage(){
    const route= useNavigate()
    function counter(){
        route('/counter')
    }
    return(
        <div>
            <h1>Hello Everyone Sameer Here</h1>
            <button><b>Go To Login</b></button>
        </div>
    )
}
export default Homepage
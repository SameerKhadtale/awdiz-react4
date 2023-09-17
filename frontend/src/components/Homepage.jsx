import { useNavigate } from "react-router-dom";

function Homepage(){
    const route= useNavigate()
    function counter(){
        route('/counter')
    }
    return(
        <div>
            <h1>Hello Everyone</h1>
            <button onClick={counter}>Go To Counter</button>
        </div>
    )
}
export default Homepage
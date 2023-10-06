import React from 'react'
import { useNavigate } from 'react-router-dom'

const Params = () => {
    const router=useNavigate();
return (

<div>
<button onClick={()=>router("/singleProduct/12345")}>Go to Single Product</button>
</div>

)
}

export default Params
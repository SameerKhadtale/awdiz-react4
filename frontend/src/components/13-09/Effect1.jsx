import React, { useEffect, useState } from "react"

const Effect1 = () => {

    const [counter, setCounter] = useState(0)
    useEffect(() => { 
        alert("Rendered..") 
    })

    return (
        <div>
            <h1>Counter- {counter}</h1>
            <button onClick={() => setCounter((prevValue) => prevValue + 1)} ><b>ADD +</b></button>
        </div>
    )
}

export default Effect1
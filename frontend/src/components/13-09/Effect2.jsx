import React, { useEffect, useState } from "react"

const Effect2 = () => {

    const [counter, setCounter] = useState(0)
    useEffect(() => { 
        alert("Rendered 2nd time..") 
        // it'll execute nonly frst time page is loaded
    }, [])

    return (
        <div>
            <h1>Counter- {counter}</h1>
            <button onClick={() => setCounter((prevValue) => prevValue + 1)} ><b>ADD +</b></button>
        </div>
    )
}

export default Effect2
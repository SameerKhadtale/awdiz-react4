import React, { useEffect, useState } from "react"

const Effect4 = () => {

    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)
    useEffect(() => { 
        alert("Rendered") 
    }, [counter1, counter2]);

    return (
        <div>
            <h1>Counter 1- {counter1}</h1>
            <button onClick={() => setCounter1((prevValue) => prevValue + 1)} ><b>ADD +</b></button>

            <h1>Counter 2- {counter2}</h1>
            <button onClick={() => setCounter2((prevValue) => prevValue + 1)} ><b>ADD +</b></button>
        
        </div>
    )
}

export default Effect4
import React from 'react'

const Mapping = ({names}) => {
    console.log(names)
  return (
    <div>
        <h1>Mapping</h1>
        {names.map((name)=>(<div>{name}</div>))}
    </div>
  )
}

export default Mapping
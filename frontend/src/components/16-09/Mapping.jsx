import React from 'react'

const Mapping = ({ names }) => {
  console.log(names)
  return (
    <div>
    {/* //   <h1>Mapping</h1>
    //   {names.map((name, i) => ( */}
    {/* //   <div>
    //     <h3>Day of the Week - {name}</h3>
    //     <h2>Students ID  -{i}</h2>
    //   </div>))} */}


    {names.map((name, i) => (
        <div> key {i}
          <h1>{name}</h1>
        </div>
      ))}
    </div >
  )
}

export default Mapping
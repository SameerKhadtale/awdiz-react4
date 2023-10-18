import React from 'react'

const ChildrenProp = () => {
  return (
    <>
      <Sameer>This is 'h1'</Sameer>
      <Button>Message</Button>
    </>
  )
}

const Button = ({children})=>{
return (
<button>{children}</button>
)
}

const Sameer = ({children}) =>{
  return (
    <>
    <h1>{children}</h1>
    <h1>{children}</h1>
    <h1>{children}</h1>
    </>
  )
}
export default ChildrenProp
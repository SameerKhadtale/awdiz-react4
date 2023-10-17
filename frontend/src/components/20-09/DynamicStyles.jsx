import React, { useState } from 'react'

const DynamicStyles = () => {
  const [isButtonActive, setIsButtonActive]= useState(false);

  const handleButtonClick =()=>{
  setIsButtonActive(!isButtonActive)
  }

  const buttonClassName = isButtonActive ? 'Active-Button' : 'Inactive-Button'
  console.log(buttonClassName, "buttonClassName")
  return (
    <div>
      <h1>DynamicStyles</h1>
      <button></button>
    </div>
  )
}

export default DynamicStyles
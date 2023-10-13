import React from 'react'
import styled from 'styled-components'

const StyledComponents = () => {
    const Button = styled.button`
    color : blue;
    background-color : brown;
    `
  return (
    <div>
    <Button style={{backgroundColor : "yellow"}}>Styled Components</Button>
    </div>
  )
}

export default StyledComponents
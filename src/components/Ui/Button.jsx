import React from 'react'
import "./Button.css"

const Button = ({name, style}) => {
  return (
    <div>
      <button style={style}>{name}</button>
    </div>
  )
}

export default Button
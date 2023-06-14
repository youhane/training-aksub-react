import React from 'react'
import "./Input.css"

function Input({label, text}) {
  return (
    <div className='input'>
        <label>{label}: </label>
        <p>{text}</p>
    </div>
  )
}

export default Input
import React from 'react'
import '../css/button.css'
const Button = ({ text,onClick }) => {


    return (
        <button onClick={onClick} className="btn">{text}</button>
    )
}

export default Button
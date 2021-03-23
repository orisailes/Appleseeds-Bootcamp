import React from 'react'
import ReactDOM from 'react-dom'
import './spinner.css'

const spinner = (props) => {
    return (
        <div className={props.className}>
            <div className="dot-1"></div>
            <div className="dot-2"></div>
            <div className="dot-3"></div>
        </div>
    )
}
export default spinner
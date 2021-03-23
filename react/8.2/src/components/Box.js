import React from 'react'
import ReactDOM from 'react-dom'
import './box.css'

const box = ({color,height,width}) => {
    return(
        <div className="box" style={{background:`${color}`,height:`${height}`,width:`${width}`}}></div>
    )
}
export default box
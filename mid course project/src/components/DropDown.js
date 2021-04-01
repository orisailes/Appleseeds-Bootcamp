import React, { useState } from 'react';
import './css/dropdown.css'

function DD({ title, keys }) {
    const [isListOpen, setListOpen] = useState(false)
    const [myTitle, setTitle] = useState(title)
    const handleChoose = (e) => {
        setTitle(e.target.innerText);
        setListOpen(prev => !prev);
    }
    return (
        <div className="dd">
            <div className="dd-header">
                <button onClick={() => { setListOpen(prev => !prev) }} className="dd-btn">{myTitle} {isListOpen ? <i className="fas fa-angle-up"></i> : <i className="fas fa-angle-down fa-1x"></i>}</button>
            </div>
            <button onClick={handleChoose} className={`dd-btn ${!isListOpen && "hide"}`}>הכל</button>
            <button onClick={handleChoose} className={`dd-btn ${!isListOpen && "hide"}`}>{keys[0]}</button>
            <button onClick={handleChoose} className={`dd-btn ${!isListOpen && "hide"}`}>{keys[1]}</button>
            <button onClick={handleChoose} className={`dd-btn ${!isListOpen && "hide"}`}>{keys[2]}</button>
            <button onClick={handleChoose} className={`dd-btn ${!isListOpen && "hide"}`}>{keys[3]}</button>
            <button onClick={handleChoose} className={`dd-btn ${!isListOpen && "hide"}`}>{keys[4]}</button>
        </div>
    )

}

export default DD;
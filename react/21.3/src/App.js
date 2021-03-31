import React, { useEffect, useRef, useState } from 'react'
import Pic1 from './img/pic1.JPG'
import Pic2 from './img/pic2.JPG'
function App() {

    const redImg = useRef()
    const purpleImg = useRef()

    const handleHover = (e) => {
        e.target.style.filter = 'hue-rotate(45deg) saturate(3.3) grayscale(50%)';
        e.target.style.webkitFilter = 'hue-rotate(45deg) saturate(3.3) grayscale(50%)';
    }
    const handleLeave = (e) => {
        e.target.style.filter = '';
        e.target.style.webkitFilter = '';
    }

    return (
        <div>
            <img
                id="red"
                ref={redImg}
                style={{ height: "50vh", }}
                src={Pic1}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
                alt="red" />
            <img
                id="purple"
                ref={purpleImg}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
                style={{ height: "30vh", width: "20vw" }}
                src={Pic2}
                alt="purple" />
        </div>
    )

}

export default App;
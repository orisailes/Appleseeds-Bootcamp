import React, { useState } from 'react'

function Textarea({ text, maxLength }) {
    let [isReadMore,setReadMore] = useState(false)
    const limitedText = text.split(' ').slice(0,40).join(' ');
    const handleClick = () => {
        setReadMore(!isReadMore)
        console.log(isReadMore)
    }
    return (
        <div style={{ width: `450px` }}>
            <p>
                {isReadMore ? text : limitedText}
            <button onClick={handleClick} style={{background:"transparent",border:"none",cursor:"pointer",color:"blue",outline:"none"}}>{isReadMore?'read less':'...read more'}</button>
            </p>
        </div>
    )
}

export default Textarea
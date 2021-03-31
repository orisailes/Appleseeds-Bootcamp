import React, { useEffect, useRef, useState } from 'react'

function App() {

    const myInput = useRef()
    const [isClick, setIsClick] = useState(false)
    useEffect(() => {
        isClick&&myInput.current.focus()
    }, [isClick])


    return (
        <div>
            <button onClick={() => { setIsClick(prev => !prev) }}>{isClick ? "save" : "edit"}</button>
            {isClick&&<input type="text" ref={myInput}/>}
        </div>
    )

}

export default App;
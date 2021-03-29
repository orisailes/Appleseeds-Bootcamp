import React, { useState } from 'react'

import './normalize.css'

function App() {
    const [seconds, setSeconds] = useState(0)
    const changeSec = (e) => {
        !isNaN(e.target.value) && setSeconds(e.target.value)
        setMinutes(e.target.value/60)
        setHours(e.target.value/60/60)
    }
    const [minutes,setMinutes] = useState(0)
    const [hours,setHours] = useState(0)
    

    return (
        <div>
            <form>
                <label>Seconds:</label>
                <input onChange={changeSec} value={seconds} type="text" />
                <label>Minutes:</label>
                <input readOnly value={minutes} type="text" />
                <label>Hours:</label>
                <input readOnly value={hours} type="text" />
            </form>
        </div>
    )
}

export default App;
import React, { useState } from 'react'
import CleanUpTest from './components/CleanUpTest'

function App() {

    const [showChild, setShowChild] = useState(false)

    return (
        <div>
            <div>
                <h1>i am father</h1>
                <button onClick={()=>setShowChild(prev=>!prev)}>click to show child</button>
            </div>
           { showChild && <CleanUpTest/>}
        </div>
    )

}

export default App;
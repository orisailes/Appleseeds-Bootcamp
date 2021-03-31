import React, { useEffect, useRef, useState } from 'react'
import Video from './video/mvi-1013_xqtymwNG_HKqD.mp4'
function App() {

    const myVideo = useRef()
    const [isPause, setisPause] = useState(false)
    useEffect(()=>{
        isPause?myVideo.current.pause():myVideo.current.play();
    },[isPause])

    return (
        <div>
            <video ref={myVideo} src={Video}></video>
            <button style={{padding:"20px"}} onClick={() => { setisPause(true) }}>stop</button>
            <button style={{padding:"20px"}} onClick={() => { setisPause(false) }}>play</button>
           
        </div>
    )

}

export default App;
import React, { useState } from 'react'
import './normalize.css'
import './app.css'

function App() {
    const data = [
        { name: "CSS", completed: true },
        { name: "JavaScript", completed: true },
        { name: "Learn React", completed: false },
        { name: "Learn mongoDB", completed: false },
        { name: "Learn Node JS", completed: false },
    ]

    const [myData, setData] = useState(data)
    
    const handleClick = (index) => {
        let newData = [...myData]
        newData[index].completed = !newData[index].completed
        setData(newData)
    }
    
    return (
        <div>
            {myData.map((todo, index) => {
                return (
                    <div className={myData[index].completed ? 'text-kill' : ''} id={index} key={todo.name}>
                        <h3 style={{display:"inline" }}> {todo.name} </h3>
                        <span style={{ cursor: "pointer",}} onClick={() => handleClick(index)}>
                            {todo.completed ? <i className="check icon"></i> : <i className="close icon"></i>}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

export default App;
import React from 'react'
import ReactDOM from 'react-dom'
import Box from './components/Box'

class App extends React.Component {

    render() {
        return (
            <div className="myDiv">
                <Box color="red" height="20vh" width="15vw" />
            </div>
        )
    }
}

export default App
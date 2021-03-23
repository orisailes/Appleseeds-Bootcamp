import React from 'react'
import ReactDOM from 'react-dom'
import Box from './components/Box'

class App extends React.Component {

    componentDidMount() {
        setTimeout(() => {document.querySelector(`.myDiv`).classList.add(`disapper`)}, 2000)
    }

    render() {
        return (
            <div className="myDiv">
                <Box color="red" height="10vh" width="5vw" />
                <Box color="yellow" height="20vh" width="20vw" />
                <Box color="purple" height="15vh" width="10vw" />
            </div>
        )
    }
}

export default App
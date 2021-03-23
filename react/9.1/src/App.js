import React from 'react'
import ReactDOM from 'react-dom'
import Spinner from './components/Spinner'

class App extends React.Component {
    state = { sec: 0, min: 0 }

    componentDidMount() {

        setInterval(() => {
            this.setState({ sec: this.state.sec + 1 })
            console.log(this)
        }, 1000);


    }

    render() {
        return (
            <div >
                <Spinner className={this.state.sec>5?`hidden`:``} />
                <p>00:{this.state.sec}</p>
            </div>
        )
    }
}

export default App
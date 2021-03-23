import React, { useState } from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
        }
    }
    myCounter = () => {
        console.log(`triggered`)
        this.setState({counter: this.state.counter + 1})
    }
    render() {
        return (
            <div> 
                <button onClick={this.myCounter}>click me</button>
                <p>{this.state.counter}</p>
            </div>
        )
    }
}

ReactDOM.render(
    <App />, document.querySelector(`#root`)
)
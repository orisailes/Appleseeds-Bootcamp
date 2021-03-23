import React from 'react'
import ReactDOM from 'react-dom'
import './label.css'
class Label extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }
    increase = () => {
        if (this.state.counter < 10) {
            this.setState({ counter: this.state.counter + 1 })
        }
    }
    decrease = () => {
        if (this.state.counter > -10) {
            this.setState({ counter: this.state.counter - 1 })
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.increase} className="increase">Im Plus</button>
                {this.state.counter < 0 ? <p className="red">{this.state.counter}</p> : this.state.counter != 0 ? <p className="green">{this.state.counter}</p> : <p>{this.state.counter}</p>}
                <button onClick={this.decrease} className="decrease">Im Minus</button>
            </div>
        )
    }
}

export default Label
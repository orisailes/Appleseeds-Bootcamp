import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './box.css'

class boxBtn extends React.Component {
    constructor() {
        super()
        this.state = {
            show: false,
        }
    }

    isShow = () => {
        this.setState({ show: !this.state.show })
        console.log(this.state.show)
    }

    render() {
        return (
            <div className="container">
                <button onClick={this.isShow} className="btn">show/hide</button>
              {(this.state.show)?<div className="box">im Box</div>:<div className="box hidden">im Box</div>}  
            </div>
        )
    }
}

export default boxBtn
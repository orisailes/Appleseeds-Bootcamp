import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ButtonBox from './component/ButtonsBox'

class App extends React.Component {
    
    render() {
        return (
                <ButtonBox func={this.isShow}/>
        )
    }
}

ReactDOM.render(
    <App />, document.querySelector(`#root`)
)
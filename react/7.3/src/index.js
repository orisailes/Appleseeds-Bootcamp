import React from 'react'
import ReactDOM from 'react-dom'
import Label from './components/Label'

class App extends React.Component {
    render() {
        return (
            <Label />
        )
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector(`#root`)
)
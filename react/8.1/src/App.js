import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    state = { favoriteColor: `blue`, isChanged: false }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoriteColor: `red` })
        }, 1000)
    }

    componentDidUpdate() {
        { document.querySelector(`#myDiv`).textContent = `the color changed to:${this.state.favoriteColor}` }
    }
    render() {
        return (
            <div>
                <h1>{this.state.favoriteColor}</h1>
                <div id="myDiv">Nothing changed yet</div>
            </div>
        )
    }
}

export default App
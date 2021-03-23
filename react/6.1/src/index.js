import React from "react"
import ReactDOM from "react-dom"
import Card from "./components/Card"
import "./index.css"

class App extends React.Component {
    render() {
        return (
            <div className="cards-container">
                <Card src="https://picsum.photos/200" />
                <Card src="https://picsum.photos/200" />
                <Card src="https://picsum.photos/200" />
            </div>
        )
    }
}



ReactDOM.render(
    <App />,
    document.querySelector(`#root`)
)
import React from "react"
import ReactDOM from "react-dom"
import Card from "./Components/Card"
import "./index.css"

const App = () => {
    return (
        <div className="card-container">
        <Card link1="SHARE" link2="EXPLORE" src="https://picsum.photos/200" />
        <Card link1="SHARE" link2="EXPLORE" src="https://picsum.photos/200" />
        <Card link1="SHARE" link2="EXPLORE" src="https://picsum.photos/200" />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector(`#root`)
)
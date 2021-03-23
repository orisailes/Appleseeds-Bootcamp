import React from "react"
import ReactDOM from "react-dom"
import Button from "./Components/Button"

const App = () => {
    return (
        <div>
            <Button fontWeight="bold" content="important" />
            <Button content="not important" />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector(`#root`)
)
import Quiz from "./Components/Quiz"
import React from "react"
import ReactDOM from "react-dom"


const App = () => {
return(

    <Quiz/>

)
}

ReactDOM.render(
    <App/>,
    document.querySelector(`#root`)
)
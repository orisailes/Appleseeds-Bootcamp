import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div style={{background:"red",color:"white",height:"10vh"}}>Click me</div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)

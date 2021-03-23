import React from 'react';
import ReactDOM from 'react-dom';
import Boxes from './Components/Boxes/Boxes.component';

const App = () => {
    return(
    <div>
    <Boxes/>
    </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
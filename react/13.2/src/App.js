import React from 'react'
import MyData from './components/MyData'
import './components/mydata.css'

class App extends React.Component {
    state = {}



    render() {
        return (
            <div className="container">
                <MyData />
            </div>
        )
    }
}

export default App;
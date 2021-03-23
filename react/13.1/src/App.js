import React from 'react'
import MyData from './components/MyData'


class App extends React.Component {
    state = {}



    render() {
        return (
            <div>
                <MyData findHim="Mark"/>
            </div>
        )
    }
}

export default App;
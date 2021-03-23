import React from 'react'
import Checkbox from './components/Checkbox'

class App extends React.Component {
   

   
    render() {
        return (
            <div>
                <Checkbox id="1" isCheck={false} text="I read the term of use"/>
                <Checkbox id="2" isCheck={false} text="I accept the term of use"/>
                <Checkbox id="3" isCheck={true} text="I want sales and speciel offers"/>
                <Checkbox id="4" isCheck={true} text="I want news to my mail"/>
            </div>
        )
    }
}

export default App;
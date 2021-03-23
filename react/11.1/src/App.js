import React from 'react'
import CoustomButton from './components/CoustomButton'

class App extends React.Component {

    state = {
        backgroundColors: ["red", "yellow", "purple"],
        textOnParagraph: ``
    }


    getBtn = () => {
        let myBtns = []
        for (let color of this.state.backgroundColors) {
            myBtns.push(<CoustomButton onBtnClick={this.onBtnClick} background={color} />)
        }
        return myBtns
    }

    onBtnClick = (props) => {
        this.setState({ textOnParagraph: props.clicked })
    }

    render() {
        return (
            <div>
                {this.getBtn()}
                <p>You clickd on:{this.state.textOnParagraph}</p>
            </div>
        )
    }

}

export default App;
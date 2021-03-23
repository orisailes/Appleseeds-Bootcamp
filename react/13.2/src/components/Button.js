import React from 'react'

class btn extends React.Component{

    handleClick = (e) => {
        const myInput = document.querySelector(`input`)
        this.props.getInputValue(myInput.value)
    } 

    render(){
        return(
                <div>
                    <button onClick={this.handleClick}>Search</button>
                </div>
        )
    }
}

export default btn
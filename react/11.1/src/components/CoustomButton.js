import React from 'react'
import './CoustomButton.css'

class myBtn extends React.Component {
    state = {
        background: this.props.background,
        clicked: ``
    }

    getColorByClick = (e) => {
       this.setState({clicked:e.target.value},()=>{
           this.props.onBtnClick(this.state);
       })
    }

    render() {
        return (
            <div>
                <button value={this.state.background} onClick={this.getColorByClick} style={{ background: this.state.background }}>{this.state.background}</button>
            </div>
        )
    }
}

export default myBtn
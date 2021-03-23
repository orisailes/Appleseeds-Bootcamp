import React from 'react'


class app extends React.Component {
    constructor(props) {
        super(props);
        this.myTextArea = React.createRef()
        this.state={
            text:`copy me`
        }
    }

    handleChange = (e) => {
        this.setState({text:e.target.value});
    }

    makeCopy = () =>{
        const textToCopy = this.myTextArea.current.value;
        this.myTextArea.current.select();
        document.execCommand('copy')
    }

    render() {
        return (
            <div>
                <textarea onChange={this.handleChange} value={this.state.text} ref={this.myTextArea} cols="20" rows="4"></textarea>
                <button onClick={this.makeCopy}>Copy</button>
            </div>
        )
    }
}

export default app
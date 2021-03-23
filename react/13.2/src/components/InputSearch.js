import React from 'react'

class input extends React.Component {
    state = {
        valueSearching: ``
    }

    handleChange = (e) => {
        this.setState({
            valueSearching:e.target.value
        },()=>{
            this.props.getInputValue(this.state.valueSearching)
        })
    }

    render() {
        return (
            <div>
                <input value={this.state.valueSearching} onChange={this.handleChange} type="text" />
            </div>
        )
    }
}

export default input
import React from 'react'


class checkBox extends React.Component {
    state = {
        isCheck: this.props.isCheck
    }


    onChange = (e) => {
        console.log(e.target.checked) // false

        this.setState({ isCheck: !this.state.isCheck })
    }


    render() {
        return (
            <div>
                <input type="checkbox"
                    onChange={this.onChange}
                    checked={this.state.isCheck}
                    id={this.props.id}
                />
                <label htmlFor={this.props.id}>{this.props.text}</label>
            </div>
        )
    }
}


export default checkBox;
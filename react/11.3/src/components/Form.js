import React from 'react'
import './form.css'
class Form extends React.Component {
    state = {
        textInput: `Your name here.`,
        colorInput: ``,
        explainInput: `Your reason here.`,
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitForm = (e) => {
        e.preventDefault()
        const temp = this.state.form;
        this.setState({ form: this.state.getPermition })
        this.props.myFunc(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <label htmlFor="1">Your name?</label>
                    <input type="text" value={this.state.textInput} name="textInput" onChange={(e) => { this.handleChange(e) }} id="1" />

                    <label htmlFor="2">Choose your favorite color</label>
                    <input type="color" value={this.state.colorInput} name="colorInput" onChange={(e) => { this.handleChange(e) }} id="2" />

                    <label htmlFor="3">Explain about your choise</label>
                    <textarea name="explainInput" onChange={(e) => { this.handleChange(e) }} value={this.state.explainInput} id="3" cols="50" rows="4"></textarea>

                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default Form;
import React from 'react'

class SearchBar extends React.Component {

    state = {
        inputValue:``,
    }

    handleChange = (e) => {
        this.setState({inputValue:e.target.value});
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.inputValue)
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="">Video Search</label>
                        <input placeholder="Search movie here" onChange={this.handleChange} value={this.state.inputValue} type="text" />
                    </div>
                </form>
            </div>
        )
    }

}

export default SearchBar
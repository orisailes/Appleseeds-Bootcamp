import React, { Component } from 'react'

class Form extends Component {
    state = {
        form: {
            bookName: ``,
            author: ``,
            rating: ``,
            episodes: ``,
            released: ``,
            img:``
        }
    }

    handleChange = (e) => {
        const name = e.target.name;
        const temp ={...this.state.form}
        temp[name] = e.target.value
        this.setState({form:temp})
    }

    onSubmitForm = (event) => {
        event.preventDefault();
        
        const bookObj=this.state.form;
        this.props.onSubmitForm(bookObj);
        // TODO:  VALIDATION 
    }

    render() {
        const { bookName, author, rating, episodes, released,img } = this.state.form;
        return (
            <form onSubmit={this.onSubmitForm} className="ui fluid form">
                <div className="field">
                    <input required onChange={this.handleChange} value={bookName} name="bookName" placeholder="enter book name." type="text" />
                </div>
                <div className="field">
                    <input required onChange={this.handleChange} value={author} name="author" placeholder="enter author name" type="text" />
                </div>
                <div className="field">
                    <input required onChange={this.handleChange} value={rating} name="rating" placeholder="enter book rating" type="number" />
                </div>
                <div className="field">
                    <input required onChange={this.handleChange} value={episodes} name="episodes" placeholder="enter episodes qty" type="number" />
                </div>
                <div className="field ">
                    <input required onChange={this.handleChange} value={released} name="released" placeholder="enter relseased date" type="text" />
                </div>
                <div className="field ">
                    <input required onChange={this.handleChange} value={img} name="img" placeholder="enter image of the book. (url only)" type="text" />
                </div>
                <input value="Add book" type="submit" />
            </form>
        )
    }
}

export default Form
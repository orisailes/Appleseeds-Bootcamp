import axios from 'axios';
import React, { Component } from 'react'

class Form extends Component {
    state = {
        form: {
            bookName: ``,
            author: ``,
            rating: ``,
            episodes: ``,
            released: ``,
            img: ``
        },
        isEdit: this.props.isEdit,
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.editBook) {
            this.setState({ form: nextProps.editBook })
        }
    }

    handleChange = (e) => {
        const name = e.target.name;
        const temp = { ...this.state.form }
        temp[name] = e.target.value
        this.setState({ form: temp })
    }

    onSubmitForm = async (event) => {
        event.preventDefault();
        const action = event.target[6].value
        if (action === `Edit`) {
            await axios.put(`${this.props.endpoint}/${this.props.editBook.id}`, this.state.form)
            this.setState({
                form: {
                    bookName: ``,
                    author: ``,
                    rating: ``,
                    episodes: ``,
                    released: ``,
                    img: ``
                }
            })
            this.props.onFinishUpdate()
        } else if (action === `Add Book`) {
            const bookObj = this.state.form;
            this.props.onSubmitForm(bookObj);
        }
    }

    render() {
        const { bookName, author, rating, episodes, released, img } = this.state.form;
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
                <input value={this.props.isEdit ? "Edit" : "Add Book"} type="submit" />
            </form>
        )
    }
}

export default Form
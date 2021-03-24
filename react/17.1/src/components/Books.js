import React, { Component, Fragment } from 'react'
class Book extends Component {

    render() {
        const myBooks = this.props.books.map((book) => {
            const { bookName, author, rating, episodes, released, img } = book
            return (
                <Fragment key={book.id}>                 
                    <div id={book.id} className="ui inverted segment item">
                        <img src={img} alt={bookName} />
                        <h5>{bookName}</h5>
                        <p>Author: {author}</p>
                        <p>Rating: {rating}</p>
                        <p>Episodes: {episodes}</p>
                        <p>Realesed Date: {released}</p>
                        <i onClick={this.props.handleBtnClick} id="edit" className="large edit icon"></i>
                        <i onClick={this.props.handleBtnClick} id="delete" className="large trash icon"></i>
                    </div>       
                </Fragment>
            )
        })
        return (
            <Fragment>
                {myBooks}
            </Fragment>
        )
    }
}

export default Book
import React from 'react'
import axios from 'axios'
import Form from './components/Form'
import Books from './components/Books'
import Spinner from './components/Spinner'
import './normalize.css'
import './book.css'


class App extends React.Component {
    state = {
        endpoint: 'https://605ae9ac27f0050017c057d4.mockapi.io/books',
        books: [],
        isDataLoaded: false,
        editBook:null,

    }

    async componentDidMount() {
        this.setState({ isDataLoaded: false })
        this.fetchBooksFromApi()
        // await axios.put(endpoint/2', {author:`another`})
        // console.log(response2)
    }

    fetchBooksFromApi = async () => {
        const response = await axios.get(this.state.endpoint);
        const rawBooks = response.data;
        if (response.data.length > 0) {
            this.setState({ books: <Books handleBtnClick={this.handleBtnClick} books={rawBooks} /> })
        }
        this.setState({ isDataLoaded: true })
    }

    handleBtnClick = async (e) => {
        this.setState({ isDataLoaded: false })
        const action = e.target.id;
        const id = Number(e.target.parentElement.id);

        switch (action) {
            case `delete`:
                await axios.delete(`${this.state.endpoint}/${id}`);
                this.setState({editBook:null})
                break;
            case `edit`:
                const currentBook = await axios.get(`${this.state.endpoint}/${id}`)
                const CurrentBookInfo = currentBook.data
                this.setState({editBook:CurrentBookInfo})
                break;
            default:
                break;
        }
        this.fetchBooksFromApi()
    }

    onSubmitForm = async (book) => {
        await axios.post(this.state.endpoint, book);
        this.fetchBooksFromApi()
    }


    render() {
        return (
            <div className="ui container">
                <div>
                    {this.state.editBook?
                    <Form isEdit={true} onFinishUpdate={this.fetchBooksFromApi} endpoint={this.state.endpoint} editBook={this.state.editBook} onSubmitForm={this.onSubmitForm} />
                    :<Form isEdit={false} onSubmitForm={this.onSubmitForm} />}
                </div>
                {!this.state.isDataLoaded && <Spinner />}
                <div className="ui horizontal list flex">
                    {this.state.books}
                </div>
            </div>
        )
    };
}

export default App;
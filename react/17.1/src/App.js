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
    }

    async componentDidMount() {
        this.setState({ isDataLoaded: false })
        this.fetchBooksFromApi()

        // console.log(response)
        // await axios.post(endpoint,{name:'bookname',author:'author',rating:'12',episodes:[`test`,`test2`],released:`1.1.97`})
        // await axios.delete(endpoint/2')
        // await axios.put(endpoint/2', {author:`another`})
        // console.log(response2)
    }

    fetchBooksFromApi = async () => {
        const response = await axios.get(this.state.endpoint);
        const rawBooks = response.data;
        if(response.data.length>0){
            this.setState({ books: <Books handleBtnClick={this.handleBtnClick} books={rawBooks} />, isDataLoaded: true })
        }
        this.setState({ isDataLoaded: true })
    }


    handleBtnClick = async (e) => {
        this.setState({isDataLoaded:false})
        const action = e.target.id;
        const id = Number(e.target.parentElement.id);
       
        switch (action) {
            case `delete`:
                await axios.delete(`${this.state.endpoint}/${id}`);
                break;
            case `edit`:
             const currentBook = await axios.get(`${this.state.endpoint}/${id}`)
                console.log(currentBook)

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
                    <Form onSubmitForm={this.onSubmitForm} />
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
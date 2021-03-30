import React, { Fragment, useEffect, useState } from 'react'
import Spinner from './components/Spinner'
import axios from 'axios'
import './normalize.css'

function App() {
    const endpoint = `https://hn.algolia.com/api/v1/search?query=`;
    const [inputValue, setInputValue] = useState(`hooks`);
    const [isLoading, setIsLoading] = useState(true)
    const [myList, setList] = useState([])
    

    useEffect(() => {
        const myFetch = async () => {
            let response;
            try{
                response = await axios.get(endpoint + inputValue);
            }catch(err){
                console.log(err + ` Cant fetch data. please check your url or search term`)
            }
            setList(response.data.hits.map(item => <li key={item.title}> <a href={item.url}>{item.title}</a> </li>));
            setIsLoading(false);
        }
        myFetch();
    }, [])

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const search = async () => {
        setIsLoading(true)
        let term = inputValue;
        let response;
        try{
            response = await axios.get(endpoint + term);
        }catch(err){
            console.log(err + ` Cant fetch data. please check your url or search term`)
        }
        setList(response.data.hits.map(item => <li key={item.title}> <a href={item.url}>{item.title}</a> </li>));
        setIsLoading(false)
    }

    return (
        <div>
            <input value={inputValue} placeholder="Search for countries here" onChange={handleInputChange} type="text" />
            <button onClick={search}>Search</button>
            {isLoading && <Spinner />}
            {myList}
        </div>
    )
}

export default App;
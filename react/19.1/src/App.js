import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import './normalize.css'

function App() {
   const endpoint = 'https://swapi.co/api/films/1/';
    const [displayData,setData] = useState(null) 

   useEffect(()=>{
    const myFetch = async() =>{
        const response = await axios.get('https://swapi.dev/api/films/1/');
        setData(response.data)
    }
    myFetch()
   },[])
    return (
        <div>
            <h1>Title:</h1>{displayData.title}
            <h1>Director:</h1>{displayData.director}
        </div>
    )
}

export default App;
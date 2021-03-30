import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import './normalize.css'

function App() {
    const endpoint = `https://restcountries.eu/rest/v2/all`;
    const [inputValue, setInputValue] = useState(``);
    let [myList, setList] = useState([])
    const [originalList,setOriginalList] = useState([])

    useEffect(() => {
        const myFetch = async () => {
            const response = await axios.get(endpoint);
            setList(response.data.map(cty => <li name={cty.name} key={cty.name}>{cty.name}</li>));
            setOriginalList(response.data.map(cty => <li name={cty.name} key={cty.name}>{cty.name}</li>))   
        }
        myFetch();
    }, [])

    useEffect(()=>{
        if(inputValue){
            let term = inputValue;
            term = term.toLowerCase();
            let newData = [];
            newData = originalList.filter(cty => {return cty.key.toLowerCase().includes(term)&&cty});  
            setList(newData);
            console.log(myList);
        }else{
            setList(originalList)
        }
        
    },[inputValue])

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    
    return (
        <div>
            <input value={inputValue} placeholder="Search for countries here" onChange={handleInputChange} type="text" />
            <p>number of countries display: {myList.length}</p>
            {myList}
        </div>
    )
}

export default App;
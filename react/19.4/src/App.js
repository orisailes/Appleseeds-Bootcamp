import React,{ useEffect,useState } from 'react'
import axios from 'axios'

function App (){
    
    const [joke,setJoke] = useState(``);
    const [categoryToSeek,setCategoryToSeek] = useState(``);
    const [jokesCategories,setJokesCategories] = useState([]);
    const [isCategoryClicked,setIsCategoryClicked] = useState(false);

    useEffect(()=>{
        let response;
        const myFetch=async()=>{
            response = await axios.get('https://api.chucknorris.io/jokes/categories');
            setJokesCategories(response.data.map((e)=>{
                return <button value={e} onClick={getCategory}>{e}</button>
            }))
        }
        myFetch();
    },[])


    const giveMeJoke = async () => {
        const response = await axios.get('https://api.chucknorris.io/jokes/random',{
            params:{category:categoryToSeek}
        })
        setJoke(response.data.value);
    }

    const getCategory = (e) => {
        setCategoryToSeek(e.target.value)
        setIsCategoryClicked(true)
        {document.querySelector(`.btn`).style.visibility = "visible"}
    }

        return (
            <div>
                <h1>Chuck Norris Jokes!</h1>
                <h3>choose joke category</h3>
                {jokesCategories}
                <div><p>{joke}</p></div>
               <button style={{visibility:"hidden"}} className="btn" onClick={giveMeJoke}>JOKE ME</button>
            </div>
        )
    
}

export default App;
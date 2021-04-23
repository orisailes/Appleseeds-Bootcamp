import React,{useEffect} from 'react'
import axios from 'axios';

function App() {

  useEffect(()=>{
    const fetchData = async() => {
      const data = await axios.get('/api/clients');
      console.log(data)
    }
    fetchData()
    
  },[])

  return (
    <div className="App">
      react app!
    </div>
  );
}

export default App;

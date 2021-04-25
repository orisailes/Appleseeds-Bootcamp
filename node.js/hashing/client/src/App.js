import axios from 'axios'
import './App.css';
import React, {useState} from 'react'
function App() {

  const [userNameInput, setUserNameInput] = useState('')
  const [passInput, setPassInput] = useState('')
  const [dataFromServer, setDataFromServer] = useState([])
  const [isLogin, setIsLogin] = useState(false)

  const login = async () => {
    let result
    try{
      result =await axios.put('http://localhost:5000/api/users/login',{
        "user_name":userNameInput,
        "password":passInput
      })
      result.data && setIsLogin(true)
    }catch(err){
      console.log(err);
    }
    console.log(result);
    setDataFromServer(JSON.stringify(result.data.user_name))
  }

  const logout = async () => {

  }

  const register = async () => {
    const result =await axios.post('http://localhost:5000/api/users/register',{
      "user_name":userNameInput,
      "password":passInput
    },
    )
    setDataFromServer(JSON.stringify(result.data))
  }


  const displayUserProfile = async () => {
    const result =await axios.post('http://localhost:5000/api/users/me',{
      "user_name":userNameInput,
      "password":passInput
    })
    setDataFromServer(JSON.stringify(result.data))
  }



  return (
    <>
    <div className="App">
      <input value={userNameInput} onChange={(e)=>{setUserNameInput(e.target.value)}} type="text" placeholder="enter username"></input>
      <input value={passInput} onChange={(e)=>{setPassInput(e.target.value)}} type="text" placeholder="enter password"></input>
      <button onClick={login}>login</button>
      <button onClick={register}>register</button>
      {isLogin &&
      <>
       <button onClick={displayUserProfile}>show my profile</button>
       <button onClick={logout}>logout</button>
       </>
       }
    </div>
    <div>
    {dataFromServer}
    </div>
    </>
  );
}

export default App;

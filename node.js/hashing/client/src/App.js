import axios from 'axios'
import './App.css';
import React, { useState } from 'react'
function App() {

  const [userNameInput, setUserNameInput] = useState('')
  const [passInput, setPassInput] = useState('')
  const [dataFromServer, setDataFromServer] = useState([])
  const [isLogin, setIsLogin] = useState(false)

  const login = async () => {
    let result
    if (passInput.length && userNameInput.length) {
      try {
        result = await axios.put('http://localhost:5000/api/users/login', {
          "user_name": userNameInput,
          "password": passInput
        })
        if (result.data.result) {
          setIsLogin(true)
          setDataFromServer(result.data.result.user_name + ' is logged in')
          localStorage.setItem('login_token', result.data.token)
        } else {
          setDataFromServer('unsuccesful login')
        }
      } catch (err) {
        console.log(err);
      }
    }
    console.log(result);

  }

  const logout = async () => {
    // remove token from user in db
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('login_token')}` }
    };
    try{
    const result = await axios.put('http://localhost:5000/api/users/logout',{},config)
    // remove token from local storage
    console.log(result)
    setIsLogin(false)
    setDataFromServer(result.data.user_name + ' is logged out')
    localStorage.removeItem('login_token')
    }catch(err){
      console.log(err)
    }
  }

  const register = async () => {
    const result = await axios.post('http://localhost:5000/api/users/register', {
      "user_name": userNameInput,
      "password": passInput
    },
    )
    setDataFromServer(JSON.stringify(result.data))
  }


  const displayUserProfile = async () => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('login_token')}` }
    };
    // send token as authorization
    const result = await axios.get('http://localhost:5000/api/users/me',config)
    setDataFromServer(JSON.stringify(result.data))
    console.log(result);
  }



  return (
    <>
      <div className="App">
        <input style={{ padding: "15px" }} value={userNameInput} onChange={(e) => { setUserNameInput(e.target.value) }} type="text" placeholder="enter username"></input>
        <input style={{ padding: "15px" }} value={passInput} onChange={(e) => { setPassInput(e.target.value) }} type="text" placeholder="enter password"></input>
        <button style={{ padding: "15px" }} onClick={login}>login</button>
        <button style={{ padding: "15px" }} onClick={register}>register</button>
        {isLogin &&
          <>
            <button style={{ padding: "15px" }} onClick={displayUserProfile}>show my profile</button>
            <button style={{ padding: "15px" }} onClick={logout}>logout</button>
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

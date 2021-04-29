import React,{useState} from 'react';
import './css/normalize.css'
import './css/app.css'

function App() {

  const wait = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

  const myFunc = async () => {
    setTest('1')
    await wait(1000)
    setMessage('attack!')
    await wait(1000)
    setTest('2')
  }

  const [message, setMessage] = useState('nothing happen')
  const [test, setTest] = useState('0')

  return (
    <div style={{ height: "100vh", background: "red" }} className="App">
      {<div>{test}</div>}
      {<p>{message}</p>}
      <button onClick={myFunc}>click</button>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './css/normalize.css'
import './css/app.css'
import bk from './pokemons/img/pokemon-back/bulbasaur-back.png'
import bf from './pokemons/img/pokemon-front/bulbasaur-front.png'
import ck from './pokemons/img/pokemon-front/charmander-front.png'
import cf from './pokemons/img/pokemon-back/charmander-back.png'

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
    <div style={{ height: "100vh", background: "cornsilk" }} className="App">
      {/* {<div>{test}</div>} */}
      {/* {<p>{message}</p>} */}
      {/* <button onClick={myFunc}>click</button> */}
      <img src={bf}></img>
      <img src={bk}></img>
      <img src={cf}></img>
      <img src={ck}></img>
    </div>
  );
}

export default App;

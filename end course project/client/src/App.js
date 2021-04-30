import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './css/normalize.css'
import './css/app.css'
import { userContext } from './utils/context/userContext'
import Battle from './components/pages/battle'
import Home from './components/pages/home'
import pokemonList from './utils/classes/pokemonsList'

function App() {


  const scyther = pokemonList.scyther(5)
  const hitmonlee = pokemonList.hitmonlee(6)
  
  const currentUser = {
    name: "orisailes",
    money: 0,
    pokemons: [
      hitmonlee,
      scyther
    ]
  }
  console.log(currentUser);
  const [user, setUser] = useState(currentUser)

  return (
    <BrowserRouter>
      <Switch>
        <userContext.Provider value={{ user, setUser }}>
          <Route exact path="/battle" component={Battle} />
          <Route exact path="/" component={Home} />
        </userContext.Provider>
      </Switch>
    </BrowserRouter>
  )
}

export default App;

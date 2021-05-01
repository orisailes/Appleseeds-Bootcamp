import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { userContext } from './utils/context/userContext'
import './css/app.css'
import './css/normalize.css'
import Battle from './components/pages/battle'
import Map from './components/pages/map'
import Home from './components/pages/home'
import pokemonList from './utils/classes/Pokemon/pokemonsList'

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

  const [user, setUser] = useState(currentUser)

  const value = {user,setUser}

  return (
    <BrowserRouter>
        <Switch>
          <userContext.Provider value={value}>
            <Route exact path="/battle" component={Battle} />
            <Route exact path="/map" component={Map} />
            <Route exact path="/" component={Home} />
          </userContext.Provider>
        </Switch>
    </BrowserRouter>
  )
}

export default App;
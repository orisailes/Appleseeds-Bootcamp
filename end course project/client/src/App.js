import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { userContext } from './utils/context/userContext'
import { AnimatePresence } from 'framer-motion'
import './css/app.css'
import './css/normalize.css'
import Battle from './components/pages/battle'
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
  console.log(currentUser);
  const [user, setUser] = useState(currentUser)

  return (
    <BrowserRouter>
      <AnimatePresence>
        <Switch>
          <userContext.Provider value={{ user, setUser }}>
            <Route exact path="/battle" component={Battle} />
            <Route exact path="/" component={Home} />
          </userContext.Provider>
        </Switch>
      </AnimatePresence>
    </BrowserRouter>
  )
}

export default App;

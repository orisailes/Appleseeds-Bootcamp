import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { userContext } from './utils/context/userContext'
import './css/app.css'
import './css/normalize.css'
import Battle from './components/pages/battle'
import Map from './components/pages/map'
import Home from './components/pages/home'
import pokemonsGenerator from './utils/classes/Pokemon/pokemonsGenerator'

function App() {


  const scyther = pokemonsGenerator.scyther(2)
  const vulpix = pokemonsGenerator.vulpix(1)
  const vulpix2 = pokemonsGenerator.vulpix(1)
  const vulpix3 = pokemonsGenerator.vulpix(1)
  const vulpix4 = pokemonsGenerator.vulpix(1)
  const vulpix5 = pokemonsGenerator.vulpix(1)
  const vulpix6 = pokemonsGenerator.vulpix(1)
  const vulpix7 = pokemonsGenerator.vulpix(1)
  
  const currentUser = {
    name: "orisailes",
    money: 0,
    pokemons: [
      vulpix,
      vulpix2,
      vulpix3,
      vulpix4,
      vulpix5,
      vulpix6,
      vulpix7,
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


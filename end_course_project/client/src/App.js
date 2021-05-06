import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { userContext } from './utils/context/userContext'
import './css/app.css'
import './css/normalize.css'
import Battle from './components/pages/battle'
import Map from './components/pages/map'
import Landing from './components/pages/landing'
import pokemonsGenerator from './utils/classes/Pokemon/pokemonsGenerator'

function App() {
  //TODO: handleRun , validat that no more than 8 pokemons, 

  // const poke1 = pokemonsGenerator.makePokemon("ponyta", 35)
  // const poke2 = pokemonsGenerator.makePokemon("voltorb", 35)
  // const poke3 = pokemonsGenerator.makePokemon("pikachu", 35)
  // const poke4 = pokemonsGenerator.makePokemon("charmander", 35)
  // const poke5 = pokemonsGenerator.makePokemon("squirtle", 35)
  // const poke6 = pokemonsGenerator.makePokemon("scyther", 36)
  // const poke7 = pokemonsGenerator.makePokemon("vulpix", 35)
  // const poke8 = pokemonsGenerator.makePokemon("eevee", 35)
  // const poke9 = pokemonsGenerator.makePokemon("caterpie", 35)
  // const poke10 = pokemonsGenerator.makePokemon("ekans", 35)
  // const poke11 = pokemonsGenerator.makePokemon("geodude", 35)
  // const poke12 = pokemonsGenerator.makePokemon("hitmonlee", 35)
  // const poke13 = pokemonsGenerator.makePokemon("metapod", 35)
  // const poke14 = pokemonsGenerator.makePokemon("pidgey", 35)
  // const poke15 = pokemonsGenerator.makePokemon("psyduck", 35)
  // const poke16 = pokemonsGenerator.makePokemon("raticate", 35)
  // const poke17 = pokemonsGenerator.makePokemon("rattata", 35)
  // const poke18 = pokemonsGenerator.makePokemon("spearow", 35)
  // const poke19 = pokemonsGenerator.makePokemon("weedle", 35)
  // const poke20 = pokemonsGenerator.makePokemon("bulbasaur", 35)

  

  const [user, setUser] = useState(null)

  const value = {
    user,
    setUser
  }

  return (<BrowserRouter >
    <Switch >
      <userContext.Provider value={value} >
        <Route exact path="/battle" component={Battle} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/" component={Landing} />
      </userContext.Provider>
    </Switch>
  </BrowserRouter>
  )
}

export default App;
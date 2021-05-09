import React, { useState } from 'react';
import { BrowserRouter,useHistory, Redirect, Route, Switch } from 'react-router-dom'
import { userContext } from './utils/context/userContext'
import './css/app.css'
import './css/normalize.css'
import Battle from './components/pages/battle'
import World from './components/pages/world'
import Landing from './components/pages/landing'
import pokemonsGenerator from './utils/classes/Pokemon/pokemonsGenerator'

function App() {
  //TODO: handleRun , validat that no more than 8 pokemons, 
  const location = useHistory()


  location.listen((newLocation, action) => {
    if (action === "PUSH") {
      if (
        newLocation.pathname !== this.currentPathname ||
        newLocation.search !== this.currentSearch
      ) {
        // Save new location
        this.currentPathname = newLocation.pathname;
        this.currentSearch = newLocation.search;

        // Clone location object and push it to history
        location.push({
          pathname: newLocation.pathname,
          search: newLocation.search
        });
      }
    } else {
      // Send user back if they try to navigate back
      location.go(1);
    }
  })

  const [user, setUser] = useState(null)

  const value = {
    user,
    setUser
  }

  return (<BrowserRouter >
    <Switch >
      <userContext.Provider value={value} >
        <Route exact path="/" render={() => <Redirect to="/landing" />} />
        <Route exact path="/battle" component={Battle} />
        <Route exact path="/world" component={World} />
        <Route exact path="/landing" component={Landing} />
      </userContext.Provider>
    </Switch>
  </BrowserRouter>
  )
}

export default App;
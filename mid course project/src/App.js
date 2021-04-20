import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Compare from './components/Pages/Compare/Compare'
import Table from './components/Pages/Table/Table'
import LandingPage from './components/Pages/Home/LandingPage'
import Header from './components/Pages/Utils/Header'
import FavoriteList from './components/Pages/Favorites/FavoriteList'
import NotFound from './components/Pages/Utils/NotFound'
import './components/css/app.css'
import './normalize.css'
import './mobile.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/table' component={Table}/>
          <Route exact path='/compare' component={Compare}/>
          <Route exact path='/favorite' component={FavoriteList} />
          <Route exact path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;

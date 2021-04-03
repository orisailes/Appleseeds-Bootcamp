import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Compare from './components/Compare'
import Table from './components/Table'
import LandingPage from './components/LandingPage'
import Header from './components/Header'
import FavoriteList from './components/FavoriteList'
import './components/css/app.css'

function App() {
  
  const compareWillUpdate = (array) => {
    console.log(array)
  }

 return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/table' component={Table}/>
          <Route exact path='/compare' compareWillUpdate={compareWillUpdate} component={Compare}/>
          <Route exact path='/favorite' component={FavoriteList}/>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;

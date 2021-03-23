import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'

import './app.css'

class app extends React.Component {
    state = {
        pathes: {
            homePage: '/',
            productsPage: '/products',
        },
    }


    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={LandingPage} />
                        <Route exact path={`${this.state.pathes.productsPage}`} component={Products} />
                        <Route exact path={`${this.state.pathes.productsPage}/:id`} component={ProductDetail} />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        )
    }
}

export default app
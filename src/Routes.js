import React from 'react'  
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Shared/Header'
import Footer from "./components/Shared/Footer"

import Home from './components/Home/index'
import Article from './components/Article/index'


const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/article/:id" component={Article} />
      <Route path="/" component={Home} />
    </Switch>
    <Footer />
  </BrowserRouter>
)

export default Routes
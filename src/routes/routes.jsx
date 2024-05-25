import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from '../containers/Home'
import Login from '../containers/Login'
import Products from '../containers/products'
import Register from '../containers/Register'
import PrivateRoute from './private-route'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Register} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/produtos" component={Products} />
      </Switch>
    </Router>
  )
}

export default Routes

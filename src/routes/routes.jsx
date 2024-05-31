import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { Home, Login, Products, Register, Cart } from '../containers'
import PrivateRoute from './private-route'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Register} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/produtos" component={Products} />
        <PrivateRoute path="/carrinho" component={Cart} />
      </Switch>
    </Router>
  )
}

export default Routes

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SignIn from '../components/signin/SignIn'
import OrdersList from '../components/orders/OrdersList' 

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={SignIn} />
    <Route exact path="/orders" component={OrdersList} />
  </Switch>
)

export default Routes

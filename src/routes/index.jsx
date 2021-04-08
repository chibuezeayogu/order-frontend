import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SignIn from '../components/signin/SignIn'
import OrdersList from '../components/orders/OrdersList'
import OrderDetails from '../components/orders/OrderDetails'

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={SignIn} />
    <Route exact path="/orders" component={OrdersList} />
    <Route exact path="/orders/:id" component={OrderDetails} />
  </Switch>
)

export default Routes

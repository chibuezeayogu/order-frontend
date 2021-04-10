import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SignIn from '../components/signin/SignIn'
import OrdersList from '../components/orders/OrdersList'
import OrderDetails from '../components/orders/OrderDetails'
import EditOrder from '../components/orders/EditOrder'
import CreateOrder from '../components/orders/CreateOrder'
import { Auth } from '../helpers/auth'

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={Auth(SignIn)} />
    <Route exact path="/orders" component={Auth(OrdersList)} />
    <Route exact path="/orders/create" component={Auth(CreateOrder)} />
    <Route exact path="/orders/:id" component={Auth(OrderDetails)} />
    <Route exact path="/orders/:id/edit" component={Auth(EditOrder)} />
  </Switch>
)

export default Routes

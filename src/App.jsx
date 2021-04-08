import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './assests/scss/index.scss'
import store from './store/index'
import Routes from './routes/index'
import { verifyLogin } from './helpers/auth'

verifyLogin()

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  )
}

export default App

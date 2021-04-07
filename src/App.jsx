import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './assests/scss/index.scss'
import store from './store/index'
import Routes from './routes/index'

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

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'

import { configure, mount } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { config } from 'dotenv'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

config()
const mockComponentWithProvider = (store, children) => {
  return mount(
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>
  )
}
configure({ adapter: new Adapter() })
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

global.mockStore = mockStore
global.mockComponentWithProvider = mockComponentWithProvider

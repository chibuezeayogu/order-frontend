/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
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

const mockAxios = new MockAdapter(axios)
configure({ adapter: new Adapter() })
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

global.mockStore = mockStore
global.mockComponentWithProvider = mockComponentWithProvider
global.mockAxios = mockAxios

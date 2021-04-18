/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme'
import { config } from 'dotenv'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

config()

configure({ adapter: new Adapter() })
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

global.mockStore = mockStore

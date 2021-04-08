import { combineReducers } from 'redux'
import userReducer from './userReducer'
import ordersReducer from './ordersReducer'

const rootReducer = combineReducers({
  userReducer,
  ordersReducer
})

export default rootReducer

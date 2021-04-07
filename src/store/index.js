import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/indexReducer'

const middleware = applyMiddleware(thunk)
const store = createStore(rootReducer, middleware)

export default store

import isEmpty from 'lodash/isEmpty'
import actionTypes from '../actions/actionTypes'

const initialState = {
  isAuthenticating: false,
  isSigningOut: false,
  isAuthenticated: false,
  currentUser: {},
  error: ''
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isAuthenticated: !isEmpty(action.payload),
        isAuthenticating: false,
        error: ''
      }
    case actionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: {},
        isAuthenticated: false,
        isAuthenticating: false
      }
    case actionTypes.SIGN_IN_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        currentUser: {},
        error: action.payload,
        isAuthenticating: false
      }
    case actionTypes.SIGN_OUT_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case actionTypes.SIGNING_IN:
      return {
        ...state,
        isAuthenticating: action.payload
      }
    case actionTypes.SIGNING_OUT:
      return {
        ...state,
        isLoggingOut: action.payload
      }
    default:
      return state
  }
}

export default usersReducer

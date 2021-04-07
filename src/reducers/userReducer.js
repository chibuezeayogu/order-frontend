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
        currentUser: action.user,
        isAuthenticated: !isEmpty(action.user),
      }
    case actionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: {},
        isAuthenticated: false
      }
    case actionTypes.SIGN_IN_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        currentUser: {},
        error: action.error.message
      }
    case actionTypes.SIGN_OUT_ERROR:
      return {
        ...state,
        error: action.error.message
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

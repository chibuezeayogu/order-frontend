// require('dotenv').config();
import actionTypes from './actionTypes'
// eslint-disable-next-line import/no-named-as-default
import firebaseAuthService from '../firebase/index'

export const isAuthenticating = value => ({
  type: actionTypes.SIGNING_IN,
  payload: value
})

export const loginSuccess = user => ({
  type: actionTypes.SIGN_IN_SUCCESS,
  payload: user
})

export const loginError = error => ({
  type: actionTypes.SIGN_IN_ERROR,
  error
})

export const isSigningOut = value => ({
  type: actionTypes.SIGN_OUT,
  payload: value
})

export const signOutSuccess = user => ({
  type: actionTypes.SIGN_IN_SUCCESS,
  payload: user
})

export const signOutError = error => ({
  type: actionTypes.SIGN_IN_ERROR,
  payload: error
})

export const login = (email, password, history) => {
  return async dispatch => {
    dispatch(isAuthenticating(true))
    const [
      error,
      userCredentials
    ] = await firebaseAuthService.signInWithEmailAndPassword(
      email,
      password,
      history
    )

    if (error) {
      dispatch(loginError(error))
    } else {
      dispatch(loginSuccess(userCredentials.user))
      dispatch(isAuthenticating(false))
      history.push('/orders')
    }
  }
}

export const signOut = history => {
  return async dispatch => {
    dispatch(isSigningOut(true))
    const [error] = await firebaseAuthService.signOut()

    if (error) {
      dispatch(loginError(error))
    } else {
      dispatch(signOutSuccess())
      dispatch(isSigningOut(false))
      dispatch(history.push('/login'))
    }
  }
}

/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-cycle */
import actionTypes from './actionTypes'
// eslint-disable-next-line import/no-named-as-default
import firebaseAuthService from '../firebase/index'
import { setLocalStorage } from '../helpers/auth'

export const isAuthenticating = value => ({
  type: actionTypes.SIGNING_IN,
  payload: value
})

export const loginSuccess = user => ({
  type: actionTypes.SIGN_IN_SUCCESS,
  payload: user
})

export const loginError = message => ({
  type: actionTypes.SIGN_IN_ERROR,
  payload: message
})

export const isSigningOut = value => ({
  type: actionTypes.SIGNING_OUT,
  payload: value
})

export const signOutSuccess = () => ({
  type: actionTypes.SIGN_OUT_SUCCESS,
  payload: {}
})

export const signOutError = error => ({
  type: actionTypes.SIGN_OUT_ERROR,
  payload: error.message
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
      let message
      if (error.code === 'auth/network-request-failed') {
        message = 'No internet connection'
      } else if (error.code === 'auth/user-not-found') {
        message = 'Invalid username or password'
      } else {
        message = error.message
      }
      dispatch(loginError(message))
    } else {
      setLocalStorage(userCredentials.user)
      dispatch(loginSuccess(userCredentials.user))
      history.push('/orders')
    }
  }
}

export const signOut = history => {
  return async dispatch => {
    dispatch(isSigningOut(true))
    const [error] = await firebaseAuthService.signOut()
    if (error) {
      dispatch(signOutError(error))
    } else {
      dispatch(signOutSuccess())
      localStorage.removeItem('token')
      history.push('/login')
    }
  }
}

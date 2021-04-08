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

export const loginError = error => ({
  type: actionTypes.SIGN_IN_ERROR,
  error
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
      dispatch(loginError(error))
    } else {
      dispatch(loginSuccess(userCredentials.user))
      setLocalStorage(userCredentials.user)
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
      history.push('/login')
      localStorage.removeItem('token')
    }
  }
}

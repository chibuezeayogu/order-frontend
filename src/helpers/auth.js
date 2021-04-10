/* eslint-disable import/no-cycle */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React, { useEffect } from 'react'
import { notify } from 'react-notify-toast'
import axios from 'axios'
import firbaseSevice from '../firebase/index'
import store from '../store/index'
import { isAuthenticating, loginSuccess } from '../actions/userActions'

export const Auth = Component => props => {
  const { pathname } = props.history.location

  useEffect(() => {
    if (localStorage.getItem('token') && pathname === '/login') {
      props.history.push('/orders')
    }

    if (!localStorage.getItem('token') && pathname !== '/login') {
      localStorage.removeItem('token')
      props.history.push('/login')
    }
  }, [])

  return <Component {...props} />
}

export const verifyLogin = () => {
  firbaseSevice.onAuthStateChanged(async user => {
    try {
      const idToken = await user.getIdToken()
      localStorage.setItem('token', idToken)
      store.dispatch(isAuthenticating(true))
      store.dispatch(loginSuccess(user))
      store.dispatch(isAuthenticating(false))
    } catch (error) {
      store.dispatch(isSigningOut(true))
      store.dispatch(signOutSuccess())
      store.dispatch(isSigningOut(false))
      window.localStorage.removeItem('token')
    }
  })
}

export const setLocalStorage = async user => {
  const idToken = await user.getIdToken()
  localStorage.setItem('token', idToken)
}

export const setAuthorizationToken = () => {
  const token = localStorage.getItem('token')
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  } else {
    delete axios.defaults.headers.common.Authorization
  }
}

export const toastMessage = () => {
  localStorage.removeItem('token')
  return notify.show('Token expired. Please login to continue', 'error')
}

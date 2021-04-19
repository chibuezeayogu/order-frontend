/* eslint-disable import/no-cycle */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-undef */
import React, { useEffect } from 'react'
import { notify } from 'react-notify-toast'
import axios from 'axios'
import firbaseSevice from '../firebase/index'
import store from '../store/index'
import { loginSuccess, signOutSuccess } from '../actions/userActions'

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
  firbaseSevice.auth.onAuthStateChanged(async user => {
    if (user != null) {
      const idToken = await user.getIdToken()
      localStorage.setItem('token', idToken)
      store.dispatch(loginSuccess(user))
    } else {
      store.dispatch(signOutSuccess())
      localStorage.removeItem('token')
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

export const toastMessage = (error, history) => {
  if (error === undefined) {
    return notify.show('Ensure that server is running and try again', 'error')
  }

  if (error.status === 401) {
    localStorage.removeItem('token')
    history.push('/login')
    return notify.show('Token expired. Please login to continue', 'error')
  }
}

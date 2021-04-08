/* eslint-disable import/no-cycle */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-multi-assign */
/* eslint-disable no-undef */
import React from 'react'
import firbaseSevice from '../firebase/index'
import store from '../store/index'
import { isAuthenticating, loginSuccess } from '../actions/userActions'

export const Auth = Component => props => {
  const { pathname } = props.history.location

  if (localStorage.getItem('token') && pathname === '/login') {
    return props.history.push('/orders')
  }

  if (!localStorage.getItem('token') && pathname !== '/login') {
    localStorage.removeItem('token')
    return props.history.push('/login')
  }

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

export const setHeader = () => ({
  headers: {
    'x-access-token': localStorage.getItem('token'),
    authorization: localStorage.getItem('token')
  }
})

// export const ProtectedRoute = ({ isAuth, component: Component, ...rest }) =>
//   <Route
//     {...rest}
//     render={props => {
//       if (isAuth) {
//         return <Component />
//       }
//       return (
//         <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
//       )
//     }}
//   />

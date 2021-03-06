/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/userActions'
import useFormInput from '../../utils/customReactHooks'
import TextInput from '../common/TextInput'
import PasswordInput from '../common/PasswordInput'
import ButtonWithLoading from '../common/ButtonWithLoading'

const SignIn = ({ history }) => {
  const email = useFormInput('')
  const password = useFormInput('')
  const dispatch = useDispatch()
  const { error, isAuthenticating } = useSelector(({ userReducer }) => userReducer)

  useEffect(() => {}, [dispatch])

  const handleSign = async event => {
    event.preventDefault()
    dispatch(login(email.value, password.value, history))
  }

  return (
    <section className="login-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h1>Login</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-5">
            <div className="login-wrap p-2 p-md-3">
              <div className="icon d-flex justify-content-center">
                <i className="fa fa-user" />
              </div>
              <form onSubmit={handleSign} className="login-form pt-5">
                <div className="form-group">
                  <TextInput {...email} text="Email" />
                </div>
                <div className="form-group d-flex">
                  <PasswordInput {...password} />
                </div>
                <div className="form-group">
                  <ButtonWithLoading text="Login" loading={isAuthenticating} />
                </div>
                <div className="row justify-content-center error">
                  {error && error}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignIn

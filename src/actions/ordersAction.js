import axios from 'axios'
import { notify } from 'react-notify-toast'
import actionTypes from './actionTypes'
import { setAuthorizationToken, toastMessage } from '../helpers/auth'

const baseURl = process.env.BASE_URL

export const isFetching = value => ({
  type: actionTypes.FETCH_ORDERS,
  payload: value
})

export const fetchOrdersSuccess = orders => ({
  type: actionTypes.FETCH_ORDERS_SUCCESS,
  payload: orders
})

export const fetchOrdersError = error => ({
  type: actionTypes.FETCH_ORDERS_ERROR,
  payload: error.message
})

export const fetchOrderSuccess = order => ({
  type: actionTypes.FETCH_ORDER_SUCCESS,
  payload: order
})

export const fetchOrderError = error => ({
  type: actionTypes.FETCH_ORDER_ERROR,
  payload: error.message
})

export const isUpdating = value => ({
  type: actionTypes.UPDATE_ORDER,
  payload: value
})

export const updateSuccess = order => ({
  type: actionTypes.UPDATE_ORDER_SUCCESS,
  payload: order
})

export const updateError = error => ({
  type: actionTypes.UPDATE_ORDER_ERROR,
  payload: error.message
})

export const isCreating = value => ({
  type: actionTypes.CREATE_ORDER,
  payload: value
})

export const createSuccess = order => ({
  type: actionTypes.CREATE_ORDER_SUCCESS,
  payload: order
})

export const createError = error => ({
  type: actionTypes.CREATE_ORDER_ERROR,
  payload: error.message
})

export const fetchOrders = history => {
  return async dispatch => {
    setAuthorizationToken()
    try {
      dispatch(isFetching(true))
      const { data } = await axios.get(`${baseURl}/orders`)
      dispatch(fetchOrdersSuccess(data.data))
      dispatch(isFetching(false))
    } catch (error) {
      dispatch(fetchOrdersError(error))
      dispatch(isFetching(false))
      toastMessage(error.response, history)
    }
  }
}

export const fetchOrder = (uid, history) => {
  return async dispatch => {
    setAuthorizationToken()
    try {
      dispatch(isFetching(true))
      const { data } = await axios.get(`${baseURl}/orders/${uid}`)
      dispatch(fetchOrderSuccess(data.data))
      dispatch(isFetching(false))
    } catch (error) {
      dispatch(fetchOrderError(error))
      dispatch(isFetching(false))
      toastMessage(error.response, history)
    }
  }
}

export const updateOrder = (uid, title, bookingDate, history) => {
  return async dispatch => {
    setAuthorizationToken()
    try {
      dispatch(isUpdating(true))
      const { data } = await axios.put(`${baseURl}/orders/${uid}`, {
        title,
        bookingDate
      })
      dispatch(updateSuccess(data.data))
      dispatch(isUpdating(false))
      history.push(`/orders/${uid}`)
    } catch (error) {
      dispatch(updateError(error))
      dispatch(isUpdating(false))
      toastMessage(error.response, history)
    }
  }
}

export const createOrder = (values, history) => {
  return async dispatch => {
    setAuthorizationToken()
    try {
      dispatch(isCreating(true))
      const { data } = await axios.post(`${baseURl}/orders`, { ...values })
      dispatch(createSuccess(data.data))
      dispatch(isCreating(false))
      history.push(`/orders/${data.data.uid}`)
    } catch (error) {
      notify.show('Please work', 'error')
      dispatch(createError(error))
      dispatch(isCreating(false))
      toastMessage(error.response, history)
    }
  }
}

import axios from 'axios'
import actionTypes from './actionTypes'
import { setHeader } from '../helpers/auth'

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

export const fetchOrders = () => {
  return async dispatch => {
    try {
      dispatch(isFetching(true))
      const { data } = await axios.get(`${baseURl}/orders`, setHeader)
      dispatch(fetchOrdersSuccess(data.data))
    } catch (error) {
      dispatch(fetchOrdersError(error))
    }
  }
}

export const fetchOrder = uid => {
  return async dispatch => {
    try {
      dispatch(isFetching(true))
      const { data } = await axios.get(`${baseURl}/orders/${uid}`, setHeader)
      dispatch(fetchOrderSuccess(data.data))
    } catch (error) {
      dispatch(fetchOrderError(error))
    }
  }
}

export const updateOrder = (uid, title, bookingDate, history) => {
  return async dispatch => {
    try {
      dispatch(isUpdating(true))
      const { data } = await axios.put(
        `${baseURl}/orders/${uid}`,
        {
          title,
          bookingDate
        },
        setHeader
      )
      dispatch(updateSuccess(data.data))
      history.push(`/orders/${uid}`)
    } catch (error) {
      dispatch(updateError(error))
    }
  }
}

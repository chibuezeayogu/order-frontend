import axios from 'axios'
import actionTypes from './actionTypes'
import ordersData from '../MockData/OrderData'

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
  payload: error
})

export const fetchOrderSuccess = order => ({
  type: actionTypes.FETCH_ORDER_SUCCESS,
  payload: order
})

export const fetchOrderError = error => ({
  type: actionTypes.FETCH_ORDER_ERROR,
  payload: error
})

export const isUpdating = value => ({
  type: actionTypes.UPDATE_ORDERS,
  payload: value
})

export const updateSuccess = order => ({
  type: actionTypes.UPDATE_ORDER_SUCCESS,
  payload: order
})

export const updateError = error => ({
  type: actionTypes.UPDATE_ORDER_ERROR,
  payload: error
})

export const fetchOrders = () => {
  return async dispatch => {
    try {
      dispatch(isFetching(true))
      const { data } = await axios.get(`${baseURl}/orders`)
      dispatch(fetchOrdersSuccess(data.data))
      dispatch(isFetching(false))
    } catch (error) {
      dispatch(fetchOrdersError(error))
      dispatch(isFetching(false))
    }
  }
}

export const fetchOrder = uid => {
  return async dispatch => {
    try {
      dispatch(isFetching(true))
      const { data } = await axios.get(`${baseURl}/orders/${uid}`)
      dispatch(fetchOrderSuccess(data.data))
      dispatch(isFetching(false))
    } catch (error) {
      dispatch(fetchOrderError(error))
      dispatch(isFetching(false))
    }
  }
}

export const updateOrder = (uid, title, bookingDate, history) => {
  return async dispatch => {
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
    }
  }
}

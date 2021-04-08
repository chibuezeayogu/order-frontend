import axios from 'axios'
import actionTypes from './actionTypes'

const baseURl = 'http://localhost:3000/api/v1'

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

export const fetchOrders = () => {
  return async dispatch => {
    try {
      dispatch(isFetching(true))
      const { data } = await axios.get(`${baseURl}/orders`)
      dispatch(fetchOrdersSuccess(data.data))
    } catch (error) {
      dispatch(fetchOrdersError(error))
    }
    dispatch(isFetching(false))
  }
}

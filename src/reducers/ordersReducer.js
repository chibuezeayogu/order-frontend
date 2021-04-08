import actionTypes from '../actions/actionTypes'

const initialState = {
  isFetching: false,
  orders: [],
  order: {},
  error: ''
}

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload
      }
    case actionTypes.FETCH_ORDERS_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case actionTypes.FETCH_ORDER_SUCCESS:
      return {
        ...state,
        order: action.payload
      }
    case actionTypes.FETCH_ORDER_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case actionTypes.FETCH_ORDERS:
      return {
        ...state,
        isFetching: action.payload
      }
    default:
      return state
  }
}

export default ordersReducer

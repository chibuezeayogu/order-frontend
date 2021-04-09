import actionTypes from '../actions/actionTypes'

const initialState = {
  isFetching: false,
  isUpdating: false,
  isCreating: false,
  orders: [],
  order: {},
  error: ''
}

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload,
        isFetching: false
      }
    case actionTypes.FETCH_ORDER_SUCCESS:
      return {
        ...state,
        order: action.payload,
        isFetching: false
      }
    case actionTypes.FETCH_ORDERS_ERROR:
    case actionTypes.FETCH_ORDER_ERROR:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    case actionTypes.UPDATE_ORDER_SUCCESS:
    case actionTypes.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        order: action.payload
      }
    case actionTypes.UPDATE_ORDER_ERROR:
    case actionTypes.CREATE_ORDER_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case actionTypes.FETCH_ORDERS:
    case actionTypes.FETCH_ORDER:
      return {
        ...state,
        isFetching: action.payload
      }
    case actionTypes.UPDATE_ORDER:
      return {
        ...state,
        isUpdating: action.payload
      }
    case actionTypes.CREATE_ORDER:
      return {
        ...state,
        isCreating: action.payload
      }
    default:
      return state
  }
}

export default ordersReducer

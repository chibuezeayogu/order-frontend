import faker from 'faker'
import {
  fetchOrders,
  isFetching,
  fetchOrdersSuccess,
  fetchOrdersError,
  fetchOrder,
  fetchOrderError,
  fetchOrderSuccess,
  updateError,
  updateSuccess,
  updateOrder,
  isUpdating,
  isCreating,
  createOrder,
  createSuccess,
  createError
} from '../ordersAction'
import orders from './mockData/OrdersMock'

jest.mock('react-notify-toast', () => {
  const actual = jest.requireActual('react-notify-toast')
  Object.assign(actual, { notify: { show: jest.fn() } })
  return actual
})

const baseURl = process.env.BASE_URL
const token = faker.random.words()
const headers = {
  Authorization: `Bearer ${token}`,
  'Content-type': 'application/x-www-form-urlencoded'
}
const history = { push: jest.fn() }
const error = { message: 'Request failed with status code 500' }

describe('Orders Actions Creators', () => {
  describe('Fetch Orders', () => {
    let store
    beforeEach(() => {
      store = mockStore({ orders: [] })
    })

    afterEach(() => {
      store.clearActions()
      mockAxios.reset()
    })

    it('creates FETCH_ORDERS_SUCCESS when fetching orders has been done', async () => {
      mockAxios
        .onGet(`${baseURl}/orders`)
        .reply(200, { data: orders }, { ...headers })

      const expectedAction = [
        isFetching(true),
        fetchOrdersSuccess(orders),
        isFetching(false)
      ]
      await store.dispatch(fetchOrders(history))

      expect(store.getActions()).toEqual(expectedAction)
    })

    it('creates FETCH_ORDERS_ERROR when an error occurs', async () => {
      mockAxios.onGet(`${baseURl}/orders`).reply(500, { ...headers })

      const expectedAction = [
        isFetching(true),
        fetchOrdersError(error),
        isFetching(false)
      ]
      await store.dispatch(fetchOrders(history))

      expect(store.getActions()).toEqual(expectedAction)
    })
  })

  describe('Fetch Order', () => {
    let store
    beforeEach(() => {
      store = mockStore({ order: {} })
    })

    afterEach(() => {
      store.clearActions()
      mockAxios.reset()
    })

    it('creates FETCH_ORDER_SUCCESS when fetching order has been done', async () => {
      mockAxios
        .onGet(`${baseURl}/orders/hKlIKPoZc2xCKGTUKZK01`)
        .reply(200, { data: orders[0] }, { ...headers })

      const expectedAction = [
        isFetching(true),
        fetchOrderSuccess(orders[0]),
        isFetching(false)
      ]
      await store.dispatch(fetchOrder('hKlIKPoZc2xCKGTUKZK01', history))

      expect(store.getActions()).toEqual(expectedAction)
    })

    it('creates FETCH_ORDER_ERROR when an error occurs', async () => {
      mockAxios
        .onGet(`${baseURl}/orders/hKlIKPoZc2xCKGTUKZK01`)
        .reply(500, { ...headers })

      const expectedAction = [
        isFetching(true),
        fetchOrderError(error),
        isFetching(false)
      ]
      await store.dispatch(fetchOrder('hKlIKPoZc2xCKGTUKZK01', history))

      expect(store.getActions()).toEqual(expectedAction)
    })
  })

  describe('Update Order', () => {
    let store
    beforeEach(() => {
      store = mockStore({ order: {} })
    })

    afterEach(() => {
      store.clearActions()
      mockAxios.reset()
    })

    it('creates UPDATE_ORDER_SUCCESS when updating order has been done', async () => {
      mockAxios
        .onPut(`${baseURl}/orders/hKlIKPoZc2xCKGTUKZK01`)
        .reply(200, { data: orders[0] }, { ...headers })

      const expectedAction = [
        isUpdating(true),
        updateSuccess(orders[0]),
        isUpdating(false)
      ]

      await store.dispatch(
        updateOrder('hKlIKPoZc2xCKGTUKZK01', 'Updated title', new Date(), history)
      )

      expect(store.getActions()).toEqual(expectedAction)
    })

    it('creates UPDATE_ORDER_ERROR when an error occurs', async () => {
      mockAxios
        .onPut(`${baseURl}/orders/hKlIKPoZc2xCKGTUKZK01`)
        .reply(500, { ...headers })

      const expectedAction = [
        isUpdating(true),
        updateError(error),
        isUpdating(false)
      ]

      await store.dispatch(
        updateOrder('hKlIKPoZc2xCKGTUKZK01', 'Updated title', new Date(), history)
      )

      expect(store.getActions()).toEqual(expectedAction)
    })
  })

  describe('Create Order', () => {
    let store
    beforeEach(() => {
      store = mockStore({ order: {} })
    })

    afterEach(() => {
      store.clearActions()
      mockAxios.reset()
    })

    it('creates CREATE_ORDER_SUCCESS when creating order has been done', async () => {
      mockAxios
        .onPost(`${baseURl}/orders`, { ...orders[0] })
        .reply(200, { data: orders[0] }, { ...headers })

      const expectedAction = [
        isCreating(true),
        createSuccess(orders[0]),
        isCreating(false)
      ]

      await store.dispatch(createOrder(orders[0], history))

      expect(store.getActions()).toEqual(expectedAction)
    })

    it('creates CREATE_ORDER_ERROR when an error occurs', async () => {
      mockAxios.onPost(`${baseURl}/orders`).reply(500, { ...headers })

      const expectedAction = [
        isCreating(true),
        createError(error),
        isCreating(false)
      ]

      await store.dispatch(createOrder(orders[0], history))

      expect(store.getActions()).toEqual(expectedAction)
    })
  })
})

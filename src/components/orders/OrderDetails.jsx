/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrder } from '../../actions/ordersAction'
import Loader from '../common/Loader'
import Header from '../common/Header'

const OrderDetails = props => {
  const dispatch = useDispatch()
  const { order, isFetching } = useSelector(({ ordersReducer }) => ordersReducer)

  useEffect(() => {
    dispatch(fetchOrder())
  }, [dispatch])

  return (
    <div className="container">
      <Header {...props} />
      <div className="row title">
        <h2>Order Details</h2>
      </div>
      <div className="order-details">
        {isFetching ? (
          <Loader />
        ) : (
          <table className="table table-striped table-hover table-responsive">
            <tbody>
              <tr>
                <th>Title</th>
                <td>{order.title}</td>
              </tr>
              <tr>
                <th>Booking Date</th>
                <td>{order.title}</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>
                  <p className="center-table-content">{order.street}</p>
                    <p className="center-table-content">{order.city}</p>
                  <p className="center-table-content">{order.cuntry}</p>
                </td>
              </tr>
              <tr>
                <th>Customer</th>
                <td>
                  <p className="center-table-content">{order.name}</p>
                  <p className="center-table-content">{order.email}</p>
                  <p className="center-table-content">{order.phone}</p>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
      <div className="row edit-btn">
        <button type="button" className="btn btn-primary">
          Edit
        </button>
      </div>
    </div>
  )
}

export default OrderDetails

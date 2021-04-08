/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchOrder } from '../../actions/ordersAction'
import Loader from '../common/Loader'
import Header from '../common/Header'
import formatDate from '../../utils/formatDate'

const OrderDetails = props => {
  const dispatch = useDispatch()
  const { order, isFetching } = useSelector(({ ordersReducer }) => ordersReducer)
  console.log({ order, isFetching })

  useEffect(() => {
    const { id } = props.match.params
    dispatch(fetchOrder(id))
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
                <td>{order?.title}</td>
              </tr>
              <tr>
                <th>Booking Date</th>
                <td>{formatDate(order?.bookingDate)}</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>
                  <p className="center-table-content">{order?.address?.street}</p>
                  <p className="center-table-content">{order?.address?.city}</p>
                  <p className="center-table-content">{order?.address?.country}</p>
                </td>
              </tr>
              <tr>
                <th>Customer</th>
                <td>
                  <p className="center-table-content">{order?.customer?.name}</p>
                  <p className="center-table-content">{order?.customer?.email}</p>
                  <p className="center-table-content">{order?.customer?.phone}</p>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
      <div className="row edit-btn">
        <Link to={`/orders/${order.uid}/edit`} className="btn btn-primary">
          Edit
        </Link>
      </div>
    </div>
  )
}

export default OrderDetails

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrders } from '../../actions/ordersAction'
import boookingDateFormat from '../../utils/formatBookingDate'
import Loader from '../common/Loader'
import Header from '../common/Header'

const OrdersList = props => {
  const dispatch = useDispatch()
  const { orders, isFetching } = useSelector(({ ordersReducer }) => ordersReducer)

  useEffect(() => {
    dispatch(fetchOrders())
  }, [dispatch])

  return (
    <div className="container">
      <Header {...props} />
      {isFetching ? (
        <Loader />
      ) : (
        <table className="table table-striped table-hover table-responsive">
          <thead>
            <tr>
              <th scope="col" className="col=4">
                Title
              </th>
              <th scope="col" className="col=4">
                Booking Date
              </th>
              <th scope="col" className="col=4">
                Address
              </th>
              <th scope="col" className="col=4">
                Customer
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 &&
              orders.map((order, index) => {
                return (
                  <tr key={index}>
                    <th>{order?.title}</th>
                    <td>{boookingDateFormat(order.bookingDate)}</td>
                    <td>{order?.address?.street}</td>
                    <td>{order?.customer?.name}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default OrdersList

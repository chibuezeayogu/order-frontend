/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrders } from '../../actions/ordersAction'
import formatDate from '../../utils/formatDate'
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
      {isFetching || orders.length === 0 ? (
        <Loader />
      ) : (
        <table className="table table-striped table-hover table-responsive">
          <thead>
            <tr>
              <th scope="col" className="col-1 text-center">
                S/N
              </th>
              <th scope="col" className="col-4 text-center">
                Title
              </th>
              <th scope="col" className="col-2 text-center">
                Booking Date
              </th>
              <th scope="col" className="col-4 text-center">
                Address
              </th>
              <th scope="col" className="col-4 text-center">
                Customer
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 &&
              orders.map((order, index) => {
                return (
                  <tr key={index}>
                    <th className="text-center">{index + 1}</th>
                    <th className="text-center">
                      <Link to={`/orders/${order.uid}`} className="title-link">
                        {order.title}
                      </Link>
                    </th>
                    <td className="text-center">{formatDate(order.bookingDate)}</td>
                    <td className="text-center">{order.address?.street}</td>
                    <td className="text-center">{order.customer?.name}</td>
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

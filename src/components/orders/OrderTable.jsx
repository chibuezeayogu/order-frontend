/* eslint-disable react/no-array-index-key */
import React from 'react'
import { Link } from 'react-router-dom'
import formatDate from '../../utils/formatDate'

const OrdersTable = ({ currentOrders }) => {
  return (
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
        {currentOrders.map((order, index) => (
          <tr key={index + 1}>
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
        ))}
      </tbody>
    </table>
  )
}

export default OrdersTable

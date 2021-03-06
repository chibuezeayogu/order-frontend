/* eslint-disable no-multi-assign */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrders } from '../../actions/ordersAction'
import Pagination from '../common/Pagination'
import OrdersTable from './OrderTable'
import Loader from '../common/Loader'
import Header from '../common/Header'

const OrdersList = props => {
  const dispatch = useDispatch()
  const { orders, isFetching } = useSelector(({ ordersReducer }) => ordersReducer)
  const [ordersPerPage] = useState(15)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    dispatch(fetchOrders(props.history))
  }, [dispatch])

  const indexOfLastPage = currentPage * ordersPerPage
  const indexOfFirstOrder = indexOfLastPage - ordersPerPage
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastPage)
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className="container">
      <Header {...props} />
      <div className="row title mb-4">
        <h2>Orders</h2>
      </div>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <OrdersTable currentOrders={currentOrders} count={indexOfFirstOrder} />
          <Pagination
            ordersPerPage={ordersPerPage}
            totalOrders={orders.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  )
}

export default OrdersList

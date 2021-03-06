/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrder, updateOrder } from '../../actions/ordersAction'
import useFormInput from '../../utils/customReactHooks'
import TextInput from '../common/TextInput'
import DateInput from '../common/DateInput'
import Header from '../common/Header'
import Loader from '../common/Loader'
import ButtonWithLoading from '../common/ButtonWithLoading'

const EditOrder = props => {
  const dispatch = useDispatch()
  const { order, isFetching, isUpdating } = useSelector(
    ({ ordersReducer }) => ordersReducer
  )
  const title = useFormInput(order.title)
  const bookingDate = useFormInput(order.bookingDate)
  const { id } = props.match.params

  useEffect(() => {
    dispatch(fetchOrder(id))
  }, [dispatch])

  const handelSubmit = event => {
    event.preventDefault()
    dispatch(updateOrder(id, title.value, bookingDate.value, props.history))
  }

  return (
    <div className="container">
      <Header {...props} />
      <div className="row title">
        <h2>Edit Order</h2>
      </div>
      {isFetching ? (
        <Loader />
      ) : (
        <form onSubmit={handelSubmit} className="form-control">
          <div className="page-content">
            <table className="table table-striped table-hover table-responsive">
              <tbody>
                <tr>
                  <th>Title</th>
                  <td>
                    <div className="form-group">
                      <TextInput
                        value={title.value || order.title}
                        onChange={title.onChange}
                        text="Title"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Booking Date</th>
                  <td>
                    <div className="form-group">
                      <DateInput
                        value={bookingDate.value}
                        onChange={bookingDate.onChange}
                        text="BookingDate"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>
                    <p className="table-content">{order?.address?.street}</p>
                    <p className="table-content">{order?.address?.city}</p>
                    <p className="table-content">{order?.address?.country}</p>
                  </td>
                </tr>
                <tr>
                  <th>Customer</th>
                  <td>
                    <p className="table-content">{order?.customer?.name}</p>
                    <p className="table-content">{order?.customer?.email}</p>
                    <p className="table-content">{order?.customer?.phone}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row action-btn">
            <Link to={`/orders/${order.uid}`} className="btn btn-primary">
              Cancel
            </Link>
            <ButtonWithLoading text="Update" loading={isUpdating} />
          </div>
        </form>
      )}
    </div>
  )
}

export default EditOrder

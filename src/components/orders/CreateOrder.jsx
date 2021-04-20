/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { useDispatch } from 'react-redux'
import { createOrder } from '../../actions/ordersAction'
import useFormInput from '../../utils/customReactHooks'
import TextInput from '../common/TextInput'
import DateInput from '../common/DateInput'
import Header from '../common/Header'
import serializeData from '../../utils/serializeData'

const CreateOrder = props => {
  const dispatch = useDispatch()
  const title = useFormInput('')
  const bookingDate = useFormInput('')
  const street = useFormInput('')
  const city = useFormInput('')
  const country = useFormInput('')
  const name = useFormInput('')
  const email = useFormInput('')
  const phone = useFormInput('')

  const handelSubmit = event => {
    event.preventDefault()
    dispatch(
      createOrder(
        serializeData(title, bookingDate, street, city, country, name, email, phone),
        props.history
      )
    )
  }

  return (
    <div className="container">
      <Header {...props} />
      <div className="row title">
        <h2>Create Order</h2>
      </div>
      <form onSubmit={handelSubmit} className="form-control">
        <div className="page-content">
          <table className="table table-striped table-hover table-responsive">
            <tbody>
              <tr>
                <th>Title</th>
                <td>
                  <div className="form-group">
                    <TextInput {...title} text="Title" />
                  </div>
                </td>
              </tr>
              <tr>
                <th>Booking Date</th>
                <td>
                  <div className="form-group">
                    <DateInput {...bookingDate} text="Booking Date" />
                  </div>
                </td>
              </tr>
              <tr>
                <th>Address</th>
                <td>
                  <p className="table-content">
                    <TextInput {...street} text="Street" />
                  </p>
                  <p className="table-content">
                    <TextInput {...city} text="City" />
                  </p>
                  <p className="table-content">
                    <TextInput {...country} text="Country" />
                  </p>
                </td>
              </tr>
              <tr>
                <th>Customer</th>
                <td>
                  <p className="table-content">
                    <TextInput {...name} text="Name" />
                  </p>
                  <p className="table-content">
                    <TextInput {...email} text="Email" />
                  </p>
                  <p className="table-content">
                    <TextInput {...phone} text="Phone" />
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row action-btn">
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateOrder

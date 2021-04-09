import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signOut } from '../../actions/userActions'

const Header = ({ history }) => {
  const dispatch = useDispatch()
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 ">
        <li>
          <Link to="/orders" className="nav-link px-2 logout">
            Home
          </Link>
        </li>
      </ul>

      <div className="col-md-4 text-end">
        <Link to="/orders/create" className="btn px-2 logout mx-2">
          Create
        </Link>
        <button
          type="button"
          onClick={() => dispatch(signOut(history))}
          className="btn logout"
        >
          Logout
        </button>
      </div>
    </header>
  )
}
export default Header

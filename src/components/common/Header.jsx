import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signOut } from '../../actions/userActions'

const Header = ({ history }) => {
  const dispatch = useDispatch()
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a
        href="/"
        className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
      >
        <svg className="bi me-2" width="40" height="32">
          <use xlinkHref="#bootstrap" />
        </svg>
      </a>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <Link to="/orders" className="nav-link px-2 link-secondary">
            Home
          </Link>
        </li>
      </ul>

      <div className="col-md-3 text-end">
        <button
          type="button"
          onClick={() => dispatch(signOut(history))}
          className="btn btn-danger"
        >
          Logout
        </button>
      </div>
    </header>
  )
}
export default Header

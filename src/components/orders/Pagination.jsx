import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = ({ ordersPerPage, totalOrders, paginate }) => {
  const pageNumers = []

  for (let i = 1; i <= Math.ceil(totalOrders / ordersPerPage); i += 1) {
    pageNumers.push(i)
  }

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        {pageNumers.map(num => {
          return (
            <li className="page-item" key={num}>
              <Link
                onClick={() => paginate(num)}
                to={`/orders?page=${num}`}
                className="page-link"
              >
                {num}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Pagination

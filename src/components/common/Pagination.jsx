import React from 'react'

const Pagination = ({ ordersPerPage, totalOrders, paginate }) => {
  const pageNumers = []

  for (let i = 1; i <= Math.ceil(totalOrders / ordersPerPage); i += 1) {
    pageNumers.push(i)
  }

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center mb-5">
        {pageNumers.map(num => {
          return (
            <li className="page-item" key={num}>
              <button
                type="button"
                onClick={() => paginate(num)}
                className="page-link"
              >
                {num}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Pagination

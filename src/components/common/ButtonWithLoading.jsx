import React from 'react'

const ButtonWithLoading = ({ text, loading }) => {
  return (
    <button
      className="form-control btn btn-primary rounded submit px-3"
      type="submit"
      disabled={loading}
    >
      {loading ? (
        <>
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </>
      ) : (
        text
      )}
    </button>
  )
}

export default ButtonWithLoading

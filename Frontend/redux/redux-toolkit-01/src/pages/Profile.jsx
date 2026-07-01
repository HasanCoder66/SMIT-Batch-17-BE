import React from 'react'

const Profile = () => {
  return (
    <div>
      <h1>User Profile <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className="page-item disabled">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          <li className="page-item active"><a className="page-link" href="#"></a></li>
          <li className="page-item"><a className="page-link" href="#"></a></li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav></h1>
    </div>
  )
}

export default Profile

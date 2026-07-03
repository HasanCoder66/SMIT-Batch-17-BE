import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSingleUser } from '../redux/features/userSlice'

const Profile = () => {

  const {error, message,user, loading} = useSelector((state) => state.user)


  const dispatch = useDispatch()
  const params = useParams()

  // console.log(params.id);
  
  
  useEffect(() => {
    dispatch(getSingleUser(params.id))
  },[])
  
  if(loading) return  <h1>Loading....</h1>
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


      <div>
        <p>{user?.userName}</p>
        <p>{user?.email}</p>
        <p>{user?.age}</p>
        <p>{user?._id}</p>
      </div>
    </div>
  )
}

export default Profile

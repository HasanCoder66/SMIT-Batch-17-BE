import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {

    const params = useParams()
    console.log(params);
    

    useEffect(() => {
        // console.log(fetch(`localhost:8500/api/user/${params.username}`));
        
    })
  return (
    <div>
      <h1>This is my profile page</h1>
    </div>
  )
}

export default Profile

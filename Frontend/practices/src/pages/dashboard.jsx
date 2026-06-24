import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserCard from '../components/UserCard';

const dashboard = () => {

    const [allUsers, setAllUsers] = useState([])

    console.log(allUsers);
    const apiCall =  async () => {
       let apiRes = await axios.get("https://auth-be-five.vercel.app/api/user")


       setAllUsers(apiRes.data.data)
    } 

    useEffect(() => {
apiCall()
    }, [])


  return (
<>
<h1 className='p-3 rounded shadow-md font-bold '>Dashboard</h1>

    <div className='p-4 flex-wrap flex'>
    {/* / userCard   */}
    {/* mappping */}

    {allUsers && allUsers.length > 0 && (
        allUsers.map((user) => (
            <UserCard user={user} />
        ))
    )}
    </div>

</>
  )
}

export default dashboard

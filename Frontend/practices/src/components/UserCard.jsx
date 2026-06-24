import React from 'react'

const UserCard = ({user}) => {
  return (
    <div className='p-4 w-[250px] h-[250px] shadow rounded '>
      <h1>Email : {user.email}</h1>
      <h2>Username : {user.userName}</h2>
      <p>age : {user.age}</p>
      <p>is Verifed : {user.isVerified}</p>
    </div>
  )
}

export default UserCard

import React from 'react'

const UserCard = ({user}) => {
// console.log(user);

let hairArr = Object.values(user.hair)

console.log(hairArr);

    

  return (
    <div className='shadow-2xl p-4 rounded-2xl w-[300px] h-[300px]'>
      <p>{user?.firstName} {user?.lastName}</p>
      <p>{user?.email}</p>
      <p>{user?.username}</p>
      <p>{user?.phone}</p>
      <p>{user?.role}</p>

      

{hairArr?.map((userHairArr, idx) => (
   <button className='p-3 bg-red-300 m-2' key={idx}>{userHairArr}</button>
    
))}
    </div>
  )
}

export default UserCard

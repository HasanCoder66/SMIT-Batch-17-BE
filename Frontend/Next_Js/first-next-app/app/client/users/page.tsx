"use client"

// import React, { useState } from 'react'

// const ClientCmp = () => {
//     const [count, setCount] = useState(0)
//   return (
//     <div>
//         this is client component (CSR)

// <h1>count {count}</h1>

// <button onClick={() => setCount(count + 1 )}>inc</button>

//     </div>
//   )
// }

// export default ClientCmp



import React, { useEffect, useState } from 'react'

const ClientCmp = () => {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
const response = await fetch(`https://dummyjson.com/users`);

const result = await response.json()
console.log(result);

setUsers(result.users)


    }

    useEffect(() => {
        getUsers()
    }, [])
  return (
    <div>This is a client component

        <div>
            {users && users.length > 0 && users.map((user:any) => <p key={user.id}>{user.firstName} {user.lastName}</p>)}
        </div>
    </div>
  )
}

export default ClientCmp
import React, { useEffect, useState } from 'react'
import UserCard from './component/UserCard'
import {users} from '../src/data.js'

const App = () => {

  // console.log(users);

  const [users, setUsers] = useState([])
  console.log(users);
  
//  const [count,setCount] = useState(0)

  const getData = async () => {
 let apiResponse =  await fetch("https://auth-be-five.vercel.app/api/user");
    let result = await apiResponse.json()

    // console.log(result.users);
    setUsers(result.users)
  }


  useEffect(() => {
    
    getData()
  },[])

//   function loadApp (){

// setCount( count + 1)
//   }

  // loadApp()
  

  return (
    <div className='flex flex-wrap justify-around'>
      
      {/* <h1>{count}</h1>

      <button onClick={loadApp}>add 1</button> */}
      {users && users.length > 0 && users.map((user) => (
        <UserCard user={user} key={user?.id} />
      ))}
      
    </div>
  )
}

export default App

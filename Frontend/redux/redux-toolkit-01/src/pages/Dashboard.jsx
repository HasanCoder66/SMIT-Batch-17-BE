import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
    const {loading, error, message, token} = useSelector((state) => state.auth )

    console.log("loading.. ", loading);
    console.log("error.. ", error);
    
  return (
    <div>
      dashboard
    </div>
  )
}

export default Dashboard

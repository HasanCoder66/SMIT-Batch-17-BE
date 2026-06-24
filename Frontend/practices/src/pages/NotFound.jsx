import React from 'react'
import { useNavigate } from 'react-router-dom'
const NotFound = () => {

    const navigate = useNavigate()

  return (
    <div>
      <h1>
        404 Not Found  Page
      </h1>
      <button onClick={() => {navigate("/")}}>go to dashboard</button>
    </div>
  )
}

export default NotFound

import React, { useState } from 'react'
import Button from '../components/Button'

const Home = () => {
  const [count, setCount] = useState(0)


  const updateCount = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>{count}</h1>

      <Button count={count} text={"add"} handler={updateCount} />

    </div>
  )
}

export default Home
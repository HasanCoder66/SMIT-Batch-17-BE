import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slices/counterSlice'

const About = () => {
const count = useSelector((state) => state.counter)
const dispatch = useDispatch()
  return (
    <div>
      <h2>Count is : {count}</h2>

      <button onClick={() => {
        dispatch(increment())
      }}>Increment</button>
      <button onClick={() => {
        dispatch(decrement())
      }}>Decrement</button>
      <h1>About Page</h1>

      <button>Go to Home</button>
    </div>
  )
}

export default About

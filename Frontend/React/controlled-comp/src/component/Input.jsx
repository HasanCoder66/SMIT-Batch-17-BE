import React from 'react'

const Input = ({type, placeholder, value, handler,name}) => {
  return (
    <div className='mt-4 mb-4'>
      <input value={value} onChange={(event) => {
        console.log(event.target.value);
      handler((prev) => ({...prev, [name]:event.target.value}))
      }} type={type} placeholder={placeholder} value={value} className='border border-2 pl-2 w-full rounded'/>
    </div>
  )
}

export default Input

import React from 'react'
import Input from './Input'
import Button from './Button'

const SignupForm = () => {
  return (
    <div className=' w-[350px] rounded-2xl p-4 shadow-2xl'>
      <h1 className='font-bold text-3xl text-center'>
        Signup Form!
      </h1>

      <div className="inputSections">
        <Input />
        <Input />
        <Input />

        <div className=''>
            <Button />
        </div>
      </div>
    </div>
  )
}

export default SignupForm

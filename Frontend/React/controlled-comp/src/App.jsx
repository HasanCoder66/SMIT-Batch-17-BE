import React, { useState } from 'react'
import Input from './component/Input'

const App = () => {

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  })




  const signupHandler = () => {
    console.log("signup handler is working...");

    console.log("ye tmhara submitted form..", form);

    setForm({
      username  :"",
      email :"",
      password : ""
    })


  }



  // const arrReturn = () => {

  //   let a = 12;
  //   let foo = () => {}

  //   return [a, foo]


  // }

  // const [count2, setCount2] = arrReturn()

  // console.log(count2);




  return (
    <div className="p-4 shadow-2xl w-[300px]">
      <h1 className='mt-2 mb-2 font-bold text-2xl'>Signup Form</h1>

      <div className='mt-4 mb-4'>
        <Input type={"text"} placeholder={"enter your name"} value={form.username} handler={setForm} name="username" />

        <Input type={"text"} placeholder={"enter your email"} value={form.email} handler={setForm} name="email" />

        <Input type={"text"} placeholder={"enter your password"} value={form.password} handler={setForm} name="password" />

      </div>

      <button onClick={signupHandler} className='bg-blue-500 py-2 px-5 text-white font-bold cursor-pointer rounded'>Signup</button>

    </div>
  )
}

export default App

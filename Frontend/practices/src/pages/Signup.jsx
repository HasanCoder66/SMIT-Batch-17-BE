import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { Box, Paper, Typography } from '@mui/material'
import axios from 'axios'
const Signup = () => {

  const [form, setForm] = useState({
    email: "",
    password: "",
    userName: "",
    age: 0
  })


  console.log("form", typeof +form.age);

  const getInputValues = (e, field) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }


  const signupHandler = async () => {
    console.log("signup handler is working...", form);

    let apiRes = await axios.post(`https://auth-be-five.vercel.app/api/auth/signup`, form)

    
    const {data} = apiRes;
    console.log("api response data -->", data);

    
  }

  return (
    <Box sx={{
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      width: "500px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      borderRadius: "15px"

    }}>

      <Typography sx={{
        fontSize: "32px",
        fontWeight: "bold"
      }}>Signup Form </Typography>

      <Input field="email" type={"email"} label={"Enter your email"} onChangeHandler={getInputValues} />

      <Input field="password" type={"password"} label={"Enter your password"} onChangeHandler={getInputValues} />

      <Input field="userName" type={"text"
      } label={"Enter your username"} onChangeHandler={getInputValues} />

      <Input field="age" type={"number"} label={"Enter your age"} onChangeHandler={getInputValues} />


      <Box className="mt-5">
        <Button text={"signup"} signupHandler={signupHandler} />
      </Box>

    </Box>
  )
}

export default Signup

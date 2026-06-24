import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { Box, Paper, Typography } from '@mui/material'
import axios from 'axios'
// import '../index.css'

const Login = () => {

  const [form, setForm] = useState({
    email: "",
    password: "",
  })
//   const [loading, setLoading] = useState(false)



  const getInputValues = (e, field) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }


  const loginHandler = async () => {
    console.log("login handler is working...", form);

    let apiRes = await axios.post(`https://auth-be-five.vercel.app/api/auth/login`, form)

    // setLoading(true)
    const token = apiRes.data.token;
    localStorage.setItem("token", JSON.stringify(token))
 
    
    // if(status){
    //   setLoading(false)
    // }
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
      }}>Login Form </Typography>

      <Input field="email" type={"email"} label={"Enter your email"} onChangeHandler={getInputValues} />

      <Input field="password" type={"password"} label={"Enter your password"} onChangeHandler={getInputValues} />


      <Box className="mt-5">
        <Button text={"login"} handler={loginHandler} />
      </Box>

    </Box>
  )
}

export default Login

import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRouting = ({children}) => {
  
  let isAuthenticatedUser = JSON.parse(localStorage.getItem("token"));
console.log("Token -->",isAuthenticatedUser, );

  if(!isAuthenticatedUser){
    return <Navigate to={"/login"} />
  }

  return children
}

export default ProtectedRouting

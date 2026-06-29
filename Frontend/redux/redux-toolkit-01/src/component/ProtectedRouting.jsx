import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRouting = ({children}) => {
const {token} = useSelector((state) => state.auth)

if(!token){
    return <Navigate to={"/login"} />
}
    return children
}

export default ProtectedRouting

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import ProtectedRouting from './component/ProtectedRouting'
import PublicRoute from './component/PublicRoute'
import Profile from './pages/Profile'

const App = () => {
  return (
    <Routes>

      <Route path="/login"  element={<PublicRoute>
        <Login />
      </PublicRoute>} />
      <Route path='/profile/:id' element={<Profile />}/>
      <Route path="/signup"  element={<Signup />} />
      <Route path="/"  element={<ProtectedRouting>
        <Dashboard />
      </ProtectedRouting>} />


    </Routes>
  )
}

export default App

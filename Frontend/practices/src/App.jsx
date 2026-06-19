import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
const App = () => {
  return (

    <Routes>

<Route path='/home' element={<Home />}/>
<Route path='/about' element={<About />}/>
<Route path='/profile/:username' element={<Profile />}/>
<Route path='/signup' element={<Signup />}/>

  </Routes>

    // <div>
    //  <Navbar />

    //  <div className='flex justify-around mt-5 flex-wrap mb-5'>
    //   <Card />
    //   <Card />
    //   <Card />
    //   <Card />
    //   <Card />
    //   <Card />
    //   <Card />
    //  </div>
    // </div>
  )
}

export default App

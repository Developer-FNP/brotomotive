import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import UsedEngine from './pages/UsedEngine/UsedEngine'
import Navbar from './components/Navbar'
import Transmission from './pages/Transmission/Transmission'

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/engine' element={<UsedEngine />} />
        <Route path='/transmission' element={<Transmission />} />
      </Routes>
    </>
  )
}

export default App

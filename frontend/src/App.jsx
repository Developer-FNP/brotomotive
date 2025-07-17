import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import UsedEngine from './pages/UsedEngine/UsedEngine'
import Navbar from './components/Navbar'
import Transmission from './pages/Transmission/Transmission'
import Footer from './components/Footer'
import TruckParts from './pages/TruckParts/TruckParts'
import Contact from './pages/Contact'
import About from './pages/About/About'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'


const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/engine' element={<UsedEngine />} />
        <Route path='/transmission' element={<Transmission />} />
        <Route path='/truck-parts' element={<TruckParts />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/terms' element={<Terms />} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App

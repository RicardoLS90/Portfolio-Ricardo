import { HashRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Aboutme from './components/Aboutme'
import Habilities from './components/Habilities'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {


  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Aboutme />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} /> 
        </Routes>
        < Contact />
      </div>
    </HashRouter>
  )
}

export default App

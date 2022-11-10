import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Aboutme from './components/Aboutme'
import Habilities from './components/Habilities'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  

  return (
    <div className="App">
      < Navbar />
      <Home />
      <Aboutme />
      <Habilities />
      <Portfolio />
      <Contact/>
    </div>
  )
}

export default App

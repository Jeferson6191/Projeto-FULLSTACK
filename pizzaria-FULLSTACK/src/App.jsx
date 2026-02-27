import React from 'react'
import './App.css'
import Register from './pages/Register'
import Logar from './pages/Logar'
import LandingPage from './pages/LandingPage'
import Admin from './pages/Admin'



function App() {
    
  return (
   <div>
    <LandingPage/>
    <Register/>
    <Logar/>
    <Admin/>
   </div>
  )
}

export default App

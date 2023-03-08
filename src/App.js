import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './register/Register'
import Navbar from './navbar/Navbar'
import './navbar/Navbar.css'
import './App.css'
import './register/Register.css'
// import { TouchableNativeFeedback } from 'react-native'

const App = () => {
  return (
    <div className="App">
      <Router>
  <Navbar />
  <Routes>
    <Route path="/login" element={<Register />} />
    <Route path="/" element={<Login />} />
  </Routes>
</Router>
    </div>
  )
}

export default App






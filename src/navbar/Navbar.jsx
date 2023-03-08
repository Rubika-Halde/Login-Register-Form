import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
        <h2>Reddit</h2>
        </div>
        <div className='navbar-head'>
        <Link to="/">Login</Link>
        <Link to="/login">Register</Link>
        </div>
    </div>
  )
}

export default Navbar

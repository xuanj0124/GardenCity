import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (

    <header>
      <p className='title'>Garden City</p>
      <p className='slogan'>Make your life <b>colorful</b>.</p>

      <nav className='header-nav'>
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/products">Flowers</Link>
        <Link className='link' to="/about">About</Link>
        <Link className='link' to="/contact">Contact</Link>
        <Link className='link' to="/login">Login</Link>
      </nav>

    </header>

  )
}

export default Navbar
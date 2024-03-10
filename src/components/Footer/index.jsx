import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <nav className='footer-nav'>
                <Link className='footer-link' to="/">Shipping</Link>
                <Link className='footer-link' to="/">Return</Link>
                <Link className='footer-link' to="/">Contact</Link>
                <Link className='footer-link' to="/">Help</Link>
            </nav>
        </footer>
    )
}

export default Footer
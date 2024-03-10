import React from 'react'
import { Link } from 'react-router-dom'
import './dropdown.css'

const Dropdown = () => {
    return (
        <select class="dropdown">
        <option value="">Shop By Type</option>
        <option value="rose"><Link className='link' to="/">Rose</Link></option>
        <option value="Peony"><Link className='link' to="/">Peony</Link></option>
        <option value="Daisy"><Link className='link' to="/">Daisy</Link></option>
        <option value="lily"><Link className='link' to="/">Lily</Link>y</option>
      </select>
    )
  }

export default Dropdown
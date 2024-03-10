import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './register.css'

const Register = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <div className="auto-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="firstname">First name</label>
        <input value={firstname} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First name" id="firstname" name="firstname" />
        <label htmlFor="lastname">Last name</label>
        <input value={lastname} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last name" id="lastname" name="lastname" />
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email address" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
        <button type="submit">Log In</button>
      </form>
      <Link to='/login'>Already have an account? Login here</Link>
    </div>
  )
}

export default Register
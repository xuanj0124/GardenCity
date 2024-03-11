import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="auto-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email address" id="email" name="email" required/>
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" required/>
                <button type="submit">Log In</button>
            </form>
            <Link id='registerLink' to='/register'>Don't have an account? Register here</Link>
        </div>
    )
}

export default Login
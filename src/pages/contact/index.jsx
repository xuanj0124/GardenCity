import React, { useState } from 'react';
import './contact.css';

const Contact = () => {

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="contact-form-container">
            <h2 id='contact-form-title'>Contact Us</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="firstname">First name</label>
                <input value={firstname} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First name" id="firstname" name="firstname" required/>
                <label htmlFor="lastname">Last name</label>
                <input value={lastname} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last name" id="lastname" name="lastname" required/>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email address" id="email" name="email" required/>
                <label htmlFor="password">Password</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" placeholder="Phone number (Optional)" id="phone" name="phone" />

                <input
                    type='text'
                    id="contact"
                    placeholder="Please enter the messages here"
                    required
                // value={this.state.value}
                // onChange={this.handleChange}
                />
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default Contact
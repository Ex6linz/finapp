// Register.jsx

import React, { useState } from 'react';
import axios from 'axios';  // Importuj axios


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Sprawdź, czy hasła są takie same
        if(password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        try {
            // Wysyłanie żądania POST do endpointu rejestracji
            const response = await axios.post('http://localhost:8000/api/register', {
                email: email,
                password: password,
            });

            console.log(response.data);
            alert("Registration successful!");
        } catch (error) {
            console.error("Registration failed:", error);
            alert("Registration failed!");
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
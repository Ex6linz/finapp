// Login.jsx

import React, { useState } from 'react';
import axios from 'axios';  // Upewnij się, że axios jest zainstalowany

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Wysyłanie żądania POST do endpointu logowania
            const response = await axios.post('http://localhost:8000/api/login', {
                email: email,
                password: password,
            });

            console.log(response.data);
            alert("Login successful!");
            // Możesz tutaj dodać logikę przekierowania lub zarządzania stanem logowania
        } catch (error) {
            console.error("Login failed:", error);
            alert("Login failed!");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
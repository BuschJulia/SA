
import React from 'react';

const LoginForm = () => {
    return (
        <div className="login-form">
            <h2>Login</h2>
            <form>
                <label>Email:</label>
                <input type="email" required />
                <label>Password:</label>
                <input type="password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;

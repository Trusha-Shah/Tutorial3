import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Registration = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            navigate('/profile', { state: { firstName, lastName, email } });
        }
    };

    const validateForm = () => {
        let isValid = true;
        let newErrors = {};

        if (!firstName || !/^[a-zA-Z]+$/.test(firstName)) {
            newErrors.firstName = "Please enter a valid first name";
            isValid = false;
        }

        if (!lastName || !/^[a-zA-Z]+$/.test(lastName)) {
            newErrors.lastName = "Please enter a valid last name";
            isValid = false;
        }

        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Please enter a valid email";
            isValid = false;
        }

        if (!password || password.length < 8 || !/^[A-Za-z0-9_@./#&+-]*$/.test(password)) {
            newErrors.password = "Password must be alphanumeric and special characters only, minimum limit is 8 characters";
            isValid = false;
        }

        if (password !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    return (
        <div className="form-container">
            <h1>Register</h1>
            <div className="form-section">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        {errors.firstName && <div className="error">{errors.firstName}</div>}
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        {errors.lastName && <div className="error">{errors.lastName}</div>}
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        {errors.email && <div className="error">{errors.email}</div>}
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        {errors.password && <div className="error">{errors.password}</div>}
                    </div>
                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
                    </div>
                    <button className="btn" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Registration;

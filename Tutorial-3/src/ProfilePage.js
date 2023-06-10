import React from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const ProfilePage = () => {
    const location = useLocation();
    const { firstName, lastName, email } = location.state || {};

    return (
        <div className="form-container">
            <h1>Profile Page</h1>
            <div className="form-section">
                <h2>User Information:</h2>
                <div className="form-group">
                    <label>First Name:</label>
                    <p>{firstName || 'Not provided'}</p>
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <p>{lastName || 'Not provided'}</p>
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <p>{email || 'Not provided'}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;

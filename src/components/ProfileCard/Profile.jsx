import React from 'react';
import './Profile.css';
import avatar from '../../assets/img.png'; // Replace with actual image

const Profile = () => {
    return (
        <div className="card">
            <div className="profile">
                <img src={avatar} alt="Avatar" className="avatar" />
            </div>
            <h2>Francis Mwangi</h2>
            <p className="role">Software Engineer</p>
            <p className="description">
               A fullstack developer proficient in java,Spring boot,React js adn Golang.Building practical tools for real-world problems.
            </p>
            <button className="email-btn">frankmwangi8118@gmail.com</button>
            <div className="icons">
                <i className="fab fa-twitter"></i>
                <i className="fab fa-dribbble"></i>
                <i className="fab fa-github"></i>
                <i className="fab fa-dev"></i>
            </div>
        </div>
    );
};

export default Profile;

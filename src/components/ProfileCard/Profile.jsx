import React from 'react';
import './Profile.css';
import avatar from '../../assets/img.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitter,
    faDribbble,
    faGithub,
    faDev, faMedium, faMediumM, faLinkedin
} from '@fortawesome/free-brands-svg-icons';

const Profile = () => {
    return (
        <div className="card">
            <div className="profile">
                <img src={avatar} alt="Francis Mwangi" className="avatar" />
            </div>
            <h2>Francis Mwangi</h2>
            <p className="role">Software Engineer</p>
            <p className="description">
                Full-stack developer proficient in Java, Spring Boot, React.js, and Golang. Passionate about building practical tools that solve real-world problems.
            </p>
            <button className="email-btn">frankmwangi8118@gmail.com</button>
            <div className="icons">
                <a href="https://twitter.com/FrankMwang76445" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://github.com/Frankmwangi8118" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://medium.com/@MwangiKinyanjui" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faMedium} />
                </a>
                <a href="https://www.linkedin.com/in/frank-mwangi-dev/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>

            </div>
        </div>
    );
};

export default Profile;

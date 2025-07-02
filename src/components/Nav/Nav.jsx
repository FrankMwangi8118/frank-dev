import "./Nav.css";

const Nav = () => {
    return (
        <div className="nav-container">
            <nav className="nav">
                <div className="logo-container">
                    <p>&lt;/frank&gt;</p>
                </div>

                <div className="link-container">
                    <ul>
                        <li>Home</li>
                        <li>Projects</li>
                        <li>Experience</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className="nav-btn">
                    <button className="dark-btn">🌙</button>
                    <button>Let’s Talk</button>
                </div>
            </nav>
        </div>
    );
};

export default Nav;

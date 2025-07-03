import "./Home.css";
import Nav from "../components/Nav/Nav.jsx";
import Profile from "../components/ProfileCard/Profile.jsx";
import Service from "../components/Service/Service.jsx";
import Experience from "../components/experience/Experience.jsx";

const Home = () => {
    return (
        <>
            <Nav />
            <div className="main--container">
                <div className="main-container">
                <div className="column">
                    <Profile />

                </div>
                <div className="column1">
                    <>
                    <Experience />
                    </>
                </div>
                <div className="column1">
                    {/* Insert something like RecentProjects */}
                </div>
                </div>
                <Service/>
            </div>
        </>
    );
};

export default Home;

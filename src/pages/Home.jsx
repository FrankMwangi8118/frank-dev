import "./Home.css";
import Nav from "../components/Nav/Nav.jsx";
import Profile from "../components/ProfileCard/Profile.jsx";
import Service from "../components/Service/Service.jsx";
import Experience from "../components/experience/Experience.jsx";
import Stack from "../components/stack/Stack.jsx";

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
                    <div className={"column1-content"}>
                    <Experience />
                    <Stack/>
                    </div>
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

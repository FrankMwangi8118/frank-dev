import "./Home.css";
import Nav from "../components/Nav/Nav.jsx";
import Profile from "../components/ProfileCard/Profile.jsx";

const Home = () => {
    return (
        <>
            <Nav/>
            <div className={"main-container"}>
            <Profile/>
            </div>
        </>
    );

}
export default Home;
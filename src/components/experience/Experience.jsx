import './Experience.css'
import neuro from '../../assets/neuro.png'
import teke from '../../assets/teke.png'
import kendrick from "../../assets/kendrick.png"
import freematricks from "../../assets/freematric.png"
import ExperienceCard from "./ExperienceCard/ExperienceCard.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
const Experience = () => {
    const data = [
        {   index: 1,
            company: "neoro-ryhm solutions",
            logo: neuro,
            role: "Backend Engineer",
            from: "Jan 2023",
            to: "Till Today",
        },
        {   index: 2,
            company: "kendrick designs",
            logo: kendrick,
            role: "fullstack Engineer",
            from: "Aug 2022",
            to: "Dec 2022",
        },
        {
            index: 3,
            company: "tech teke ",
            logo: teke,
            role: "Cloud Engineer",
            from: "Aug 2022",
            to: "Dec 2022",
        },
        {
            index: 4,
            company: "freematrics ",
            logo: freematricks,
            role: "backend Engineer",
            from: "Aug 2022",
            to: "Dec 2022",
        },
    ];
    return (
        <div className="cont2">
            <div className={"wrap"}>
                <div className={"exp-header"}>
                    <p>experience</p>

                </div>

            <div className="scroll-box">
                <div className="experience-wrapper">
                    {data.map(item => (
                        <ExperienceCard data={item} key={"a" + item.index} />
                    ))}
                    {data.map(item => (
                        <ExperienceCard data={item} key={"b" + item.index} />
                    ))}
                </div>
            </div>
            </div>
        </div>
    );

}
export default Experience;
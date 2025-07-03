import "./Service.css"
import web from "../../assets/web.png"
import sys from "../../assets/sys.png"
import cloud from "../../assets/cloud.png"
import database from "../../assets/database.png"
import ServiceCard from "../ServiceCard/ServiceCard.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faArrows} from "@fortawesome/free-solid-svg-icons";

const Service = () => {
    const data = [
        {
            index: "1",
            icon: web,
            name: "website design"
        },
        {
            index: "2",
            icon: sys,
            name: "sys maintenance"
        },
        {
            index: "3",
            icon: cloud,
            name: "cloud"
        },
        {
            index: "4",
            icon: database,
            name: "database design"
        },
    ]
    return (
        <div className="service-container">
<div className={"service-header"}>
    <p className={"__header"}>services offered</p>
    <p className={"__action"}>all services <FontAwesomeIcon icon={faArrowRight}/></p>
</div>
        <div className={"service-containers"}>
            {data.map(item => (
                <ServiceCard data={item} key={item.index} index={item.index} />
            ))}
        </div>
        </div>

    );
}
export default Service;
import './Stack.css';
import java from "../../assets/java.png";
import react from "../../assets/react.png";
import cloud from "../../assets/cloud.png"
import golang from "../../assets/golang.png";
import springboot from "../../assets/springboot.png"
import javascript from "../../assets/javascript.png";
import StackCard from "./StackCard/StackCard.jsx";

const Stack = () => {
    const data = [
        {index: 1, name: "Java", icon: java},
        {index: 2, name: "javascript", icon: javascript},
        {index: 3, name: "golang", icon: golang},
        {index: 4, name: "spring", icon: springboot},
        {index: 5, name: "react js", icon: react},
        {index: 6, name: "cloud", icon: cloud}
    ];

    return (
        <div className="stack-wrapper">
            <p className="stack-title">My Expert Area</p>
            <div className="stack-grid">
                {data.map(item => (
                    <StackCard data={item} key={item.index}/>
                ))}
            </div>
        </div>
    );
};

export default Stack;

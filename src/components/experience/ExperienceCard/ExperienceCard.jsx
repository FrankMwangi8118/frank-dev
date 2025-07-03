import "./ExperienceCard.css"
const ExperienceCard = ({data}) => {
    return (
        <div className={"expCard-container"}>
<div className={"left-side"}>
            <div className="timeline">
                <p>{data.from}-{data.to}</p>
            </div>
            <div className="expcard-logo">
                <img className="exp-card-img" src={data.logo} alt="" />

            </div>
</div>
            <div className="exp-company">
                <div className="company-name">
                    <p>{data.company}</p>

                </div>
                <div className="exp-role">
                    <p>{data.role}</p>

                </div>

            </div>

        </div>
    );
}
export default ExperienceCard;
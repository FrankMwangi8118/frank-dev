import "./ServiceCard.css";

const ServiceCard = ({ data }) => {
    return (
        <div className="card-cont">
            <img src={data.icon} alt={data.name} />
            <p className="service-name">{data.name}</p>
        </div>
    );
};
export default ServiceCard;

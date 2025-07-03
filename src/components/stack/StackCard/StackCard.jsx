import "./StackCard.css"
const StackCard = ({data}) => {

    return(
        <>
            <div className={"stack-card-wrapper"}>
            <img src={data.icon} alt={data.title}/>
                <p>{data.name}</p>
            </div>
        </>
    );

}
export default StackCard;
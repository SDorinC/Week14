import "./styles.css";
import EpisodeContainer from "../EpisodeContainer";

const InfoContainer = ({episodes}) => {
    const arr = [];

    for (let i = 0; i < episodes.length; i++) {
        arr.push(<EpisodeContainer key={i} id={i} data={episodes[i]}/>);
    }

    return (
        <div className="info-container">
            {arr}
        </div>
    );
};

export default InfoContainer;
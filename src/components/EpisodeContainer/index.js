import "./styles.css";
import Info from "../Info";

const EpisodeContainer = ({data, id}) => {
    return (
        <div className="episode-container">
            <Info title={data.name}/>
            <Info title={data.air_date}/>
            <Info title={data.episode}/>
            <Info title={data.characters.length} id={id}/>
        </div>
    );
};

export default EpisodeContainer;
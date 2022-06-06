import "./styles.css";
import {useContext} from "react";
import {CharacterInfo} from "../../App";

const Info = ({title, id}) => {
    const {setBackground, setSelectedEpisode} = useContext(CharacterInfo);
    const click = () => {
        if (typeof id === "undefined") {
            return;
        } else {
            setBackground("linear-gradient(darkseagreen, black 50%)");
            setSelectedEpisode(id);
        }
    }

    return (
        <div className="information">
            <span onClick={click}>{title}</span>
        </div>
    );
};

export default Info;
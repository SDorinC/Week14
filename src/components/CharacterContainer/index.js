import "./styles.css";
import Character from "../Character";
import {useEffect, useRef} from "react";

const CharacterContainer = ({background, charArr}) => {
    let allCharsArr = [];
    const ref = useRef();

    useEffect(() => {
        setTimeout(() => {
            ref.current.scrollTo(0, 0);
        }, 150)
    });

    charArr.forEach(character => {
        allCharsArr.push(<Character key={character.id} image={character.image} name={character.name}/>)
    })

    return (
        <div ref={ref} className="character-container" style={{backgroundImage: background}}>
            {allCharsArr}
        </div>
    );
};

export default CharacterContainer;
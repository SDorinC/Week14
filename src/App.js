import "./App.css";
import InfoContainer from "./components/InfoContainer";
import CharacterContainer from "./components/CharacterContainer";
import {createContext, useEffect, useState} from "react";

export const CharacterInfo = createContext(0);

function App() {
    let charactersList = [];
    let selectedCharactersArr = [];
    const [episodesArr, setEpisodesArr] = useState([]);
    const [charactersArr, setCharactersArr] = useState([]);
    const [background, setBackground] = useState("url('https://wallpapercave.com/wp/wp5063431.jpg')")
    const [selectedEpisode, setSelectedEpisode] = useState(null);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/episode")
            .then(response => {
                return response.json();
            }).then(response => {
            setEpisodesArr(response.results)
        });
    }, [])

    useEffect(() => {
        for (let i = 0; i < episodesArr.length; i++) {
            if (selectedEpisode === i) {
                selectedCharactersArr = episodesArr[i].characters;
                selectedCharactersArr.forEach(character => {
                    fetch(character).then(response => {
                        return response.json()
                    }).then(response => {
                        charactersList.push(response);
                    })
                })
            }
        }
        setTimeout(() => {
            setCharactersArr(charactersList);
        }, 150)
    }, [selectedEpisode])

    return (
        <CharacterInfo.Provider value={{setBackground, setSelectedEpisode}}>
            <div className="mainContainer">
                <InfoContainer episodes={episodesArr}/>
                <CharacterContainer background={background} charArr={charactersArr}/>
            </div>
        </CharacterInfo.Provider>
    );
}

export default App;
import "./styles.css";

const Character = ({image, name}) => {
    return (
        <div>
            <figure id="figure">
                <img src={image}/>
                <div id="name">{name}</div>
            </figure>
        </div>
    );
};

export default Character;
import React from "react";
import getImage from "../Game-logic/get-gameover-image";
import './game-over.css';

const Gameover = (props) => {
    const {outcome, onRestart, options, selectedOption} = props;

    let image = getImage(options, selectedOption, outcome);

    return (
        <div id="gameover">
            <h1>{outcome}</h1>
            <img src={image} alt="" style={{ width: "200px", height: "auto" }}/>
            <button onClick={onRestart}>Replay</button>
        </div>
    );
}

export default Gameover;

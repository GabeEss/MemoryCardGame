import React from "react";

const Gameover = (props) => {
    const {outcome, onRestart} = props;

    return(
        <div id="gameover">
            <h1>{outcome}</h1>
            <button onClick={onRestart}>Replay</button>
        </div>
    )
}

export default Gameover;
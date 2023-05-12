import React from "react";

const Header = (props) => {
   const { score, round } = props;
    return(
    <div id="header">
        <h1>Memory Card Game</h1>
        <p>Get points by clicking on an image but don't click on any more than once!</p>
        <div>Score: {score}</div>
        <div>Round: {round}</div>
    </div>
    )
}

export default Header;

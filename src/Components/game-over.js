import React, { useState, useEffect } from "react";
import getImage from "../Game-logic/get-gameover-image";
import Loading from "./loading";
import './game-over.css';

const Gameover = (props) => {
    const {outcome, onRestart, options, selectedOption} = props;
    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState(null);

    useEffect(() => {
        async function fetchImage() {
            try {
                const imageUrl = getImage(options, selectedOption, outcome);
                const img = new Image();
                img.src = imageUrl; // Pre-load the image from the server

                // When finished loading, calls this function, which sets loading to false
                // and renders the gameover screen.
                img.onload = () => {
                    setLoading(false);
                    setImage(imageUrl);
                };
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        }
        fetchImage();
    }, [options, selectedOption, outcome]);

    if(loading) {
        return(
            <Loading/>
        );
    } else {
        return (
            <div id="gameover">
                <h1>{outcome}</h1>
                <img src={image} alt="" style={{ width: "200px", height: "auto" }}/>
                <button onClick={onRestart}>Replay</button>
            </div>
        );
    }
}

export default Gameover;

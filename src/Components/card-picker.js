import React, { useState, useEffect } from "react";
import createBoard from "../Game-logic/gameboard";
import trackPicks from "../Game-logic/track-picks";
import makeChoice from "../Game-logic/make-choice";
import checkNextRound from "../Game-logic/check-next-round";
import shuffleArray from "../Game-logic/shuffle-array";
import callAPI from "../Public/call-api";
import Loading from "./loading";
import './card-picker.css';
import { round1, round2, round3 } from "../Game-logic/round-length";

const CardPicker = (props) => {
    const { round, setRound, score, setScore, outcome, setOutcome } = props;
    const [gameboard, setGameboard] = useState(createBoard(round));
    const [shouldShuffle, setShouldShuffle] = useState(true);
    const [track] = useState(trackPicks());
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch the images from the API, when the round changes.
    useEffect(() => {
        const fetchImages = async () => {
            try {
                setLoading(true);
                const response = await callAPI('starter deck: yugi');
                const fetchedImages = response.data.slice(0, response.data.length).map((card) => card.card_images[0].image_url_small);
                // Shuffle the fetched images.
                const shuffledImages = fetchedImages.sort(() => Math.random() - 0.5);

                const randomSample = [];

                if(round === 1) {
                    while (randomSample.length < round1) {
                        const randomIndex = Math.floor(Math.random() * shuffledImages.length);
                        const randomImage = shuffledImages[randomIndex];
                        if (!randomSample.includes(randomImage)) {
                            randomSample.push(randomImage);
                        }
                    }
                    setImages(randomSample);
                    setLoading(false);
                }
                if(round === 2) {
                    while (randomSample.length < round2) {
                        const randomIndex = Math.floor(Math.random() * shuffledImages.length);
                        const randomImage = shuffledImages[randomIndex];
                        if (!randomSample.includes(randomImage)) {
                            randomSample.push(randomImage);
                        }
                    }
                    setImages(randomSample);
                    setLoading(false);
                }
                if(round === 3) {
                    while (randomSample.length < round3) {
                        const randomIndex = Math.floor(Math.random() * shuffledImages.length);
                        const randomImage = shuffledImages[randomIndex];
                        if (!randomSample.includes(randomImage)) {
                            randomSample.push(randomImage);
                        }
                    }
                    setImages(randomSample);
                    setLoading(false);
                }
            } catch (error) {
                    console.log(error);
                }
        };
        if(!images.length || round > 1)
            fetchImages();
    }, [images.length, round])
  
    const handleChoice = (choice) => {
      if(makeChoice(choice, track)) {
        setOutcome('Loser');
      } else {
        setScore(score + 1);
        if(checkNextRound(round, track)) {
          if(round === 3) {
            setOutcome('Winner');
          } else {
            track.reset();
            handleNextRound();
          }
        }
        // If the game has not ended and the round is not over, then shuffle.
        if(outcome === '') setShouldShuffle(true);
      }
    };

    // Handle the shuffle after a pick.
    useEffect(() => {
        if(shouldShuffle) {
            setGameboard(shuffleArray(gameboard));
            setShouldShuffle(false);
        }
    }, [shouldShuffle, gameboard]);   

    const handleNextRound = () => {
      setRound(round + 1);
      setGameboard(createBoard(round + 1));
      setShouldShuffle(true);
    };
  
    if(loading) {
        return (
            <Loading/>
        );
    } else {
        return (
            <div id="gameboard">
              {gameboard.map((card) => (
                <div className="card" key={card.number} onClick={() => handleChoice(card.number)}>
                    {/* {card.number} */}
                    <img src={images[card.number - 1]} alt={card.number} />
                </div>
              ))}
            </div>
        );
    }
  }

export default CardPicker;
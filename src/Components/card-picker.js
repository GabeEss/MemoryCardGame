import React, { useState, useEffect, useRef } from "react";
import createBoard from "../Game-logic/gameboard";
import trackPicks from "../Game-logic/track-picks";
import makeChoice from "../Game-logic/make-choice";
import checkNextRound from "../Game-logic/check-next-round";
import shuffleArray from "../Game-logic/shuffle-array";
import getRandomSample from "../Game-logic/get-random-image";
import callAPI from "../Public/call-api";
import Loading from "./loading";
import './card-picker.css';

const CardPicker = (props) => {
    const { round, setRound, score, setScore, outcome, setOutcome, selectedOption } = props;
    const [gameboard, setGameboard] = useState(createBoard(round));
    const [shouldShuffle, setShouldShuffle] = useState(false);
    const [track] = useState(trackPicks());
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const firstCall = useRef(true);

    // Fetch the images from the API at the first round.
    useEffect(() => {
        const fetchImages = async () => {
            try {
                setLoading(true);
                const response = await callAPI(selectedOption);
                const fetchedImages = await response.data.slice(0, response.data.length).map((card) => card.card_images[0].image_url_small);
                // Shuffle the fetched images.
                const shuffledImages = await fetchedImages.sort(() => Math.random() - 0.5);
                const sample = [];

                const randomSample = await getRandomSample(1, sample, shuffledImages);
                
                setImages(randomSample);
                setLoading(false);

            } catch (error) {
                console.log(error);
            }
        };
        // This fixes the weird double call to the API on the first load.
        if(firstCall.current) {
            fetchImages();
            firstCall.current = false;
        }
    }, [firstCall, selectedOption])
    
    // Fetch the images from the API, when the round changes.
    useEffect(() => {
        const fetchImages = async () => {
            try {
                setLoading(true);
                const response = await callAPI(selectedOption);
                const fetchedImages = response.data.slice(0, response.data.length).map((card) => card.card_images[0].image_url_small);
                // Shuffle the fetched images.
                const shuffledImages = fetchedImages.sort(() => Math.random() - 0.5);
                const randomSample = [];

                getRandomSample(round, randomSample, shuffledImages);
                setImages(randomSample);
                setLoading(false);
                
            } catch (error) {
                console.log(error);
            }
        };

        if(round > 1)
            fetchImages();
    }, [round, selectedOption])
  
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
                    <img src={images[card.number - 1]} alt={card.number}/>
                </div>
            ))}
            </div>
        );
    }
  }

export default CardPicker;
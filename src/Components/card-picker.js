import React, { useState, useEffect } from "react";
import createBoard from "./gameboard";
import trackPicks from "./Game-logic/track-picks";
import makeChoice from "./Game-logic/make-choice";
import checkNextRound from "./Game-logic/check-next-round";
import shuffleArray from "../Game-logic/shuffle-array";

const CardPicker = (props) => {
    const { round, setRound, score, setScore, outcome, setOutcome } = props;
    const [gameboard, setGameboard] = useState(createBoard(round));
    const [shouldShuffle, setShouldShuffle] = useState(false);
    const track = trackPicks();
  
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

    // Handle the shuffle.
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
  
    return (
        <div>
          {gameboard.map((card) => (
            <div className="card" key={card.number} onClick={() => handleChoice(card.number)}>
              {/* <img src={card.image} alt={card.name} /> */}
            </div>
          ))}
        </div>
    );
  }

export default CardPicker;
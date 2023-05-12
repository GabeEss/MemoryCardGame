import React, { useState, useEffect } from "react";
import createBoard from "./gameboard";
import trackPicks from "./Game-logic/track-picks";
import makeChoice from "./Game-logic/make-choice";
import checkNextRound from "./Game-logic/check-next-round";
import shuffleArray from "../Game-logic/shuffle-array";

const CardPicker = (props) => {
    const { round, setRound, score, setScore } = props;
    const [gameboard, setGameboard] = useState(createBoard(round));
    const [shouldShuffle, setShouldShuffle] = useState(false);
    const track = trackPicks();
  
    const handleChoice = (choice) => {
      if(makeChoice(choice, track)) {
        // handleGameOver();
        console.log("You lose.")
      } else {
        setScore(score + 1);
        if(checkNextRound(round, track)) {
          if(round === 3) {
            // handleWinGame();
            console.log("You win.")
          } else {
            handleNextRound();
          }
        }
        setShouldShuffle(true);
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
    };

    const handleGameOver = () => {
  
    }
  
    const handleWinGame = () => {
  
    }
  
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
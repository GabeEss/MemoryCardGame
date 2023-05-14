import React, { useState } from "react";
import './Components/App.css';
import CardPicker from "./Components/card-picker";
import Gameover from "./Components/game-over";
import Header from "./Components/header";
import DeckPicker from "./Components/deck-picker";

const App = () => {
  // Deck options
  const options = [ 
    { value: 'starter deck: yugi', label: 'Starter Deck: Yugi' },
    { value: 'starter deck: kaiba', label: 'Starter Deck: Kaiba' },
    { value: 'starter deck: joey', label: 'Starter Deck: Joey' },
    { value: 'starter deck: pegasus', label: 'Starter Deck: Pegasus' }
  ]

  const [round, setRound ] = useState(1);
  const [score, setScore] = useState(0);
  const [outcome, setOutcome] = useState(''); // winner or loser
  const [start, setStart] = useState(false); // start button state
  const [selectedOption, setSelectedOption] = useState(options[0].value); // deck options

  const handleRestart = () => {
    setRound(1);
    setScore(0);
    setOutcome('');
    setStart(false);
  }

  // When deck is chosen
  const handleOptionSelect = (value) => {
    setSelectedOption(value);
  };

  if(!start) {
    return(
      <div className="start-screen">
        <Header
        round={round}
        score={score}
        />
        <DeckPicker
        options={options}
        selectedOption={selectedOption}
        onOptionSelect={handleOptionSelect}
        />
        <button onClick={() => setStart(true)} className="start">Play</button>
      </div>
    );
  } else if(outcome === '') {
    return (
      <div>
      <Header
      round={round}
      score={score}
      />
      <CardPicker 
      round={round}
      setRound={setRound} 
      score={score}
      setScore={setScore}
      outcome={outcome}
      setOutcome={setOutcome}
      selectedOption={selectedOption}
      />
      </div>
    );
  } else {
    return(
      <Gameover 
      outcome={outcome}
      onRestart={handleRestart}
      options={options}
      selectedOption={selectedOption}
      />
    )
  }
}
export default App;
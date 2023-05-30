import React, { useState } from "react";

const GuessTheNumber = () => {
  const [secretNumber, setSecretNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [startGame, setStartGame] = useState(false);

  const handleStart = () => {
    setStartGame(true);
    setGuesses([]);
    setMessage("");
  };
  const handleGuess = () => {
    const parsedGuess = parseInt(guess);
    if (isNaN(parsedGuess)) {
      setMessage("Please enter a valid number!");
    } else {
      if (parsedGuess === secretNumber) {
        setMessage("Congratulations! You guessed the correct number!");
        setStartGame(false);
      } else if (parsedGuess < secretNumber) {
        setMessage("Try a higher number!");
      } else {
        setMessage("Try a lower number!");
      }
      setGuesses([...guesses, guess]);
      setGuess("");
    }
  };

  return (
    <div>
      <h1>Guess the Number</h1>
      <button onClick={handleStart}>Start Game</button>
      <p>{message}</p>
      {startGame && (
        <div>
          <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
          />
          <button onClick={handleGuess}>Guess</button>
          <div>
            {guesses.length > 0 ? `your guesses : ${guesses.join(",")}` : ""}
          </div>
        </div>
      )}
    </div>
  );
};

export default GuessTheNumber;

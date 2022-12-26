import CompletedRow from "./CompletedRow";
import CurrentRow from "./CurrentRow";
import EmptyRow from "./EmptyRow";
import Keyboard from "./Keyboard";
import WordList from "../WordList";
import { useState } from "react";

const setting = {
  solution:
    WordList[Math.floor(Math.random() * WordList.length)].toLocaleUpperCase(),
  wordLength: 5,
  maxGuess: 6,
};

const Wordle = () => {
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [win, setWin] = useState(false);
  const [lost, setLost] = useState(false);

  const onType = (event) => {
    if (!win && !lost && currentGuess.length < setting.wordLength) {
      setCurrentGuess(currentGuess + event.target.value);
    }
  };
  const onDelete = () => {
    if (currentGuess.length > 0) {
      setCurrentGuess(currentGuess.slice(0, currentGuess.length - 1));
    }
  };

  const onEnter = () => {
    if (currentGuess.length === setting.wordLength) {
      setGuesses((prevState) => [...prevState, currentGuess]);
      if (currentGuess === setting.solution) {
        setWin(true);
        window.alert("You win");
      } else if (guesses.length === setting.maxGuess - 1) {
        setLost(false);
        window.alert(`You lost! the word is ${setting.solution}`);
      }
    }
    setCurrentGuess("");
  };



  return (
    <div className="wordle">
      <div className="words">
        {guesses.map((ele, idx) => (
          <CompletedRow
            guess={ele}
            class={`completed-row guess-${idx + 1}`}
            setting={setting}
          />
        ))}
        {!lost && (
          <CurrentRow
            currentGuess={currentGuess}
            setting={setting}
            class={`current-row guess-${guesses.length + 1}`}
          />
        )}
        {guesses.length < setting.maxGuess - 1
          && Array(setting.maxGuess - guesses.length - 1)
              .fill("")
              .map((_, i) => (
                <EmptyRow
                  class={`empty-row guess-${guesses.length + i + 2}`}
                  setting={setting}
                />
              ))}
      </div>

      <div className="keyboard">
        <Keyboard onType={onType} onDelete={onDelete} onEnter={onEnter} />
      </div>
    </div>
  );
};

export default Wordle;

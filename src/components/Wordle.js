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
  keys: [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    ",Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
  ],
};

const Wordle = () => {
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [win, setWin] = useState(false);
  const [lost, setLost] = useState(false);
  const [keyClasses, setKeyClasses] = useState(Array(26).fill(""));

  const onType = (event) => {
    if (!win && !lost) {
      setCurrentGuess(currentGuess + event.target.value);
    }
  };
  const onDelete = () => {
    if (currentGuess.length > 0) {
      setCurrentGuess(currentGuess.slice(0, currentGuess.length - 1));
    }
  };

  const updateKeyClasses = (guess) => {
    guess.split("").forEach((letter, idx) => {
      if (
        !keyClasses[setting.keys.indexOf(letter)] ||
        keyClasses[setting.keys.indexOf(letter)] === "key-wrong-position"
      ) {
        if (letter === setting.solution[idx]) {
          keyClasses[setting.keys.indexOf(letter)] = "key-correct";
        } else if (setting.solution.includes(letter)) {
          keyClasses[setting.keys.indexOf(letter)] = "key-wrong-position";
        } else {
          keyClasses[setting.keys.indexOf(letter)] = "key-incorrect";
        }
      }
    });
    console.log(keyClasses);
  };

  const onEnter = () => {
    console.log(setting.solution);
    if (currentGuess.length === setting.wordLength) {
      setGuesses((prevState) => [...prevState, currentGuess]);
      updateKeyClasses(currentGuess);
      if (currentGuess === setting.solution) {
        setWin(true);
        window.alert("You win");
      } else if (guesses.length === setting.maxGuess - 1) {
        setLost(false);
        window.alert(`You lost! the word is ${setting.solution}`);
      }
    } else {
      console.log("animation");
    }
    setCurrentGuess("");
  };

  return (
    <div className="wordle">
      <div className="header">
        <h1>Wordle</h1>
      </div>
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
        {guesses.length < setting.maxGuess - 1 &&
          Array(setting.maxGuess - guesses.length - 1)
            .fill("")
            .map((_, i) => (
              <EmptyRow
                class={`empty-row guess-${guesses.length + i + 2}`}
                setting={setting}
              />
            ))}
      </div>

      <div className="keyboard">
        <Keyboard
          onType={onType}
          onDelete={onDelete}
          onEnter={onEnter}
          keyClasses={keyClasses}
        />
      </div>
    </div>
  );
};

export default Wordle;

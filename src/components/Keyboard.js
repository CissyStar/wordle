import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

const Keyboard = (props) => {
  const firstRowKeys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const secondRowKeys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const thirdRowKeys = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div className="keyboard">
      {firstRowKeys.map((letter, idx) => {
        return (
          <button value={letter} onClick={props.onType} className={`key ${props.keyClasses[idx]}`}>
            {letter}
          </button>
        );
      })}
      <br />
      {secondRowKeys.map((letter, idx) => {
        return (
          <button value={letter} onClick={props.onType} className={`key ${props.keyClasses[idx+10]}`}>
            {letter}
          </button>
        );
      })}
      <br />
      <button onClick={props.onEnter} className="key">
        Enter
      </button>
      {thirdRowKeys.map((letter, idx) => {
        return (
          <button value={letter} onClick={props.onType} className={`key ${props.keyClasses[idx+19]}`}>
            {letter}
          </button>
        );
      })}
      <button onClick={props.onDelete} className="key">
        <FontAwesomeIcon icon={faDeleteLeft} />
      </button>
    </div>
  );
};

export default Keyboard;

import Cell from "./Cell";

const CurrentRow = (props) => {
  return (
    <div className={props.class}>
      {props.currentGuess.split("").map((letter, i) => (
        <Cell content={letter} key={i} />
      ))}

      {Array(props.setting.wordLength - props.currentGuess.length).fill("")
        .map((_, i) => (
        <Cell content="" key={i} />
      ))}
    </div>
  );
};

export default CurrentRow;

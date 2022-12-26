const Keyboard = (props) => {
  const firstRowKeys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const secondRowKeys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const thirdRowKeys = ["Z", "X", "C", "V", "B", "N", "M"];

   



  return (
    <div className="keyboard">
      {firstRowKeys.map((letter, idx) => {
        return (
          <button value={letter} onClick={props.onType}>
            {letter}
          </button>
        );
      })}
      <br />
      {secondRowKeys.map((letter, idx) => {
        return (
          <button value={letter} onClick={props.onType}>
            {letter}
          </button>
        );
      })}
      <br />
      <button onClick={props.onEnter}>ENTER</button>
      {thirdRowKeys.map((letter, idx) => {
        return (
          <button value={letter} onClick={props.onType}>
            {letter}
          </button>
        );
      })}
      <button onClick={props.onDelete}>DELETE</button>
    </div>
  );
};

export default Keyboard;

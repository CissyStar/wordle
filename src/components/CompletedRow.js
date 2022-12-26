import Cell from "./Cell";

const CompletedRow = (props) => {
 
  const classes = props.guess.split("").map((letter, idx) => {
     if (letter === props.setting.solution[idx]) {
       return "correct-letter"
     } else if (props.setting.solution.includes(letter)) {
     return "correct-letter-wrong-position"
   }
   })

   return (<div className={props.class}>
      {props.guess.split("").map((letter,i) => (
       <Cell content={letter} key={i} class={classes[i]}/>
     ))}
 </div>
 )
}

export default CompletedRow;
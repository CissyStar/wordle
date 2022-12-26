import Cell from "./Cell";

const EmptyRow = (props) => {
    return (<div className={props.class}>
         {Array(props.setting.wordLength).fill("").map((_, i) => (
          <Cell content="" key={i} />
        ))}
    </div>
    )
  }
  
  export default EmptyRow;
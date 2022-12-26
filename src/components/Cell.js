const Cell = (props) => {
  return (
    <div className={`cell ${props.class}`} key={props.key}>
      {props.content}
     </div>
  )
}

export default Cell;
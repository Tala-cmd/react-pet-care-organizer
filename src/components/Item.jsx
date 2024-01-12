export default function Item( {item, onDeleteItem, onToggleItem} ){
  return(
    <li>
      <input type="checkbox" value={item.packed} onChange={()=> onToggleItem(item.id)}></input>
      <span style={item.packed ? {textDecoration: "line-through"} : {}}> 
      <b>{item.quantity}</b> {item.description} 
    </span>
    <button onClick={()=> onDeleteItem(item.id)}>❌</button>
    </li>
  )
}
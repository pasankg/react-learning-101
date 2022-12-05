function ListItem(props) {
 return (
  <li>
   <h4>{props.item.title} </h4>
   {props.item.text}
  </li>
 )
}
export default ListItem;
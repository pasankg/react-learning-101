import { categoryStyles } from "./vehicleStyles";

function ListItem(props) {
 let category = props.item.text && props.item.text.toLowerCase();
 return (
  <li style={category && categoryStyles[category]}>
   <h4>{props.item.title} </h4>
   {props.item.text}
  </li>
 )
}
export default ListItem;
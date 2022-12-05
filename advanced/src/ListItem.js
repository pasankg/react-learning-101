import { categoryStyles } from "./vehicleStyles";
import styles from './Navbar.module.css';

function ListItem(props) {
 let category = props.item.text && props.item.text.toLowerCase();
 return (
  <li style={category && categoryStyles[category]}>
   {/* Apply extended style from bootstrap. */}
   <h4 className={styles.h4Custom}>{props.item.title} </h4>
   {props.item.text}
  </li>
 )
}
export default ListItem;
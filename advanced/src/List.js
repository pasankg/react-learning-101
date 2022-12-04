import ListItem from "./ListItem";

function List(props) {

 let batch = props.items.map((item, index) =>
  <ListItem key={index.toString()} item={item} />
 );

 return (
  <>
   <h2>{props.title}</h2>
   <ul>
    {batch}
   </ul>
  </>
 );
}
export default List;
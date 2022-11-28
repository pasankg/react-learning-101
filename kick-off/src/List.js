// Creates a list component.
function List(props) {
 let batch = props.items.map(item => <li>{item}</li>);

 return (
  // Another syntax to indicate fragments is to use <>
  <>
   <h3>{props.title}</h3>
   <ul>{batch}</ul>
  </>
 )
}
export default List;
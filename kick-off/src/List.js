// Creates a list component.
function List(props) {
 // Inside the component the props are read only.
 // i.e. props.items is read only
 // i.e. props.items = [] throws an error.

 // What we can do is use states to re-render data into the component.
 // React is uni directional; data goes from parent to child.
 let batch = props.items.map((item, index) =>
  <li key={index}>{item}</li>
 );

 return (
  // Another syntax to indicate fragments is to use <>
  <>
   <h3>{props.title}</h3>
   <ul>{batch}</ul>
  </>
 )
}
export default List;
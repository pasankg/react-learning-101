import ListItem from "./ListItem";

function List(props) {
 let batch = props.items.map((item, index) =>
  <ListItem key={index.toString()} item={item} />
 );

 return (
  <>
   <div className='container'>
    {/* Apply the global style in Navbar module css */}
    <h2 className='italicText'>{props.title}</h2>
    <ul>
     {batch}
    </ul>
   </div>
  </>
 );
}
export default List;
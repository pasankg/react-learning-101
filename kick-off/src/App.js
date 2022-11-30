/************** v1.0 **************
  This is JS module.
  Everything inside this file is private by default.
  To make it accessible we need to export it.

  `default` is used to export one thing only.
  if default is not used it means multiple items are exported.
  i.e.  export {a,b,c} App
 
function App() {
  // Only single elements can be returned.
  // To return multiple elements we use react fragments.
 return (
  <div>Hello World !</div>
 );
}
**********************************/


/************** v2.0 **************
import Navbar from './Navbar'

function App() {
  // To return multiple elements we need to use react fragments
  return (
    <div >      
      <Navbar/>      
      <div className='bg-dark'>Hello World !</div>
    </div>    
  );
 }
export default App;
**********************************/

/************** v3.0 **************/
// Use react fragments to return multiple elements without using a div wrapper.
import { Fragment } from 'react'
import Navbar from './Navbar'
import List from './List'

function App() {
  let Vehicles = ['Car', 'Bus', 'Plane', 'Motorcycle'];
  let Electronics = ['Laptop', 'Desktop', 'Mobile Phone', 'Smart Watch'];
  let list = List({ title: 'Electronics', items: Electronics });
  return (
    <Fragment>
      <Navbar title="Using Fragments" />
      <List title="Vehicles" items={Vehicles} />

      {/* We can also equate a component with a function */}
      {list}
    </Fragment>
  )
}

export default App;

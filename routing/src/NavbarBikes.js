// Need to import Link component to provide the links to the router.
import { Link } from 'react-router-dom';

export default function NavbarBikes({ title, topics }) {

 let listItems = topics.map((item, index) => {
  return (
   <li className="nav-item" key={index}>
    <Link to={`/bikes/${item}`} className="nav-link">{item}</Link>
   </li>
  );
 });

 return (
  <>
   <div className='container-fluid'>
    <div className='row'>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
       <a className="navbar-brand" href="#">Routing Example - App: {title}</a>
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link to="/" className="nav-link">Home</Link>
        </li>
        {listItems}
       </ul>
      </div>
     </nav>
    </div>
   </div>
  </>
 );
}
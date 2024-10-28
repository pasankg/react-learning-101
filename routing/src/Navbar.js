// Need to import Link component to provide the links to the router.
import { Link } from 'react-router-dom';

export default function Navbar(props) {
 return (
  <>
   <div className='container-fluid'>
    <div className='row'>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
       <a className="navbar-brand" href="#">Routing Example - Layout: {props.title}</a>
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
         <Link to="/news/react" className="nav-link">React News</Link>
        </li>
        <li className="nav-item">
         <Link to="/news/javascript" className="nav-link">Javascript News</Link>
        </li>
        <li className="nav-item">
         <Link to="/bikes" className="nav-link">Bike News</Link>
        </li>
       </ul>
      </div>
     </nav>
    </div>
   </div>
  </>
 );
}
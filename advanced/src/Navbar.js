// Import Navbar CSS module.
import styles from './Navbar.module.css';

// Creates a Bootstrap navbar component.
function Navbar(props) {
 return (
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
   <div className="container">
    <a className="navbar-brand" href="#home">React Fundamentals: {props.title}</a>
   </div>

   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
     <li className="nav-item active">
      {/* Apply local style boldWhiteText to specific menu item. */}
      <a className={`nav-link ${styles.boldWhiteText}`} href="#home">Home</a>
     </li>
     <li class="nav-item">
      <a class="nav-link" href="#link">Link</a>
     </li>
    </ul>
   </div>
  </nav>
 )
}

Navbar.defaultProps = {
 title: 'Advanced'
}

export default Navbar;
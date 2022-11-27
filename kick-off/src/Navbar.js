// Creates a Bootstrap navbar component.
function Navbar(props) {
 return (
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
   <div className="container-fluid">
    <a className="navbar-brand" href="#">React Fundamentals: {props.title}</a>
   </div>
  </nav>
 )
}

export default Navbar;
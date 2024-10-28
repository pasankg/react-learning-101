// Creates a Bootstrap navbar component.
function Navbar(props) {
 return (
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
   <div className="container">
    <a className="navbar-brand" href="#home">React Fundamentals: {props.title}</a>
   </div>
  </nav>
 )
}

export default Navbar;
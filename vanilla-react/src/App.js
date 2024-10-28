import logo from './logo.svg';
import './App.css';

// App is a component.
// This is in XML. We need to follow XML rules.
// Rule 1 - Every element has to be closed using a closing tag or a self closing tag.
// Rule 2 - Attribute values that are strings must be in double quotes. i.e.className="App"
// Rule 3 - The curly braces{} represents js markup.
// Rule 4 - If it looks like a HTML element, it has to be lowecase. 
// Rule 5 - Keep in mind JS is case sensitive.
// Rule 6 - Use camelcase for js keywords. i.e. className, htmlFor, firstName
// Rule 7 - Return statement for this App function can ONLY return one element.
function App() {
  return (
    // Start of a XML fragment.
    <div className="App" htmlFor="" firstName="">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    // End of XML fragment.
  );
}

export default App;

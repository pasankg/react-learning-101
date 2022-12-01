// Import react states. It is a hook.
import { useState } from 'react';

function Counter(props) {
 // useState returns an array with two parameters.
 // Param 1 is the variable we need to keep track of.
 // Param 2 is the function that will set the new value for the Param 1
 let [counter, setCounter] = useState(props.startAt);

 // Create setCounter function.
 setTimeout(() => setCounter(counter += props.countBy), 1000);

 return (
  <>
   <p>Start At: {props.startAt}</p>
   <p>Count By: {props.countBy}</p>
   <h4>{counter}</h4>
  </>
 );
}

Counter.defaultProps = {
 startAt: 0,
 countBy: 1
}

export default Counter;